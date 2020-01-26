FROM node:12.14.1

WORKDIR /usr/app/front

COPY ./ /usr/app/front

RUN npm install

EXPOSE 4200

CMD ["npm", "run", "start"]