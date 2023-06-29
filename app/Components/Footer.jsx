import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <span>Developed by Reem, Designed by Soumyajit Behera</span>
      <span>Copyright © 2023 SB</span>
      <div>
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
    </div>
  );
};

export default Footer;
