# Use the official NGINX base image
FROM nginx:alpine

# Copy your index.html, style.css, and main.js to the NGINX web root
COPY index.html style.css main.js /usr/share/nginx/html/

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start NGINX server when the container runs
CMD ["nginx", "-g", "daemon off;"]
