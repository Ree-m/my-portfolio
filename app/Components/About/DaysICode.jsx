"use client"
import GitHubCalendar from "react-github-calendar"
const DaysICode = () => {
  return (
    <div>
        <h2>Days I code</h2>

        <GitHubCalendar
        username="Ree-m"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </div>
  )
}

export default DaysICode