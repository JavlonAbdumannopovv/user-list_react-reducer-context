import React, { useContext } from "react";
import { Context } from "../../Context/Context";

function Search() {
  const { state, dispatch } = useContext(Context);
  return (
    <div className="mb-3 mt-3 w-100">
      <input
        value={state.searchValue}
        type="search"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Search user ..."
        onChange={(e) =>
          dispatch({
            type: "SEARCH_ON_CHANGE",
            payload:  e.target.value ,
          })
        }
      />
    </div>
  );
}

export default Search;
