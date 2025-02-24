import React from 'react'
import '../App.css'
const TeamMemberCard = ({name,title}) => {
  return (
    <div className="card">
        <h1>Name: {name}</h1>
        <p>Role: {title}</p>
    </div>
  )
}

export default TeamMemberCard