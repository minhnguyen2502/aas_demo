from bs4 import BeautifulSoup
import os
import json

# Danh sách các id_html cần được cập nhật
id_html_list = [
    "home_page", "product_list", "menu-product-list1", "menu-product-list2",
    "menu-product-list3", "about_AAS", "story1", "story2", "story3",
    "contact_home", "copyright_AAS", "menu-item-news", "menu-item-sitemap",
    "sitemap-element1", "sitemap-element5", "menu-item-juridical",
    "juridical-element1", "juridical-element2", "juridical-element3",
    "company_name", "company_address", "company_number", "company_mail"
]

with open('paths-en.json', 'r') as file:
    paths = json.load(file)["html_paths"]

for path in paths:
    if os.path.isfile(path) and path.endswith('.html'):
        print(f"Processing {path}...")
        with open(path, 'r', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')
        
        for tag_id in id_html_list:
            tags = soup.find_all(id=tag_id)
            for tag in tags:
                new_id = f"{tag_id}_en"
                tag['id'] = new_id
                print(f"Updated {tag_id} to {new_id}")
        
        with open(path, 'w', encoding='utf-8') as file:
            file.write(str(soup))
    else:
        print(f"File not found or not an HTML file: {path}")

print("All specified HTML IDs have been updated with new id suffixes.")
