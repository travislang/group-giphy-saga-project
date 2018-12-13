import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import favoriteList from './redux/reducers/favoriteList.reducer';
import searchResults from './redux/reducers/searchResults.reducer';

function* fetchSearchResults() {

}

function* postFavorite() {

}

function* setCategory() {

}

function* watcherSaga() {
    yield takeEvery('', fetchSearchResults);
    yield takeEvery('', postFavorite);
    yield takeEvery('', setCategory);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({ favoriteList, searchResults }),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
