import React, { useContext } from "react";
import { Context } from "../../Context/Context";

function Item({ item }) {
  const { dispatch } = useContext(Context);

  return (
    <li className="list-group-item">
      <div className="row justify-content-between align-items-center">
        <p className="col-9 fs-4">{item.name}</p>
        <button
          onClick={() => dispatch({ type: "EDIT_ITEM", payload: {id: item.id, name: item.name} })}
          type="button"
          className="col-1 btn btn-outline-warning "
          style={{transform: "translateX(20px)"}}
        >
          Edit
        </button>
        <button
          onClick={() => {
            dispatch({ type: "ON_DELETE", payload: { id: item.id } });
          }}
          type="button"
          className="col-1 btn btn-outline-danger"
        >
          Del
        </button>
      </div>
    </li>
  );
}

export default Item;
