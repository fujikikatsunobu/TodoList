import React,{useState} from "react";
// import "./Form.css";

const Form = (props) => {
  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoContent, setToDoContent] = useState("");

  //タイトルに文字が入力されると実行される。入力された値を取得している。
  const handleToDoTitleInputChange = (e) => {
    setToDoTitle(e.target.value);
  }
  //Detailに文字が入力されると実行される。入力された値を取得している。
  const handleToDoContentInputChange = (e) => {
    setToDoContent(e.target.value);
    // console.log(toDoContent);
  }
  //ADDをクリックしたときに、入力した内容が消去される
  const resetInputField = () => {
    setToDoTitle("");
    setToDoContent("");
  }
  //タイトルとコンテンツに記載した内容をApp.jsのaddToDoList関数で使用している。使用方法は、空の配列に2つの要素をオブジェクト型として追加している。リセット処理を実行
  const callAddToDoList = (e) => {
    e.preventDefault();
    props.add(toDoTitle, toDoContent);
    resetInputField();
  }

  return (
    <form>
      <div>
        <div>
          <span>Title</span>
        </div>
        <input
          type="text"
          onChange={handleToDoTitleInputChange}
          value={toDoTitle}
        />
      </div>
      <div>
        <div>
          <span>Detail</span>
        </div>
        <textarea
          aria-label="Detail"
          onChange={handleToDoContentInputChange}
          value={toDoContent}
        ></textarea>
      </div>
      <div>
        <button type="submit" onClick={callAddToDoList}>
          ADD
        </button>
      </div>
    </form>
  );
}

export default Form;