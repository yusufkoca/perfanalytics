# Perfanalytics

Collects and visualize website performance

## Demo

Dashboard -> [https://perfanalytics-webapp.herokuapp.com/](https://perfanalytics-webapp.herokuapp.com/)

Demo Clients to generate data -> [https://perfanalytics-webapp.herokuapp.com/demo](https://perfanalytics-webapp.herokuapp.com/demo) and [https://perfanalytics-webapp.herokuapp.com/demo2](https://perfanalytics-webapp.herokuapp.com/demo2)

Client Library to include in pages -> [https://perfanalytics-webapp.herokuapp.com/perfanalytics.js](https://perfanalytics-webapp.herokuapp.com/perfanalytics.js)

## Tech Stack

- React, Material-UI, and Chart.js for dashboard
- Vanilla JS for client script
- Node.js & Express for backend
- Mongodb cloud for DB
- Dockerized and Deployed to Heroku via CircleCI

## Usage

Include script tag into your page to gather data.

```
<script src="https://perfanalytics-app.herokuapp.com/perfanalytics.js"></script>
```

Then display results at -> [https://perfanalytics-webapp.herokuapp.com/](https://perfanalytics-webapp.herokuapp.com/)

## Development

1. Run `npm install` on root directory
2. Copy or rename example.env file to be a .env file in root directory
3. Modify .env file to include mongodb connection string of yours
4. Start server with `npm run-script dev` command
5. Go to dashboard directory `cd dashboard`
6. Run `npm install`
7. Run `npm start` to run react dashboard app locally.

## Production

1. Set Create a prod.env file at root folder and specify production mongodb connection string.
2. Run `docker-compose up`

Or

1. Set MONGODB_URI env variable at your deployment server.
2. Run docker build and run commands.

Alternatively

1. Run `docker pull yufus/perfanalytics'
2. Run `docker run --env-file prod.env yufus/perfanalytics` or `docker run -e MONGODB_URI='YOUR_MONGO_CONNECTION' yufus/perfanalytics`

## CI & CD

In order to configure CI & CD heroku free dyno and circleci tools prefered. 
1. Create a free dyno on heroku
2. Set MONGODB_URI env variable on heroku
3. Create an api key for circleci to use
4. Create circleci project and connect it with the github repo of yours
5. Set HEROKU_APP_NAME env variable to your newly created heroku app's name on circleci
6. Set HEROKU_API_KEY env variable to your newly created heroku api key
7. Commit changes to your repo and auto deployment to heroku should work now.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
