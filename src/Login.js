import React, { useEffect, useState } from 'react'
import './Login.css'

const Login = () => {

    const [name,setName] = useState("")
    const [pass,setPass] = useState("")
    const [depts,setDept] = useState("")

    const API =  "http://localhost:3500/dept";

    useEffect(()=>{
        const fetchitems = async()=>{
            try{
                const response = await fetch(API);
                console.log(response);
                const deptlists = await response.json(); 
                console.log(deptlists)  
                setDept(deptlists)   
                console.log(depts)      
            }
            catch(err)
            {
                console.log(err.stack)
            }
        }
        (async()=> await fetchitems())()
    },[])

  return (
    <form className='login'>
        <div className="container">
            <input 
                type="text"
                required
                placeholder='Name'
                value={name}
                onChange={(e)=>setName(e.target.value)} 
            />
            <br />
            <input 
                type='password'
                required
                placeholder='Password'
                value={pass}
                onChange={(e)=>setPass(e.target.value)} 
            />
            <select>
                {
                    depts.map((dept)=>(
                        <option key={dept.id}>{dept.name}</option>
                    ))  
                }
            </select>
        </div>
        <div className="container">
            <button type='submit'> submit</button>
        </div>
        
    </form>
  )
}

export default Login