import React, { useEffect, useState } from 'react'
import Axios from 'axios';

const Seloption = () => {

    const [deg,setDeg] = useState([])
    const [sem,setSem] = useState([])
    const [batch,setBatch] = useState([])

    const Api_DEG = "http://localhost:3500/deg_prog";
    const Api_SEM = "http://localhost:3500/semester";
    const API_BAT = "http://localhost:3500/batch";

    const [data,setData] = useState([])
    const [semfil,setSemfil] = useState([])
    const [batchfil,setBatchfil] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch(Api_DEG)
            const data = await res.json()
            setDeg(data)
        }
        fetchData()

        Axios.get(Api_SEM).then(res => setSem(res.data))

        Axios.get(API_BAT).then(res => setBatch(res.data))
        
    },[])

    const  handlesubmit = (e)=>{
        const ddt = sem.filter( d=>  (
            d.deg_name === e 
        ))
        console.log(ddt)
        setData(ddt)
    }

    const handlesemester = (e) =>{
        // console.log(e)
        const Data = data.filter(d => (
            d.sem !== e
        ))
        // console.log(Data)
        setSemfil(Data)
    }

    const handlebatch = (e) =>{
        console.log(e)
        const Data = batch.filter(d => (
            d.sum_num === d.sum_id === e 
        ))
        console.log(Data)
        setBatchfil(Data)
    }

  return (
    <div>
        <select name='deg' onChange={e=> handlesubmit(e.target.value)} >
            {
                deg.map(d =>{
                    return(
                        <option key={d.id}>{d.deg_name}</option>
                    )
                })
            }
        </select>
        <br />
        <label>
            Pick a semester:
            <select name="semester" onChange={e => handlesemester(e.target.value)}>
                <option value="odd">odd</option>
                <option value="even">even</option>
            </select>
        </label>
        <br />
        <select name='sem' onChange={e => handlebatch(e.target.value)}>
            {
                semfil.map(d =>{
                    return(
                        <option key={d.sem_id}>{d.sem_num}</option>
                    )
                })
            }
        </select>
        <br />
        <select name='batch' >
            {
                batchfil.map(d =>{
                    return(
                        <option key={d.bat_id}>{d.name}</option>
                    )
                })
            }
        </select>
    </div>
  )
}

export default Seloption