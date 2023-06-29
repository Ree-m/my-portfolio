import Link from "next/link";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import styles from "../styles/header.module.css"
const Header = () => {
  return (
    <div>
      <div className={styles.logo}>
        <h1>Rb.</h1>
      </div>
      <div>
        <Link href={`/`}>
          <AiOutlineHome />
          Home
        </Link>

        <Link href={`/`}>
          <BsPerson />
          About
        </Link>

        <Link href={`/`}>
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
