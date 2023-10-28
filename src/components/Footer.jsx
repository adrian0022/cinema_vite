import FacebookIcon from "../assets/icons/social_icons/FacebookIcon";
import InstagramIcon from "../assets/icons/social_icons/InstagramIcon";
import TikTokIcon from "../assets/icons/social_icons/TiktokIcon";
import TwitterIcon from "../assets/icons/social_icons/TwitterIcon";
import YoutobeIcon from "../assets/icons/social_icons/YoutobeIcon";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.tiktok.com/"
        >
          {" "}
          <TikTokIcon />{" "}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.Instagram.com/"
        >
          {" "}
          <InstagramIcon />{" "}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.Twitter.com/"
        >
          {" "}
          <TwitterIcon />{" "}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.Youtobe.com/"
        >
          {" "}
          <YoutobeIcon />{" "}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.Facebook.com/"
        >
          {" "}
          <FacebookIcon />{" "}
        </a>
      </div>
      <div className="copyright">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.imdb.com/"
        >
          {" "}
          © 1990-2023 Use API from IMDb.com, Inc.{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
