import React, { useState, useEffect } from "react";
import "./task.css";
import "./taskdata.json";
import { useDispatch } from "react-redux";

export default function Task() {
  const dispatch = useDispatch();
  const data = [
    {
      id: 100,
      name: "Cosmetics",
      productList: [
        {
          _id: 1,
          name: "Hair Oil",
          price: 122,
        },
        {
          _id: 2,
          name: "Face wash",
          price: 123,
        },
      ],
    },
    {
      id: 200,
      name: "Household",
      productList: [
        { _id: 3, name: "Hair Oil", price: 122 },
        {
          _id: 4,
          name: "Face wash",
          price: 123,
        },
      ],
    },
  ];
  //   const [List, setList] = useState(data);
  const [id, setId] = useState(new Date().valueOf());

  const showProducts = () => {
    return data.map((item) => {
      //   item["id"] = id;
      return (
        <>
          <h6>{item.name}</h6>
          <div className="coso">
            <div className="real">
              <h6>Name: {item.productList[0].name}</h6>
              <h6>Price:{item.productList[0].price} </h6>
              <button
                // onClick={() => alert(item.id)}
                onClick={() =>
                  dispatch({
                    type: "Add_Item",
                    payload: [item.productList[0]._id, item.productList[0]],
                  })
                }
              >
                Add to the cart
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: "Remove_item",
                    payload: [item.productList[0]._id],
                  })
                }
              >
                Remove from cart
              </button>
            </div>
            <div className="coso1">
              <h6>Name:{item.productList[1].name}</h6>
              <h6>Price:{item.productList[1].price}</h6>
              <button
                onClick={() =>
                  dispatch({
                    type: "Add_Item",
                    payload: [item.productList[1]._id, item.productList[1]],
                  })
                }
              >
                Add to the cart
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: "Remove_item",
                    payload: [item.productList[1]._id],
                  })
                }
              >
                Remove from cart
              </button>
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <>
      {showProducts()}
      {}
    </>
  );
}
