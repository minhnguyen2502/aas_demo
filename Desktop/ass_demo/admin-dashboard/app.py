from flask import Flask, render_template, request, jsonify, render_template_string
from flask_cors import CORS
import sqlite3
import os
import logging
from bs4 import BeautifulSoup
import json

app = Flask(__name__)
CORS(app)
DATABASE = 'database.db'

def get_db():
    """Create and return a database connection."""
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def update_html_files():
    with open('paths.json', 'r') as file:
        paths = json.load(file)["html_paths"]

    with get_db() as conn:
        c = conn.cursor()
        c.execute("SELECT id_html, text FROM static_content")
        updates = c.fetchall()

    for path in paths:
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as file:
                soup = BeautifulSoup(file, 'html.parser')

            for update in updates:
                tags = soup.find_all(id=update['id_html'])
                for tag in tags:
                    tag.string = update['text']

            with open(path, 'w', encoding='utf-8') as file:
                file.write(str(soup))

            print(f"Updated HTML content in {path}")
        else:
            print(f"File {path} not found.")

@app.route('/')
def index():
    """Serve the main HTML page with posts data."""
    with get_db() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM posts ORDER BY date DESC")
        posts = cursor.fetchall()
    posts_data = [dict(post) for post in posts]

    app.logger.debug("Loaded posts data: %s", posts_data)

    return render_template('ass_home/admin.html', posts=posts_data)

@app.route('/api/update_click', methods=['POST'])
def update_click():
    link_type = request.json['link_type']
    with get_db() as conn:
        cursor = conn.cursor()
        cursor.execute("INSERT INTO link_clicks (link_type, count) VALUES (?, 1) ON CONFLICT(link_type) DO UPDATE SET count = count + 1 WHERE link_type = ?", (link_type, link_type))
        conn.commit()
    return jsonify({'message': 'Click updated successfully'})

@app.route('/api/get_clicks', methods=['GET'])
def get_clicks():
    with get_db() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT link_type, count FROM link_clicks")
        clicks = cursor.fetchall()
    return jsonify([{'link_type': click['link_type'], 'count': click['count']} for click in clicks])



@app.route('/api/stats/posts')
def get_posts_stats():
    with get_db() as conn:
        cursor = conn.cursor()
        # Truy vấn số lượng bài viết
        cursor.execute("SELECT COUNT(*) as total_posts FROM posts")
        total_posts = cursor.fetchone()['total_posts']
        
        # Truy vấn số lượt xem trung bình
        cursor.execute("SELECT AVG(views) as avg_views FROM posts")
        avg_view_result = cursor.fetchone()
        avg_views = avg_view_result['avg_views'] if avg_view_result and avg_view_result['avg_views'] is not None else 0

    return jsonify({'total_posts': total_posts, 'average_views': avg_views})


@app.route('/api/visits')
def get_visits():
    query = "SELECT page, COUNT(*) as count FROM page_views GROUP BY page"
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(query)
    visits = cursor.fetchall()
    return jsonify([dict(visit) for visit in visits])

@app.route('/add_post', methods=['POST'])
def add_post():
    try:
        data = request.get_json()
        if not data:
            raise ValueError("No data provided")

        title = data.get('title')
        date = data.get('date')
        summary = data.get('summary')
        content = data.get('content')
        image = data.get('image')
        side_banner = data.get('side_banner')  # handle side_banner
        navigate_url = data.get('navigate_url')

        if not all([title, date, summary, content, navigate_url]):
            missing_fields = [field for field in ["title", "date", "summary", "content", "navigate_url"] if not data.get(field)]
            raise ValueError(f"Missing data fields: {', '.join(missing_fields)}")
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("INSERT INTO posts (title, date, summary, content, image, side_banner, navigate_url) VALUES (?, ?, ?, ?, ?, ?, ?)",
                           (title, date, summary, content, image, side_banner, navigate_url))
            conn.commit()

        if navigate_url:
            generate_html_post(navigate_url, title, date, content, image, side_banner)

    except Exception as e:
        app.logger.error(f"Error adding post: {e}")
        return jsonify({'message': 'Failed to add post', 'error': str(e)}), 400

    return jsonify({'message': 'Post added successfully'}), 201

def create_html_post(navigate_url, title, date, content, image, side_banner):
    try:
        directory, filename = os.path.split(navigate_url) # split path -> directory, filename
        
        # Đọc nội dung template
        with open('templates/ass_home/bai-viet/template.html', 'r', encoding='utf-8') as file: # fixed
            soup = BeautifulSoup(file, 'html.parser')

        # Cập nhật các trường dữ liệu
        if title:
            title_tag = soup.find(id='title_news')
            if title_tag:
                title_tag.string = title
        
        if date:
            date_tag = soup.find(id='date_news')
            if date_tag:
                date_tag.string = date
        
        if content:
            content_tag = soup.find(id='content_news')
            if content_tag:
                content_tag.string = content
        
        if image:
            image_tag = soup.find(id='image_news')
            if image_tag:
                image_tag['src'] = image
        
        if side_banner:
            side_banner_tag = soup.find(id='side_banner_news')
            if side_banner_tag:
                side_banner_tag['src'] = side_banner
                
        with open(os.path.join('templates', 'ass_home', directory, filename), 'w', encoding='utf-8') as file:
            file.write(str(soup))
        print(f'Created new HTML file at {navigate_url}')

    except Exception as e:
        print('An error occured:', e)



@app.route('/delete_post/<int:post_id>', methods=['DELETE'])
def delete_post(post_id):
    try:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("DELETE FROM posts WHERE id = ?", (post_id,))
            conn.commit()
            if cursor.rowcount == 0:
                return jsonify({'message': 'No post found with the provided ID'}), 404
            return jsonify({'message': 'Post deleted successfully'}), 200
    except Exception as e:
        app.logger.error(f"Error deleting post: {e}")
        return jsonify({'message': 'Failed to delete post', 'error': str(e)}), 500

@app.route('/get_posts', methods=['GET'])
def get_posts():
    with get_db() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT id, title, date, summary, content, image, side_banner, navigate_url FROM posts ORDER BY date DESC")
        posts = cursor.fetchall()
    return jsonify([dict(post) for post in posts])

@app.route('/get_recent_posts', methods=['GET'])
def get_recent_posts():
    with get_db() as conn:
        cursor = conn.cursor()
        # Truy vấn chỉ lấy 8 bài viết mới nhất
        cursor.execute("SELECT id, title, date, summary, content, image, side_banner, navigate_url FROM posts ORDER BY date DESC LIMIT 8")
        posts = cursor.fetchall()
    return jsonify([dict(post) for post in posts])


@app.route('/get_post/<int:post_id>', methods=['GET'])
def get_post(post_id):
    with get_db() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM posts WHERE id = ?", (post_id,))
        post = cursor.fetchone()
        if post:
            return jsonify(dict(post)), 200
        else:
            return jsonify({'message': 'Post not found'}), 404

@app.route('/update_post', methods=['POST'])
def update_post():
    data = request.get_json()
    post_id = data.get('id')

    if not post_id:
        return jsonify({'message': 'No post ID provided'}), 400

    try:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM posts WHERE id = ?", (post_id,))
            existing_post = cursor.fetchone()

            if not existing_post:
                return jsonify({'message': 'Post not found'}), 404

            updates = []
            params = []

            for field in ['title', 'date', 'summary', 'image', 'side_banner', 'navigate_url']:
                new_value = data.get(field)
                if new_value and new_value != existing_post[field]:
                    updates.append(f"{field} = ?")
                    params.append(new_value)

            if not updates:
                return jsonify({'message': 'No changes detected'}), 200

            params.append(post_id)
            update_sql = "UPDATE posts SET " + ", ".join(updates) + " WHERE id = ?"
            cursor.execute(update_sql, params)
            conn.commit()

            # After updating the post in the database, update the corresponding HTML file
            if 'navigate_url' in data:
                generate_html_post(data['navigate_url'], data.get('title'), data.get('date'), data.get('content'), data.get('image'), data.get('side_banner'))

        return jsonify({'message': 'Post updated successfully'}), 200
    except Exception as e:
        return jsonify({'message': 'Failed to update post', 'error': str(e)}), 500
    
import json
import os

def add_path_to_json(path):
    json_file_path = 'paths.json'
    with open(json_file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
        html_paths = data.get("html_paths", [])

    # Kiểm tra và thêm đường dẫn mới nếu chưa tồn tại
    if path not in html_paths:
        html_paths.append(path)
        data["html_paths"] = html_paths
        with open(json_file_path, 'w', encoding='utf-8') as file:
            json.dump(data, file, indent=4)
        print(f"Added {path} to {json_file_path}")


def generate_html_post(navigate_url, title, date, content, image, side_banner):
    try:
        directory, filename = os.path.split(navigate_url)  # split path -> directory, filename
        
        # Xác định đường dẫn lưu file
        save_path = os.path.join('templates', 'ass_home', directory, filename)
        
        # Đọc nội dung template
        with open('templates/ass_home/bai-viet/template.html', 'r', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')

        # Cập nhật các trường dữ liệu
        if title:
            title_tag = soup.find(id='title_news')
            if title_tag:
                title_tag.string = title
        
        if date:
            date_tag = soup.find(id='date_news')
            if date_tag:
                date_tag.string = date
        
        if content:
            content_tag = soup.find(id='content_news')
            if content_tag:
                # Xóa nội dung hiện tại
                content_tag.clear()
                # Phân tích và thêm nội dung HTML mới
                new_content = BeautifulSoup(content, 'html.parser')
                content_tag.append(new_content)
        
        if image:
            image_tag = soup.find(id='image_news')
            if image_tag:
                image_tag['src'] = image
        
        if side_banner:
            side_banner_tag = soup.find(id='side_banner_news')
            if side_banner_tag:
                side_banner_tag['src'] = side_banner
        
        # Ghi nội dung đã cập nhật vào file
        with open(save_path, 'w', encoding='utf-8') as file:
            file.write(str(soup))
        
        # Thêm đường dẫn vào JSON nếu chưa có
        add_path_to_json(save_path)
        
        print(f'Created or updated HTML file at {save_path}')
    except Exception as e:
        print('An error occurred:', e)


@app.route('/get_content')
def get_content():
    pos = request.args.get('pos')
    lang = request.args.get('lang', 'vi')
    table = 'static_content_en' if lang == 'en' else 'static_content'

    with get_db() as conn:
        cursor = conn.cursor()
        cursor.execute(f"SELECT id_html, text FROM {table} WHERE pos = ?", (pos,))
        content = [{'id_html': row['id_html'], 'text': row['text']} for row in cursor.fetchall()]
    return jsonify(content)

@app.route('/update_content', methods=['POST'])
def update_content():
    try:
        data = request.get_json()
        id_html = data['id_html']
        new_text = data['text']
        lang = data.get('lang', 'vi')

        if not id_html or not new_text:
            raise ValueError("Missing data fields: id_html or text")

        with get_db() as conn:
            cursor = conn.cursor()
            table = 'static_content_en' if lang == 'en' else 'static_content'
            cursor.execute(f"UPDATE {table} SET text = ? WHERE id_html = ?", (new_text, id_html))
            conn.commit()
        update_single_html_content(id_html, new_text, lang)
    except Exception as e:
        app.logger.error(f"Error updating content: {e}")
        return jsonify({'message': 'Failed to update content', 'error': str(e)}), 400

    return jsonify({'message': 'Content updated successfully'}), 200



def update_single_html_content(id_html, text, lang='vi'):
    paths_file = 'paths.json' if lang == 'vi' else 'paths-en.json'

    with open(paths_file, 'r') as file:
        paths = json.load(file)["html_paths"]

    for path in paths:
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as file:
                soup = BeautifulSoup(file, 'html.parser')

            tag = soup.find(id=id_html)
            if tag:
                tag.string = text
                with open(path, 'w', encoding='utf-8') as file:
                    file.write(str(soup))
                print(f"Updated {id_html} in {path} for language '{lang}'")
            else:
                print(f"{id_html} not found in {path}")
        else:
            print(f"File {path} not found.")


if __name__ == '__main__':
    app.run(debug=True)