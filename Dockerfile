FROM node:12.16.2

LABEL maintainer="Richard Neil Ilagan <ilagan@amazon.com>" \
      company="Amazon Web Services" \
      url="https://richardneililagan.com" \
      app="sandbox"

WORKDIR /app

EXPOSE 8000

COPY package.json .

RUN npm set progress=false && \
    npm config set depth 0 && \
    npm install

COPY . .

ENTRYPOINT ["npm", "start"]
CMD npm run start
