import  { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CiEdit } from "react-icons/ci";
import { toast } from 'react-toastify';

const Todo = () => {
    const [allbooking,setAllbooking]=useState([]);
    fetch('http://localhost:5000/purchase',{
        method:'GET',
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        setAllbooking(data)
    });

    const handleStatus=id=>{
        const seletedStatus=document.getElementById(`status_${id}`).value
        
        fetch(`http://localhost:5000/updatestatus/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:seletedStatus})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                toast.success('Update Status Successfully')
            }
        })
    }

    return (
        
        <div className="overflow-x-auto">
            <Helmet>
                <title>Service-To-Do</title>
            </Helmet>
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th> 
              <th>Name</th> 
              <th>Email</th> 
              <th>ServiceID</th> 
              
              <th>Date</th> 
              <th>Status</th>
            </tr>
          </thead> 
          <tbody>
            {
                allbooking.map((b,index)=>(<tr key={b._id}>
                    <th>{index+1}</th> 
                    <td>{b.currentUserName}</td> 
                    <td>{b.currentUserEmail}</td> 
                    <td>{b._id}</td> 
                   
                    <td>{b.Date}</td> 
                    <td ><select name="status" id={`status_${b._id}`} className='px-2 py-1 border-2 rounded-md '>
                        <option value="pending">pending</option>
                        <option value="working">working</option>
                        <option value="completed">completed</option>
                        </select><button onClick={()=>handleStatus(b._id)} className='btn bg-slate-200 hover:bg-secondary'>save</button></td>
                        
                  </tr>))
            }
            
            
          </tbody> 
          
        </table>
      </div>
            
        
    );
};

export default Todo;