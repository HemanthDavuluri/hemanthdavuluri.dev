/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FacebookLogo from "../assets/icons8-facebook.svg";
import TwitterLogo from "../assets/icons8-twitter.svg";
import InstagramLogo from "../assets/icons8-instagram.svg";

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
          />
          <Image
            className={styles.logos}
            src={InstagramLogo}
            width={25}
            height={25}
            alt="instagram-logo"
          />
          <Image
            className={styles.logos}
            src={TwitterLogo}
            width={25}
            height={25}
            alt="twitter-logo"
          />
        </div>
      </div>
    </div>
  );
}
