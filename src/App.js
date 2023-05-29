import { useContext } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Items from "./components/Items/Items";
import Search from "./components/Search/Search";
import { Context } from "./Context/Context";

function App() {
  const {state, dispatch} = useContext(Context);

  return (
    <div className="App container w-50">
      <Search />
      <Items />
      <Form />
    </div>
  );
}

export default App;
