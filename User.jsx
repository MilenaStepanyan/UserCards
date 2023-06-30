import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function User(){
    const [users,setUsers]=useState([])
    useEffect(()=>{
         fetch("https://jsonplaceholder.typicode.com/users")
        .then(rsp=>rsp.json())
        .then(rsp=>setUsers(rsp))
    },[])
   
    return(
      
        <div className='hi1'>
              <h1>UserCards💳</h1>
           <div className='hi'> {users.map(el=><p  className='smt' key={el.id}>{el.name} <span>email:{el.email}</span>
           <span>phone:{el.phone}</span><span>website:{el.website}</span></p> )}
           
           </div> 
   
        </div>
    )
}
export default User