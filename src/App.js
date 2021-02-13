import { useEffect } from "react";
import { connect } from "react-redux";
import { addItem } from "./actions/todoActions";
import './App.css';

function App({ items, addItem }) {

  useEffect(() => {
    addItem("My List");
    addItem("My List 2");
    addItem("My List 3");
    addItem("My List 4");
  }, [addItem])

  return (
    <div className="App">
      {JSON.stringify(items)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = { addItem }

export default connect(mapStateToProps, mapDispatchToProps)(App);
