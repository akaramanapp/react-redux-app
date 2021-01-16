import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from '../Reducers'
import sagas from '../Sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewareList = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
	middlewareList.push(createLogger());
}

const str = createStore(reducers, applyMiddleware(...middlewareList));

sagaMiddleware.run(sagas);
export const store = str;