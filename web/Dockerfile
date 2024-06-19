# Basis-Image
FROM nginx:alpine

# Arbeitsverzeichnis im Container
WORKDIR /usr/share/nginx/html

# Kopiere die HTML-, CSS- und JS-Dateien in das Arbeitsverzeichnis
COPY . .

# Starte NGINX
CMD ["nginx", "-g", "daemon off;"]
