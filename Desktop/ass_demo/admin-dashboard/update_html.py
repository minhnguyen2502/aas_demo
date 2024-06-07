from bs4 import BeautifulSoup
import sqlite3
import json

with open('paths.json', 'r') as file:
    paths = json.load(file)["html_paths"]

# conn = sqlite3.connect('database.db')
# c = conn.cursor()

# c.execute("SELECT id_html, text FROM static_content")
# updates = c.fetchall()
# conn.close()
updates = [('product_list', '   Sản Phẩm   '), ('about_AAS', '   Về AAS   ')]

for path in paths:
    with open(path, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')

    for update in updates:
        tags = soup.find_all(id=update[0])
        for tag in tags:
            tag.clear()  # Xóa nội dung hiện tại
            non_breaking_space_text = update[1].replace(' ', '\u00A0')  # Thay thế khoảng trắng bằng non-breaking spaces
            tag.append(non_breaking_space_text)

    with open(path, 'w', encoding='utf-8') as file:
        file.write(str(soup))

print("Tất cả nội dung đã được cập nhật vào một file mới.")
