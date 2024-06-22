import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../action/actions';

const DataComponent = () => {
    const dispatch = useDispatch();
    const dataState = useSelector(state => state.data);
    console.log(dataState)

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <div>
        {dataState.loading && <p>Loading...</p>}
        {dataState.error && <p>Error: {dataState.error}</p>}
        {dataState.data && (
            <ul>
                <li>ID: {dataState.data.id}</li>
                <li>Title: {dataState.data.title}</li>
                <li>Description: {dataState.data.description}</li>
                <li>Price: ${dataState.data.price}</li>
            </ul>
        )}
    </div>
    );
};

export default DataComponent;
