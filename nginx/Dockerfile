FROM nginx:1.17.5 

WORKDIR /etc/nginx

COPY nginx.conf /etc/nginx/nginx.conf

COPY tlc.crt /etc/nginx/certs/tlc.crt

COPY tlc.key /etc/nginx/certs/tlc.key

EXPOSE 80

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]