import React, { useContext } from "react";
import { Context } from "../../Context/Context";

function Form() {
  const { state, dispatch } = useContext(Context);

  return (
    <div>
      <div className="row justify-content-between align-items-center mt-3">
        <div className="col-10">
          <input
            value={state.addItemValue}
            type="text"
            className="form-control "
            id="exampleFormControlInput1"
            placeholder="Add User ..."
            onChange={(e) =>
              dispatch({ type: "ADD_ITEM_ON_CHANGE", payload: e.target.value })
            }
          />
        </div>
        {state.addButtonActive ? (
          <button
            onClick={() => {
              dispatch({ type: "ADD_ITEM", payload: state.addItemValue });
            }}
            type="button"
            className="col-2 btn btn-outline-primary"
          >
            Add
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch({ type: "EDIT_ITEM_FORM", payload: state.editItemId });
            }}
            type="button"
            className="col-2 btn btn-outline-warning"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default Form;
