import Head from "next/head";

import styles from "../styles/Home.module.css";
import InsertSort from "./components/InsertSort";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>알고리즘 비주얼라이즈 시각화 앱</title>
      </Head>

      <main className={styles.main}>
        <h1>알고리즘 비주얼라이즈 시각화 앱</h1>
        <InsertSort />
      </main>
    </div>
  );
}
