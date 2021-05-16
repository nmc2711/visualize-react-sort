import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>알고리즘 비주얼라이즈 시각화 앱</title>
      </Head>

      <main className={styles.main}>
        <h1>알고리즘 비주얼라이즈 시각화 앱</h1>
      </main>
    </div>
  );
}
