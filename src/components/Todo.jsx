import { useContext } from 'react';
import  { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { toast } from 'react-toastify';
import { AuthContext } from '../authprovider/Authprovider';

const Todo = () => {
    const {user}=useContext(AuthContext);
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
        const status=document.getElementById(`status_${id}`).value
        
        fetch(`http://localhost:5000/updatestatus/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:status})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                toast.success('Update Status Successfully')
            }
        }) .catch(error => {
            console.error('Error updating status:', error);
            // Handle error if necessary
            toast.error('Failed to update status');
        });
    }

    const canAccessTable = allbooking.some(booking =>
        booking.providerEmail === user?.email 
    );

    return (
        
        <div>
            <Helmet>
                <title>Service-To-Do</title>
            </Helmet>
            
            {canAccessTable?(<div>
                <div className=" overflow-x-auto hidden md:block">
            
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
                            </select><button onClick={()=>handleStatus(b._id)} className='btn bg-slate-200 hover:bg-secondary ml-3'>save</button></td>
                            
                      </tr>))
                }
                
                
              </tbody> 
              
            </table>
          </div>
          {/* small device */}
          <div className='grid grid-cols-1 w-full gap-4 md:hidden'>
          {
                        allbooking.map((b,index)=>(<div key={b._id} className='bg-white p-4 rounded-lg shadow'>
            
                        <div className='flex items-center space-x-2 text-sm'>
                            
                            <div className='text-black'>{index+1}.</div>
                            <div className='text-black'>{b.currentUserName}</div>
                            <div className='p-1.5 text-xs text-black font-medium uppercase tracking-wider '><select name="status" id={`status_${b._id}`} className='px-2 py-1 bg-yellow-500  bg-opacity-50 border-2 rounded-md '>
                            <option value="pending">pending</option>
                            <option value="working">working</option>
                            <option value="completed">completed</option>
                            </select><button onClick={()=>handleStatus(b._id)} className=' bg-slate-200 hover:bg-secondary ml-2 p-2 rounded-lg'>save</button></div>
                        </div>
                        <div className='text-black'>{b._id}</div>
                        <div className='text-black'>{b.currentUserEmail}</div>
                        
                    </div>))
                    }
            
    
          </div>

            </div> ):(<div className='text-2xl font-lato font-bold text-center mt-4 md:mt-24'>Access Denied</div>)}
            
             

        </div>
        
       
            
        
    );
};

export default Todo;