import Link from "next/link";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import styles from "../styles/header.module.css"
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href={`/`}><h1>Rb.</h1></Link>
      </div>
      <div className={styles.navLinks}>
        <Link href={`/`}>
          <AiOutlineHome />
          Home
        </Link>

        <Link href={`/about`}>
          <BsPerson />
          About
        </Link>

        <Link href={`/projects`}>
          <AiOutlineFundProjectionScreen />
          Projects
        </Link>

        <Link href={`/`}>
          <CgFileDocument />
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Header;
