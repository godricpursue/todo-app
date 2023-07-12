import { useEffect, useState } from "react";
import "./App.css";
import Heading from "./Components/Heading";
import List from "./Components/List";
import Footer from "./Components/Footer";

function App() {
  // Defining state variables
  const [localCheck, setLocalCheck] = useState(0);
  const [allButton, setAllButton] = useState(true);
  const [activeButton, setActiveButton] = useState(false);
  const [completedButton, setCompletedButton] = useState(false);
  const [toggleAll, setToggleAll] = useState(false);
  const [activeList, setActiveList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [list, setList] = useState([
    { id: "aa", item: "Learn Javascript", done: false },
    { id: "bb", item: "Learn React", done: false },
    { id: "cc", item: "Have a life!", done: false },
  ]);

  // Function to update an item in the to-do list
  function updateItem(updatedItem) {
    setList(
      list.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    localStorage.setItem("localList", JSON.stringify([...list]));
  }

  useEffect(() => {
    if (localStorage.getItem("localList")) {
      const storedList = JSON.parse(localStorage.getItem("localList"));
      setList(storedList);
      setLocalCheck(1);
    }
  }, []);
  useEffect(() => {
    if (localStorage.getItem("localList") && localCheck === 1) {
      localStorage.setItem("localList", JSON.stringify(list));
    }
  }, [list, localCheck]);

  // useEffect hook to update activeList and completedList state variables
  useEffect(() => {
    let activeItems = list.filter((item) => item.done === false);
    setActiveList(activeItems);
    let completedItems = list.filter((item) => item.done === true);
    setCompletedList(completedItems);
  }, [list, toggleAll]);

  /*   useEffect(() => {
    
  }, [list]); */

  return (
    <div className="App">
      <section className="todoapp">
        <Heading setList={setList} list={list} />
        <List
          updateItem={updateItem}
          setList={setList}
          list={list}
          setToggleAll={setToggleAll}
          toggleAll={toggleAll}
          allButton={allButton}
          activeButton={activeButton}
          completedButton={completedButton}
          activeList={activeList}
          completedList={completedList}
        />
        <Footer
          setList={setList}
          list={list}
          toggleAll={toggleAll}
          setAllButton={setAllButton}
          allButton={allButton}
          setActiveButton={setActiveButton}
          activeButton={activeButton}
          setCompletedButton={setCompletedButton}
          completedButton={completedButton}
        />
      </section>
    </div>
  );
}

export default App;
