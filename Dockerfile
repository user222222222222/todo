# Basis-Image
FROM nginx:alpine

# Arbeitsverzeichnis im Container
WORKDIR /usr/share/nginx/html

# Kopiere die HTML-, CSS- und JS-Dateien in das Arbeitsverzeichnis
COPY index.html /usr/share/nginx/html/
COPY scripts.js /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
