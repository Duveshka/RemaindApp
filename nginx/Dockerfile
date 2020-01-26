FROM nginx:1.17.5 

WORKDIR /etc/nginx

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]