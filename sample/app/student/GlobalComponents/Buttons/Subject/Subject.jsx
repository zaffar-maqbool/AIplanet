"use client";
import React from 'react'
import style from './style/Subject.module.scss'

function Subject({name,width}) {
    const [click , setClick] = React.useState(false)
  return (
    <div  className={style.main} onClick={()=>setClick(prev=>!prev)} style={click?{color:"white",backgroundColor:"#D04E62",width:width}:{width:width}}>
        <span>
         {name}
        </span>
    </div>
  )
}

export default Subject