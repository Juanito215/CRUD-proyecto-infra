# Imagen base oficial de Node.js
FROM node:18-alpine

# Establecer directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de configuración
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código al contenedor
COPY . .

# Crear la carpeta de uploads si no existe
RUN mkdir -p uploads

# Exponer el puerto que usa el backend
EXPOSE 5000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
