import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeAPICall, makeAPICallWithThunk } from "./actions/index";

const getData = (state) => state.data.splice(0, 9);

const AsyncRedux = () => {
  const data = useSelector(getData);

  const dispatch = useDispatch();

  const fetchData = () => {
    //dispatch(makeAPICall());
    dispatch(makeAPICallWithThunk());
  };

  // View: the UI definition
  return (
    <>
      <button onClick={fetchData}>Get Data</button>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end"
        }}
      >
        {data &&
          data.map((item) => {
            return <div key={item.id}>Title : {item.title}</div>;
          })}
      </div>
    </>
  );
};

export default AsyncRedux;
