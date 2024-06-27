import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../action/actions";
import dataCSS from "../App.module.css";

const DataComponent = () => {
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state.data);
  console.log(dataState);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {dataState.loading && <p>Loading...</p>}
      {dataState.error && <p>Error: {dataState.error}</p>}
      {dataState.data && dataState.data.products ? (
        <ul className={dataCSS.items}>
          {dataState.data.products.map((item) => {
            return (
              <>
                <li>
                  {/* <img src={item.images} alt="" width="200"/> */}
                  {Array.isArray(item.images) && item.images.length > 0 ? (
                    <img src={item.images[0]} alt={item.title}  />
                  ) : (
                    <p>No image available</p>
                  )}
                  <h4>{item.title}</h4>
                  <p>Price : ${item.price}</p>
                  <p>Discount : {item.discountPercentage}%</p>
                  <p>Warranty : {item.warrantyInformation}</p>
                </li>
              </>
            );
          })}
        </ul>
      ) : (
        !dataState.loading && <p>No data available</p>
      )}
    </div>
  );
};

export default DataComponent;
