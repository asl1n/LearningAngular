import { postStateInterface } from '../types/postState.interface';
import { createReducer, on } from '@ngrx/store';
import * as postActions from './actions';

export const initialState: postStateInterface = {
  loading: false,
  posts: [],
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(postActions.getPosts, (state) => ({ ...state, loading: true }))
);
