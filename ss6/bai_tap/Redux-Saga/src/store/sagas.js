import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE
} from './action';
import { fetchUsers, deleteUserApi } from '../api';


function* getUsersSaga() {
    try {
        const res = yield call(fetchUsers);
        yield put({ type: GET_USERS_SUCCESS, payload: res.data });
    } catch (err) {
        yield put({ type: GET_USERS_FAILURE, payload: err.message || 'Fetch failed' });
    }
}


function* deleteUserSaga(action) {
    try {
// JSONPlaceholder won't actually delete, but returns a 200/204
        yield call(deleteUserApi, action.payload);
        yield put({ type: DELETE_USER_SUCCESS, payload: action.payload });

    } catch (err) {
        yield put({ type: DELETE_USER_FAILURE, payload: err.message || 'Delete failed' });

    }
}


export default function* rootSaga() {
    yield all([
        takeEvery(GET_USERS_REQUEST, getUsersSaga),
        takeEvery(DELETE_USER_REQUEST, deleteUserSaga)
    ]);
}