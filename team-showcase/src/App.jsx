
import React from 'react'
import TeamMemberCard from './components/TeamMemberCard'

const App = () => {
  const teams = [
    {name: "Mohan", title: "Senior Engineer"},
    {name: "Thar", title: "Manager"},
  ]
  return (
    <div className="main">
      {teams && teams.map((team,i) => (
        <TeamMemberCard key={i} name={team.name} title={team.title}/>
      ))}
    </div>
  )
}

export default App