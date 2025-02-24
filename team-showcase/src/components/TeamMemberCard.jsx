import React from 'react'
import '../App.css'
const TeamMemberCard = ({name,title}) => {
  return (
    <div className="card">
        <h1>{name}</h1>
        <p>{title}</p>
    </div>
  )
}

export default TeamMemberCard