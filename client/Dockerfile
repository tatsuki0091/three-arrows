FROM node:16.17.0
ENV NODE_ENV=local
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN yarn install
COPY . /usr/src/app
EXPOSE 3000
RUN chown -R node /usr/src/app
CMD ["yarn", "run", "dev"]
