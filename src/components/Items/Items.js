import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import Item from "../Item/Item";
import { Context } from "../../Context/Context";

function Items() {
  const { state, dispatch } = useContext(Context);
  
  const data = [
     { id: 0, name: "Leanne Graham" },
     { id: 1, name: "Ervin Howell" },
     { id: 2, name: "Clementine Bauch" },
     { id: 3, name: "Patricia Lebsack" },
     { id: 4, name: "Chelsey Dietrich" },
   ];
  useEffect(() => {

    dispatch({ type: "GET_DATA", payload: data });

    // axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
    //   dispatch({ type: "GET_DATA", payload: res.data });
    // });
  }, []);

  return (
    <ul className="list-group">
      {state.searchValue === ""
        ? state.data.map((item) => {
            return (
              <div key={item.id}>
                <Item item={item} />
              </div>
            );
          })
        : state.data.map((item) => {
            if (item.name.toLowerCase().includes(state.searchValue)) {
              return (
                <div key={item.id}>
                  <Item item={item} />
                </div>
              );
            } else return null;
          })}
    </ul>
  );
}

export default Items;
