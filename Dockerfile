# Use the official NGINX base image
FROM nginx:alpine

# Copy your index.html file to the NGINX web root
COPY index.html /usr/share/nginx/html/

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start NGINX server when the container runs
CMD ["nginx", "-g", "daemon off;"]
