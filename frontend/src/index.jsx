import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from "redux"
import { Provider } from "react-redux"
import promise from "redux-promise"

import App from './main/app'
import reducers from "./main/reducers";

const devtools = window.__REDUX_DEVTOOLS_EXTENSIONS__ && __REDUX_DEVTOOLS_EXTENSIONS__()
const store = applyMiddleware(promise)(createStore)(reducers, devtools)

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('app')
)