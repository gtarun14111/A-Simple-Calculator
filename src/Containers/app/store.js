import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { numberSetter } from './reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
  reducer: {
  	numberSetter
  },
  middleware
});
