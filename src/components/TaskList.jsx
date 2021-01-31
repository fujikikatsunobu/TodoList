import React, { useState } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import Modal from "./Modal";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    '& > *': {//要素1つ1つみマージンをかけるために記述する。ボタンが一つの場合、つなげる場合は不要。
      marginRight:"10px",
    },
  },
})

const TaskList = (props) => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  const [fix, setFix] = useState([]);

  const Checked = (e) => {
    // e.preventDefault();
    setChecked(e.target.checked);
    props.finish(checked);
  }
//内容を変更した配列から要素を取り出して、それぞれの項目を置き換えていく
  const fixToDoList = () => {
    const fixContent = props.list.splice(0, 0);
    setFix();
  }

  const toDoListItems = props.list.map((item, i) => {
    if (item.content === "") {
      return
    } else {
      return (
        <div className="excution" key={i}>
          <div id="js-listItems">
            <div>【タスク内容】：{item.content}</div>
            <form>【優先度】：{item.level}  【期限】：{item.limit} </form>
          </div>
          <div>
            <div className={classes.root}>
              完了
              <Checkbox
                checked={checked}
                onChange={Checked}
                inputProps={{"aria-label":"primary checkbox"}}
              />
              <Button
                onClick={() => setShow(true)}
                variant="contained"
                color="primary">編集
              </Button>
              <Button
                onClick={() => props.delete(i)}
                variant="contained"
                color="secondary">削除
              </Button>
            </div>
          </div>
          <Modal show={show} setShow={setShow} fix={fixToDoList}/>
        </div>
      );
    }}
  )

  return (
    <>
      {toDoListItems}
    </>

  )
}

export default TaskList;