import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: "10px",
    marginRight: "10px",
    width: 140,
  },
});

const SumToday = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} noValidate>
      <TextField
        id="date"
        type="date"
        className={classes.textField}
        InputLabelProps={{
        shrink: true,
        }}
      />
    </div>
  );
};

export default SumToday;

// const SumToday = ()=>{
  // const todayDate = new Date();
  // const year = todayDate.getFullYear();
  // const month = todayDate.getMonth()+1;
  // const date = todayDate.getDate();
  
  // let toTwoDigits = function (num,digit) {
  //   num += "";
  //   if (num.length < digit) {
  //     num = "0" + num;
  //   }
  //   return num;
  // }

  // let yyyy = toTwoDigits(year, 4);
  // let mm = toTwoDigits(month, 2);
  // let dd = toTwoDigits(date, 2);
  // let sumToday = yyyy + "-" + mm + "-" + dd;
  
  //  defaultValue = { sumToday }
//   return (
//     <div>
//       <input id = "today" className = "inputDate-date-today" type = "date" name = "today" />
//     </div>
//   );
// }

// export default SumToday;