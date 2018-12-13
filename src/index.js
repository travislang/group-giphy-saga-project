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
import categoryList from './redux/reducers/categoryList.reducer';

function* fetchSearchResults(action) {
    try {
        const gifResults = yield call(axios.get, `/api/search?term=${action.payload}`)
        yield put({ type: 'SET_GIFS', payload: gifResults })
    } catch(err) {
        console.log('error in fetchGifs saga:', err);
    }
}

function* postFavorite() {

}

function* setCategory() {

}

function* fetchCategories() {
    const catResults = yield call(axios.get, '/api/category')
    yield put({type: 'SET_CATEGORIES', payload: catResults})
}

function* watcherSaga() {
    yield takeEvery('FETCH_GIFS', fetchSearchResults);
    yield takeEvery('FETCH_CATEGORIES', fetchCategories);
    // yield takeEvery('', postFavorite);
    // yield takeEvery('', setCategory);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({ favoriteList, searchResults, categoryList }),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
