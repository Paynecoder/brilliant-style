import styles from "@/styles/Home.module.css";
import Introduction from "@/components/Introduction";
import Shapeshifter from "@/components/Shapeshifter";
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Introduction />
        <div className={styles.section}>
          <Shapeshifter />
          <Cards />
        </div>
      </main>
    </>
  );
}
