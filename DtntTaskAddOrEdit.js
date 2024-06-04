import React, { useEffect, useState } from 'react'

export default function DtntTaskAddOrEdit({renderDtntTask, renderDtntIsAddOrEdit,dtntOnSubmit}) {
    // // Đối tượng task
    // const dtntTaksObj = {
    //     dtnt_taskId:0, 
    //     dtnt_taskName:"",
    //     dtnt_level:""
    // }
    const [dtntTask, setDtntTask] = useState(renderDtntTask);
    useEffect(()=>{
        setDtntTask(renderDtntTask)
    },[renderDtntTask])

    // tạo tiêu đề form
    const dtntTieuDe = renderDtntIsAddOrEdit==true?"Thêm mới task":"Sửa thông tin task";
    // Hàm xử lý sự kiện thay đổi trên điều khiển
    const dtntHandleChange = (dtntEvent)=>{
        let name = dtntEvent.target.name;
        let value = dtntEvent.target.value;

        setDtntTask(prev => {
            return{
                ...prev,
                [name]:value,
            }
        })
    }
    
    const dtntHandleSubmit = (dtntEvent)=>{
        dtntEvent.preventDefault();
        dtntOnSubmit(dtntTask);
    }
  return (
    <div>
        <h2>{dtntTieuDe}</h2>
        <form >
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Task ID</span>
                <input type="text" 
                    name='dtnt_taskId' value={dtntTask.dtnt_taskId} onChange={dtntHandleChange} 
                    className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Task ID</span>
                <input type="text" 
                    name='dtnt_taskName' value={dtntTask.dtnt_taskName} onChange={dtntHandleChange} 
                    className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon2" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">Task Level</span>
    
                <select name='dtnt_level' value={dtntTask.dtnt_level} onChange={dtntHandleChange}  className="form-control" 
                    aria-describedby="basic-addon"> 
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={dtntHandleSubmit} className='btn btn-primary'>Ghi lại</button>
        </form>
    </div>
  )
}
