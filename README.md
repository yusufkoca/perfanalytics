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

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
