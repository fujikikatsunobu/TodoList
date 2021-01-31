import React,{ useState } from 'react';
import './App.css';
import InputDate from "./components/InputDate";
import InputInfo from "./components/InputInfo";
import TaskList from "./components/TaskList";

const App = () => {
  const [ToDoList, setToDoList] = useState([]);
  const [FinishToDoList, setFinishToDoList] = useState([]);

  //toDoListの配列にconcat関数でキーと要素を追加する処理
  const addToDoList = (Content, Level, Limit) => {
    if (Content === ""||Level==="") {
      return
    } else {
      setToDoList(ToDoList.concat({ "content": Content, "level": Level, "limit": Limit }));
    }
    }

  //list（toDoListの配列の中の1オブジェクト）とtoDoListの配列の番号が等しくない時に、配列に要素を追加する。→実際は、等しいはずなので、falseが帰ってfilterから外れて表示されなくなる。
  const deleteToDoList = (index) => {
    setToDoList(ToDoList.filter(list =>ToDoList[index] !== list));
  }

  const finishToDoList = (Finished) => {
    setFinishToDoList(FinishToDoList.concat({ "finished": Finished }));
  }


  return (
    <>
      <InputDate add={addToDoList}/>
      <InputInfo
        item={ToDoList}
        finished={FinishToDoList}
      />
      <TaskList
        list={ToDoList}
        delete={deleteToDoList}
        finish={finishToDoList}
        />
    </>
  )
}

export default App;