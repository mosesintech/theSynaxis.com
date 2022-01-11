<?php
// Menu support.
register_nav_menus(
    array(
        'menu-1' => esc_html__('Header Menu', 'thesynaxis'),
        'menu-2' => esc_html__('Footer Menu', 'thesynaxis'),
    )
);
add_theme_support('post-thumbnails');
