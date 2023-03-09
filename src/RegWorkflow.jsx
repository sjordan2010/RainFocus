import React from 'react'
import Arrow from "./assets/Arrow.png";

export default function RegWorkflow({ title, description }) {
  return (
    <div className="workflow border">
        <header><img src={Arrow}/>{title}</header>
        <p>{description}</p>
    </div>
  )
}

