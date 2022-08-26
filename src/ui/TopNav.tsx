import React from "react"

const TopNav: React.FC = () => {
  return (
    <div className="nav">
      <span className="logo">Tronic64</span>
      <div className="links">
        <span>Random Project</span>
        <span>Home</span>
        <span>
          <button type="button">View Projects</button>
        </span>
      </div>
    </div>
  )
}

export default TopNav