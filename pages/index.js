import styles from "@/styles/Home.module.css";
import Introduction from "@/components/Introduction";
import Shapeshifter from "@/components/Shapeshifter";
import Cards from "@/components/Cards";
import Navbar from "@/components/Navbar";
import iceberg from "@/public/Home/iwrap.svg";

export default function Home() {
  //Assigning a color to the navbar/intro
  const color = "#7BD0FF";
  const iimg = iceberg;
  const ititle = "Welcome to Brrriliant!";
  const itxt =
    "Here at Brrriliant, we believe learning about the impact of our actions on the environment can be an adventure. Our app is vibrant, approachable, and intuitive, making it easy for anyone to join Burr the polar bear and our community of eco-conscious learners. Start exploring the challenges and opportunities of climate change today - it's easy and rewarding with Brrriliant!";

  return (
    <>
      <Navbar color={color} />
      <main className={styles.main}>
        <Introduction ititle={ititle} iimg={iimg} itxt={itxt} icolor={color} />
        <div className={styles.section}>
          <Shapeshifter />
          <Cards />
        </div>
      </main>
    </>
  );
}
