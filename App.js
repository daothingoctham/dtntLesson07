import "./App.css";
import { React, useState } from "react";
import DtntListTask from "./components/DtntListTask";
import DtntTaskAddOrEdit from "./components/DtntTaskAddOrEdit";
function App() {
  // Mock data
  const dtnt_listTasks = [
    {
      dtnt_taskId: 2201234,
      dtnt_taskName: "Đào Thị Ngọc Thắm",
      dtnt_level: "Small",
    },
    {
      dtnt_taskId: 1,
      dtnt_taskName: "Học lập trình frontend",
      dtnt_level: "Small",
    },
    {
      dtnt_taskId: 2,
      dtnt_taskName: "Học lập trình reactjs",
      dtnt_level: "Medium",
    },
    {
      dtnt_taskId: 3,
      dtnt_taskName: "Lập trình với Frontend - Reactjs",
      dtnt_level: "High",
    },
    {
      dtnt_taskId: 4,
      dtnt_taskName: "Lập trình Fullstack (PHP, Java, NetCore)",
      dtnt_level: "Small",
    },
  ];
  // sử dụng hàm useState để lưu trữ trạng thái dữ liệu
  const [dtntListTasks, setDtntListTasks] = useState(dtnt_listTasks);

  // tạo state dữ liệu cho form (add, edit)
  // Đối tượng task
  const dtntTaksObj = {
    dtnt_taskId: 0,
    dtnt_taskName: "NTU",
    dtnt_level: "Medium",
  };
  // Tạo state
  const [dtntTask, setDtntTask] = useState(dtntTaksObj); // dữ liệu trên form
  // state đê phân biệt trạng thái là thêm mới hay sửa
  const [dtntIsAddOrEdit, setDtntIsAddOrEdit ] = useState(true); // mặc định ban đầu là form thêm mới

  // Nhận dữ liệu khi sửa
  const dtntHandleEdit = (param) => {
    console.log("App - Edit:", param);
    // Cập nhật lại tvcTask
    setDtntTask(param);
    // Cập nhật trạng thái form là sửa
    setDtntIsAddOrEdit(false);
  };

  const dtntHandleSubmit = (dtntParam) => {
    console.log("App:", dtntParam);
    if(dtntIsAddOrEdit===true){ // trường hợp thêm mới dữ liệu
      setDtntListTasks((prev) => {
        return [...prev, dtntParam];
      });
    }else{ // Trường hợp sử dữ liệu
      for (let i = 0; i < dtntListTasks.length; i++) {
          if(dtntListTasks[i].dtnt_taskId == dtntParam.dtnt_taskId){
            dtntListTasks[i] = dtntParam;
            break;
          }
      }
      // Cập nhật lại state (tvcListTasks)
      setDtntListTasks((prev) => {
        return [...prev];
      });
    }
  };

  // Hàm xóa
  const dtntHandleDelete = (param)=>{
    let dtntResult = dtntListTasks.filter(x=>x.dtnt_taskId != param.dtnt_taskId);
    setDtntListTasks(dtntResult);
  }
  return (
    <div className="container border">
      <h1>Đào Thị Ngọc Thắm - K22CNT2</h1>
      <hr />
      <div>
        {/* Danh sách list task  */}
        <DtntListTask
          renderDtntListTasks={dtntListTasks}
          onDtntTaskEdit={dtntHandleEdit}
          onDtntTaskDelete = {dtntHandleDelete}
        />
      </div>
      <div>
        <DtntTaskAddOrEdit 
            renderDtntTask = {dtntTask}
            renderDtntIsAddOrEdit = {dtntIsAddOrEdit}

            dtntOnSubmit={dtntHandleSubmit} />
      </div>
    </div>
  );
}

export default App;