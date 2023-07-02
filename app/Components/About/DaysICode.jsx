"use client"
import GitHubCalendar from "react-github-calendar"
import styles from "../../styles/daysICode.module.css"
const DaysICode = () => {
  const theme = {
    // light: ["#fff", "#422e58", "#79549d", "#b27be4", "#c084f5"],
    light:["#fff", "#c084f5", "#b27be4","#79549d","#422e58"]
  };
  return (
    <div className={styles.container}>
        <h2>Days I <b className={styles.purple}>code</b></h2>

        <GitHubCalendar
        username="Ree-m"
        blockSize={15} 
        blockMargin={5}
        colorScheme='light'

        theme={theme}
        fontSize={16}
      />
    </div>
  )
}

export default DaysICode