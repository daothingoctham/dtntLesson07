import React from 'react'

export default function DtntListTask({renderDtntListTasks, onDtntTaskEdit, onDtntTaskDelete}) {
    console.log(renderDtntListTasks);
    // Hàm xử lý khi sửa
    const dtntHandleEdit = (param)=>{
        console.log("Click edit:", param);
        onDtntTaskEdit(param) //Đẩy lên App thông qua props (onTvcTaskEdit)
    }
    // Hàm xử lý khi xóa
    const dtntHandleDelete = (param)=>{
        if(window.confirm('Bạn có chắc chắn xóa không')){
            onDtntTaskDelete(param) // Đẩy dữ liệu xóa lên trên App.js
        }
    }
    // render data
    let dtntElementTask = renderDtntListTasks.map((task, index)=>{
        return (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{task.dtnt_taskId}</td>
                <td>{task.dtnt_taskName}</td>
                <td>{task.dtnt_level}</td>
                <td>
                    <button className='btn btn-success'
                        onClick={()=>dtntHandleEdit(task)}
                        >Edit</button>    
                    <button className='btn btn-danger'
                    onClick={()=>dtntHandleDelete(task)} >
                        Remove</button>    
                </td>
            </tr>
        )
    })
  return (
    <div>
        <h2>Danh sách các nhiệm vụ</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Task Id</th>
                    <th>Task Name</th>
                    <th>Task Level</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {dtntElementTask}
            </tbody>
        </table>
    </div>
  )
}
