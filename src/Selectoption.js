import React, { useEffect, useState } from 'react'
import './Selop.css'
import { Box,TextField,MenuItem, InputLabel, FormControl, Select } from '@mui/material'

const Selectoption = () => {

  const [courses,setCourses] = useState([
    // {
    //   id: id,
    // deg_name: deg_name

    // }
  ])

  const courseVals = courses.map((c)=>c.deg_name)
  console.log('jjj')
  console.log(courseVals)

  const [val,setVal] = useState('')

  const API_a =  "http://localhost:3500/deg_prog";

  useEffect(()=>{
      fetch(API_a).then((response)=>response.json()).then((val)=>setCourses(val))
  },[])

  // console.log(courses)

  const [batchs,setBatchs] = useState([])
  const API = "http://localhost:3500/batch";
  console.log("timetable")

  useEffect(()=>{
        const fetchitems = async()=>{
              try{
                  const res = await fetch(API)
                  // console.log(res)
                  const data = await res.json()
                  // console.log(data)
                  setBatchs(data)
                  // console.log(batchs)
              }
              catch(err)
              {
                console.log(err.stack)
              }
        }
        (async()=> await fetchitems())()
  },[])

  return (
    <div>
        {/* <label htmlFor="Degree">Degree programme</label> */}
        
        {/* <select id="Degree">
            <option value="">Degree programme</option>
            <option value="cs">cs</option>
            <option value="IT">IT</option>
        </select> */}
        <br />

        

        <Box width='250px' >

        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Degree programme</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={val}
    label="Degree programme"
    onChange={e => setVal(e.target.value)}
  >
    {console.log("llls")}
    {courseVals.map(c=>console.log(c))}

    {courseVals.map(course => { 
    <MenuItem key={course} value={course}>{course}</MenuItem>
    })}

    {/* <MenuItem value={10}>Information Technology</MenuItem>
    <MenuItem value={20}>Computer Science</MenuItem>
    <MenuItem value={30}>Mechanical</MenuItem> */}
  </Select>
</FormControl>

          {/* <TextField 
            label='Degree programme'
            select
            value={courses}
            onChange={e => setCourses(e.target.value)}
            fullWidth
           > 
              {
                courses.map((course)=><MenuItem key={course.deg_name}>{course.deg_name}</MenuItem>)
              }
              <MenuItem value='IT'>Information Technology</MenuItem>
              <MenuItem value='CS'>Computer Science</MenuItem>
              <MenuItem value='ME'>Mechanical</MenuItem>
          </TextField>  */}
        </Box>

        {/* <select id="sem">
            <option value="">Semester</option>
            <option value="cs">1</option>
            <option value="IT">2</option>
        </select> */}
        <select id="Batch">
            <option>Batch</option>
              {
                batchs.map((batch)=>
                  <option key={batch.bat_id}>{batch.name}</option>
                )
              }
        </select>
        <button type='submit'>submit</button>
    </div>
    
  )
}

export default Selectoption

