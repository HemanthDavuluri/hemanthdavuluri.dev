/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FacebookLogo from "../assets/icons8-facebook.svg";
import TwitterLogo from "../assets/icons8-twitter.svg";
import InstagramLogo from "../assets/icons8-instagram.svg";
import Hamburger from "../assets/icons8-menu-rounded-100.png";

const routeToSocials = (element) => {
  if (element == "facebook") {
    window
      .open("https://www.facebook.com/davulurihemanthchowdary/", "_blank")
      .focus();
  } else if (element === "instagram") {
    window
      .open("https://www.instagram.com/davuluri_hemanth/", "_blank")
      .focus();
  } else if (element === "twitter") {
    window.open("https://twitter.com/Hemanthdav", "_blank").focus();
  }
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hemanth Davuluri</title>
        <meta name="Hemanth Davuluri" content="Hemanth Davuluri Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <h1>DH.</h1>
        <div className={styles.hamburger}>
          <Image src={Hamburger} width={25} height={25} alt="hamburger" />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.ninety}>
          <h3>I'm Hemanth Davuluri.</h3>
          <h1>A Full-Stack</h1>
          <h1>Application Developer.</h1>
        </div>
        <div className={styles.ten}>
          <Image
            className={styles.logos}
            src={FacebookLogo}
            width={25}
            height={25}
            alt="facebook-logo"
            onClick={() => routeToSocials("facebook")}
          />
          <Image
            className={styles.logos}
            src={InstagramLogo}
            width={25}
            height={25}
            alt="instagram-logo"
            onClick={() => routeToSocials("instagram")}
          />
          <Image
            className={styles.logos}
            src={TwitterLogo}
            width={25}
            height={25}
            alt="twitter-logo"
            onClick={() => routeToSocials("twitter")}
          />
        </div>
      </div>
    </div>
  );
}
