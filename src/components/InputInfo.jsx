import React from "react";

const InputInfo = (props)=>{
  return (
    <section className="inputInfo">
        <table className="inputInfo-table">
          <thead>
            <tr>
              <td>現在のタスク数</td>
              <td id="taskItem">{props.item.length}個</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>残りのタスク数</td>
              <td>{props.item.length-props.finished.length}個</td>
            </tr>
            <tr>
              <td>完了のタスク数</td>
              <td>{props.finished.length}個</td>
            </tr>
            <tr>
              <td>タスクの完了率</td>
              <td>{props.finished.length/props.item.length*100}%</td>
            </tr>
          </tbody>
        </table>
      </section>
  );
}

export default InputInfo;