# Client Side - Webpack Starter
Simple directory and config setup for a Webpack project with front-end web only. 

## Development 
### Install
```
npm install
```

### Serve

To serve at http://localhost:9000/:

```
npm start

//or 

webpack-dev-server --inline  --content-base public/ 
```

### Build

To compile HTML/CSS and JavaScript files for production:

```
webpack --config webpack.config.js
```


## Sublime 3

Install package : 'Babel'
At the bottom right, switch your build to 'babel (javascript)'

##


# Setting up the server

## Run Nodemon for Node to listen

```
cd live-game-1 
nodemon server.js --port=3000 -w .
```

## Run webpack but using node as content base
```
webpack-dev-server  --content-base http://localhost:3000 --port=8080
```