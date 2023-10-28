import React, { useMemo } from 'react'
// import './TImetab.css'

import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

import 'ag-grid-enterprise'


const Timetable = () => {

  const rowData = [
    {Days: 'Monday', '8:30-9:20': 'SE', '9:30-10-20': "SE",'10:30-11:20':"SELAB",'11:30-12:10':"SELAB",'1:10-2:00':"DWM",'2:00-2:50':"OSS",'3:00-3:50':"NILL",'3:50-4:30':"NILL"},
    {Days: 'Tuesday', '8:30-9:20': 'DWMLAB', '9:30-10-20': "DWMLAB",'10:30-11:20':"SELAB",'11:30-12:10':"SELAB",'1:10-2:00':"DAA",'2:00-2:50':"DAA",'3:00-3:50':"SPM",'3:50-4:30':"NILL"},
    {Days: 'Wednesday', '8:30-9:20': 'NILL', '9:30-10-20': "NILL",'10:30-11:20':"DWM",'11:30-12:10':"DWM",'1:10-2:00':"ADBMS",'2:00-2:50':"ADBMS",'3:00-3:50':"NILL",'3:50-4:30':"NILL"},
    {Days: 'Thursday', '8:30-9:20': 'NILL', '9:30-10-20': "SPM",'10:30-11:20':"ADBMS",'11:30-12:10':"ADBMS",'1:10-2:00':"OSS",'2:00-2:50':"SPM",'3:00-3:50':"SPM",'3:50-4:30':"NILL"},
    {Days: 'Friday', '8:30-9:20': 'NILL', '9:30-10-20': "SE",'10:30-11:20':"DAA",'11:30-12:10':"DAA",'1:10-2:00':"OSS",'2:00-2:50':"NILL",'3:00-3:50':"NILL",'3:50-4:30':"NILL"}
  ];

  const columnDefs = [
    {field: 'Days',maxWidth:100},
    {field: '8:30-9:20'},
    {field: '9:30-10-20'},
    {field: '10:30-11:20'},
    {field: '11:30-12:10'},
    {field: '1:10-2:00'},
    {field: '2:00-2:50'},
    {field: '3:00-3:50'},
    {field: '3:50-4:30'},

  ];

  const defaultColDef = useMemo(()=>({
    maxWidth:150,
    sortable:true,
    filter:true
  }));

  return (
    <div className="ag-theme-alpine" style={{width: 1350, height: 300}}>
        <AgGridReact 
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
    </div>
  )
}

export default Timetable