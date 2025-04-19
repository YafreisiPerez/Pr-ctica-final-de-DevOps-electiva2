# Fase 1: Construcción (por si necesitas minificar o preparar archivos)
FROM alpine:3.21 AS builder

WORKDIR /app
COPY index.html styles.css script.js ./

# Imagen final con nginx y solo archivos estáticos
FROM nginx:1.27.4-alpine-slim

# Elimina archivos default de Nginx que no usamos
RUN rm -rf /usr/share/nginx/html/*

# Copiamos desde el builder solo los archivos necesarios
COPY --from=builder /app /usr/share/nginx/html

# Configuración de Nginx 
COPY nginx.conf /etc/nginx/nginx.conf  

# Exponer el puerto
EXPOSE 5001