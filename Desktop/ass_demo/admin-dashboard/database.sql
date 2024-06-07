CREATE TABLE static_content (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_html VARCHAR(255),
    pos TEXT,
    date_create DATETIME DEFAULT CURRENT_TIMESTAMP,
    text TEXT
);

CREATE TABLE static_content_en (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_html VARCHAR(255),
    pos TEXT,
    date_create DATETIME DEFAULT CURRENT_TIMESTAMP,
    text TEXT
);

CREATE TABLE  posts
                        (id INTEGER PRIMARY KEY AUTOINCREMENT,
                         title TEXT NOT NULL,
                         date TEXT NOT NULL,
                         summary TEXT NOT NULL,
                         content TEXT NOT NULL,
                         image TEXT,
                         side_banner TEXT,
                         navigate_url TEXT);
						 
CREATE TABLE page_views (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    page VARCHAR(255),
    visitor_ip VARCHAR(255),
    visit_time DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE link_clicks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    link_type TEXT,
    count INTEGER DEFAULT 0
);



ALTER TABLE posts ADD COLUMN views INTEGER DEFAULT 0;


INSERT INTO static_content (id_html, text, pos) VALUES
('home_page', 'Trang chủ', 'dropdown_menu_top'),
('product_list', 'Sản phẩm', 'dropdown_menu'),
('menu-product-list1', 'Giải pháp độc quyền', 'dropdown_menu_top'),
('menu-product-list2', 'Dịch vụ công ty', 'dropdown_menu_top'),
('menu-product-list3', 'Dòng sản phẩm cao cấp', 'dropdown_menu_top'),
('about_AAS', 'Về AAS', 'dropdown_menu_top'),
('story1', 'Lịch sử của chúng tôi', 'dropdown_menu_top'),
('story2', 'Người sáng lập AAS', 'dropdown_menu_top'),
('story3', 'Tương lai & tầm nhìn', 'dropdown_menu_top'),
('contact_home', 'Liên hệ', 'dropdown_menu_top'),
('copyright_AAS', '© 2024 AAS VIETNAM', 'dropdown_menu_down'),
('story1', 'Lịch sử của chúng tôi', 'dropdown_menu_down'),
('story2', 'Người sáng lập AAS', 'dropdown_menu_down'),
('story3', 'Tương lai & tầm nhìn', 'dropdown_menu_down'),
('menu-item-news', 'Tin tức', 'dropdown_menu_down'),
('menu-item-sitemap', 'Sitemap', 'dropdown_menu_down'),
('sitemap-element1', 'Sản phẩm', 'dropdown_menu_down'),
('sitemap-element5', 'Tra cứu hóa đơn', 'dropdown_menu_down'),
('menu-item-juridical', 'Pháp lý', 'dropdown_menu_down'),
('juridical-element1', 'Chính sách bảo mật', 'dropdown_menu_down'),
('juridical-element2', 'Điều khoản và điều kiện', 'dropdown_menu_down'),
('juridical-element3', 'Chịu trách nhiệm nội dung:', 'dropdown_menu_down'),
('company_name', 'CÔNG TY AAS VIỆT NAM', 'sum_info'),
('company_address', 'Việt Nam', 'sum_info'),
('company_number', '+84 972292810', 'sum_info'),
('company_mail', 'vuna@aas-agronomy.com', 'sum_info');


INSERT INTO static_content_en (id_html, text, pos) VALUES
('home_page_en', 'Home', 'dropdown_menu_top'),
('product_list_en', 'Products', 'dropdown_menu'),
('menu-product-list1_en', 'Exclusive Solutions', 'dropdown_menu_top'),
('menu-product-list2_en', 'Company Services', 'dropdown_menu_top'),
('menu-product-list3_en', 'Premium Product Line', 'dropdown_menu_top'),
('about_AAS_en', 'About AAS', 'dropdown_menu_top'),
('story1_en', 'Our History', 'dropdown_menu_top'),
('story2_en', 'Founder of AAS', 'dropdown_menu_top'),
('story3_en', 'Future & Vision', 'dropdown_menu_top'),
('contact_home_en', 'Contact Us', 'dropdown_menu_top'),
('copyright_AAS_en', '© 2024 AAS VIETNAM', 'dropdown_menu_down'),
('story1_en', 'Our History', 'dropdown_menu_down'),
('story2_en', 'Founder of AAS', 'dropdown_menu_down'),
('story3_en', 'Future & Vision', 'dropdown_menu_down'),
('menu-item-news_en', 'News', 'dropdown_menu_down'),
('menu-item-sitemap_en', 'Sitemap', 'dropdown_menu_down'),
('sitemap-element1_en', 'Products', 'dropdown_menu_down'),
('sitemap-element5_en', 'Invoice Lookup', 'dropdown_menu_down'),
('menu-item-juridical_en', 'Legal', 'dropdown_menu_down'),
('juridical-element1_en', 'Privacy Policy', 'dropdown_menu_down'),
('juridical-element2_en', 'Terms and Conditions', 'dropdown_menu_down'),
('juridical-element3_en', 'Content Responsibility:', 'dropdown_menu_down'),
('company_name_en', 'AAS VIETNAM COMPANY', 'sum_info'),
('company_address_en', 'Vietnam', 'sum_info'),
('company_number_en', '+84 9064999803', 'sum_info'),
('company_mail_en', 'francis@aas-agronomy.com', 'sum_info');

INSERT INTO page_views (page, visitor_ip, visit_time) VALUES
('home', '192.168.1.1', '2023-06-10 08:00:00'),
('about', '192.168.1.2', '2023-06-10 09:00:00'),
('products', '192.168.1.3', '2023-06-10 10:00:00'),
('contact', '192.168.1.4', '2023-06-10 11:00:00'),
('home', '192.168.1.1', '2023-06-11 08:00:00'),
('about', '192.168.1.2', '2023-06-11 09:00:00'),
('products', '192.168.1.3', '2023-06-11 10:00:00'),
('contact', '192.168.1.4', '2023-06-11 11:00:00'),
('home', '192.168.1.5', '2023-06-12 08:00:00'),
('about', '192.168.1.6', '2023-06-12 09:00:00'),
('products', '192.168.1.7', '2023-06-12 10:00:00'),
('contact', '192.168.1.8', '2023-06-12 11:00:00');

INSERT INTO link_clicks (link_type, count) VALUES
('product_link', 150),  -- Giả sử có 150 lượt click vào trang sản phẩm
('contact_link', 100);  -- Giả sử có 100 lượt click vào trang liên hệ
