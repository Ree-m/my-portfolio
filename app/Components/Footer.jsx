import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import Link from "next/link";
import styles from "app/styles/footer.module.css"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Developed by Reem, Designed by Soumyajit Behera</span>
      <span>Copyright © 2023 SB</span>
      <div className={styles.footerIcons}>
        <Link href={`/`}>
          <i> 
            <AiFillGithub />
          </i>
        </Link>

        <Link href={`/`}>
          <i>
            <GrLinkedinOption />
          </i>
        </Link>

        <Link href={`/`}>
          <i>
            <AiOutlineTwitter />
          </i>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
