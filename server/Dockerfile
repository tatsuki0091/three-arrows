FROM node:16.17.0
ENV NODE_ENV=local
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*",  "./"]
RUN yarn install
COPY . .
EXPOSE 5000
RUN chown -R node /usr/src/app
USER node
CMD ["yarn", "start"]
