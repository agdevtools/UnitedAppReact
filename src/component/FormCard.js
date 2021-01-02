import React from 'react'
import { Link } from 'react-router-dom'
export default function FormCard({ text, color }) {

  return (

      <div style={{background : color, boxShadow:"2px 5px 3px 0px rgba(0, 0, 0, 0.5)"}}>
        {text}
      </div>

  )
}