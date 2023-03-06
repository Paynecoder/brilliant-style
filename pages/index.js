import styles from "@/styles/Home.module.css";
import Introduction from "@/components/Introduction";
import Shapeshifter from "@/components/Shapeshifter";
import Cards from "@/components/Cards";
import Navbar from "@/components/Navbar";

export default function Home() {
  //Assigning a color to the navbar
  const color = "#7BD0FF";

  return (
    <>
      <Navbar color={color} />
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
