# Laravel Sailの公式ベースイメージを使用（PHP 8.4）
FROM php:8.4-fpm

# 必要なツールをインストール
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    curl \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Composerをインストール
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Node.jsをインストール（Reactビルド用）
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

# 作業ディレクトリを設定
WORKDIR /var/www/html

# プロジェクト全体をコピー
COPY . .

# Laravelの依存関係をインストール
RUN composer install --no-dev --optimize-autoloader

# Reactの依存関係をインストールしてビルド
RUN npm install && npm run prod

# Laravelキャッシュの最適化
RUN php artisan config:cache && php artisan route:cache && php artisan view:cache

# ポートを公開
EXPOSE 80

# サーバーを起動
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=80"]
