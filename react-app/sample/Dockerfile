# pull official base image
FROM node:12

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
# COPY package-lock.json ./
RUN yarn install --silent
RUN yarn add react-scripts --silent

# add app
COPY . ./

# start app
CMD ["yarn", "start"]