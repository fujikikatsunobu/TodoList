import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SumToday from "./SumToday";
import FormGroup from '@material-ui/core/FormGroup';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    '& > *': {//要素1つ1つみマージンをかけるために記述する。ボタンが一つの場合、つなげる場合は不要。
      marginRight:"10px",
    },
  },

  radiobutton: {
    marginTop: "10px",
    color:"black",
  },

  textbox: {
    '& > *': {
      marginBottom: "10px",
      width: '25ch',
    },
  }
});

const InputDate = (props) => {

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

  const resetToDoList = () => {
    setToDoContent("");
    setToDoLevel("");
  }

  const callAddToDoList = (e) => {
    e.preventDefault();
    props.add(toDoContent, toDoLevel, toDoLimit);
    resetToDoList();
  }

  return (
    <section className="inputDate">
      <div className="inputDate-task">
        タスク内容<span>※必須</span>
        <form className={classes.textbox} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            onChange={handleToDoContentChange}
            placeholder="タスクを入力してください"
            value={toDoContent}
            />
        </form>
      </div>
      <div className="inputDate-middle">
        <FormGroup>
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
        <div className="inputDate-date">
          期限
          <form action="" name="dateform" onChange={handleToDoLimitChange} value={toDoLimit} >
            <SumToday/>
          </form>
        </div>
      </div>
      <div className={classes.root}>
        <Button variant="contained" color="primary" onClick={callAddToDoList}>追加</Button>
        <Button variant="contained" color="secondary" onClick={resetToDoList}>リセット</Button>
      </div>
    </section>
  );
}

export default InputDate