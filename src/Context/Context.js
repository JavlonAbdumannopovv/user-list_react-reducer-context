import { createContext, useReducer } from "react";

const initialValue = {
  data: [],
  term: "",
  filter: "all",
  searchValue: "",
  addItemValue: "",
  addButtonActive: true,
  editItemId: null,
};

export const Context = createContext();

const reducer = (state = initialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATA":
      return { ...state, data: payload };
    case "SEARCH_ON_CHANGE":
      return { ...state, searchValue: payload };
    case "ADD_ITEM":
      const newData = [...state.data, { id: new Date(), name: payload }];
      return { ...state, data: newData, addItemValue: "" };
    case "ON_DELETE":
      const deleteArr = state.data.filter((c) => c.id !== payload.id);
      return { ...state, data: deleteArr };
    case "EDIT_ITEM":
      return {
        ...state,
        addItemValue: payload.name,
        addButtonActive: false,
        editItemId: payload.id,
      };
    case "ADD_ITEM_ON_CHANGE":
      return {
        ...state,
        addItemValue: payload,
      };
    case "EDIT_ITEM_FORM":
      const editData = state.data.map((item) => {
        if (item.id === payload) {
          return { ...item, name: state.addItemValue };
        } else {
          return item;
        }
      });
      return {
        ...state,
        data: editData,
        addButtonActive: true,
        addItemValue: "",
      };

    default:
      return { state };
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
