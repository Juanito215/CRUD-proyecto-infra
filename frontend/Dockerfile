# Etapa 1: build (compilar la app)
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: servir archivos estáticos con un servidor web
FROM nginx:alpine

# Copiar archivos compilados desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración personalizada de nginx (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
