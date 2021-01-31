import React,{useState} from "react";
import "./Modal.css";
import SumToday from "./SumToday";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core";
import FormGroup from '@material-ui/core/FormGroup';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  modalP: {
    fontSize: "24px",
    color: "red",
    marginBottom:"10px",

  },
  root: {
    '& > *': {//要素1つ1つみマージンをかけるために記述する。ボタンが一つの場合、つなげる場合は不要。
      marginTop:"10px",
    },
  },
  modalText: {
    marginTop: "10px",
  },
  textbox: {
    '& > *': {
      marginBottom: "10px",
      width: '25ch',
    },
  },
})

const Modal = (props) => {
  const classes = useStyles();

  const [toDoContent, setToDoContent] = useState("");
  const [toDoLevel, setToDoLevel] = useState("");
  const [toDoLimit, setToDoLimit] = useState("");

  const handleToDoContentChange = (e) => {
      setToDoContent(e.target.value);
  }

  const handleToDoLevelChange = (e) => {
    setToDoLevel(e.target.value);
  }

  const handleToDoLimitChange = (e) => {
    setToDoLimit(e.target.value);
  }

  const callAddToDoList = (e) => {
    e.preventDefault();
    props.fix(toDoContent, toDoLevel, toDoLimit);
  }

  const closeModal = () => {
    props.setShow(false);
  }

  if (props.show) {
    return (
      <>
        <div id="overlay" onClick={closeModal}>
          <div id="modalContent" onClick={(e)=>e.stopPropagation()}>
            <div className="inputDate-task">
              <p className={classes.modalP}>編集</p>
              タスク内容<span>※必須</span>
              <form className={classes.textbox} noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  onChange={handleToDoContentChange}
                  placeholder="タスクを入力してください"/>
              </form>
              <div>
                <FormGroup className={classes.modalText}>
                <FormControl component="fieldset">
                  <Box className={classes.radiobutton} >
                    <FormLabel component="legend" className="inputDate-task">優先度<span>※必須</span></FormLabel>
                    <RadioGroup aria-label="level" name="levels" value={toDoLevel} onChange={handleToDoLevelChange} row  >
                      <FormControlLabel value="高" control={<Radio/>} label="高"/>
                      <FormControlLabel value="中" control={<Radio/>} label="中"/>
                      <FormControlLabel value="小" control={<Radio/>} label="小"/>
                    </RadioGroup>
                  </Box>
                </FormControl>
              </FormGroup>
              </div>
              <div>
                期限
                <form name="dateform" onChange={handleToDoLimitChange} value={toDoLimit}>
                  <SumToday/>
                </form>
              </div>
            </div>
            <div className={classes.root}>
              <Button
                onClick={closeModal,callAddToDoList}
                variant="contained"
                color="primary">完了
              </Button>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return null;
  }
}

export default Modal;