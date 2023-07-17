"use client";
import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useState } from "react";

import styles from "../styles/header.module.css";
const Header = () => {
  const router =useRouter()
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={styles.header}>


      <div className={styles.logo}>
        <Link href={`/`}>
          <h1>Rb.</h1>
        </Link>
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
{/* 
        <Link href={`/`}>
          <CgFileDocument />
          Resume
        </Link> */}
      </div>

      <div className={styles.menu}>

        <div className={styles.menuButton}>
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu?<AiOutlineClose />:<GiHamburgerMenu />}
          </button>
        </div>

        
      {toggleMenu ? (
        <div className={styles.menuItems}>
         <div onClick={()=>router.push(`/`)}>
          <AiOutlineHome />
          Home
        </div>

        <div onClick={()=>router.push(`/about`)}>
          <BsPerson />
          About
        </div>

        <div onClick={()=>router.push(`/projects`)}>
          <AiOutlineFundProjectionScreen />
          Projects
        </div>
{/* 
        <Link href={`/`}>
          <CgFileDocument />
          Resume
        </Link> */}
        </div>
      ) : (
        ""
      )}
        
      </div>

    </div>
  );
};

export default Header;
