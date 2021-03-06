# crypto-table

Crypto currency table with sticky header and draggable rows/columns.

Demo:

<img src="https://i.imgur.com/1hKvQiZ.gif" width="500"/>

Sticky header:

<img src="https://i.imgur.com/mXrP7i7.gif" width="500"/>



## About

This is just a reference project that combines many different technologies.

Server:

-   [express](https://github.com/expressjs/express)
-   [lowdb](https://github.com/typicode/lowdb)
-   [socket.io](https://github.com/socketio/socket.io)

Client:

-   [react](https://github.com/facebook/react)
-   [react-router](https://github.com/ReactTraining/react-router)
-   [redux](https://github.com/reduxjs/redux) - state container
-   [immer](https://github.com/immerjs/immer) - immutable state
-   [reselect](https://github.com/reduxjs/reselect) - redux state selector with memoization
-   [redux-saga](https://github.com/redux-saga/redux-saga) - side effect manager that uses generators
-   [react-virtualized](https://github.com/bvaughn/react-virtualized) - virtualized table
-   [react-sortable-hoc](https://github.com/clauderic/react-sortable-hoc) - drag'n'drop
-   [ant design](https://github.com/ant-design/ant-design) - UI Library
-   [less](http://lesscss.org/)
-   [d3](https://d3js.org) - charts
-   [socket-io.client](https://github.com/socketio/socket.io-client) - connection to server

Data sources: Binance API, Cryptocompare API. Coinmarketcap - to create list of the currencies.

## Usage

For CryptoCompare API to work there should be [API key](https://www.cryptocompare.com/cryptopian/api-keys) in the .env file: `CC_API_KEY = 'api key'`

-   `yarn install`
-   `yarn run createDbFiles`
-   `yarn start`
