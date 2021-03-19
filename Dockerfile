FROM node:alpine
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./

RUN npm install
# Copy app source code
COPY . .

RUN cd dashboard && npm install && npm run build

#Expose port and start application
EXPOSE 80
CMD [ "npm", "start" ]