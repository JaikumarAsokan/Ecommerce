import axios from 'axios';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actionTypes';

export const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST
    }
};

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
};

export const fetchDataFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }
};

export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest());
        axios.get('https://dummyjson.com/products')
            .then(response => {
                const data = response.data;
                dispatch(fetchDataSuccess(data));
                console.log(response)
            })
            .catch(error => {
                dispatch(fetchDataFailure(error.message));
            });
    }
};
