import Image from "next/image";
import pallete from "@/public/Home/Layer_1.svg";
import styles from "./Cards.module.css";
import typo from "@/public/Home/Aa.svg";
import burr from "@/public/Home/Burr.svg";

export default function Cards() {
  return (
    <>
      <div className={styles.cardwrap}>
        <div className={styles.card}>
          <div className={styles.cardtop}>
            <h3>Typography</h3>
            <p>Discover the fonts that make Brrriliant's message stand out!</p>
          </div>
          <div className={styles.cardbtm} style={{ marginTop: "1em" }}>
            <p>LEARN MORE</p>
            <Image src={typo} />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardtop}>
            <h3>Illustration</h3>
            <p>Learn about how Burr and his friends came to be!</p>
          </div>
          <div className={styles.cardbtm} style={{ marginTop: "-1em" }}>
            <p>LEARN MORE</p>
            <Image src={burr} />
          </div>
        </div>
        <div
          style={{
            width: "379px",
            height: "257px",
            borderRadius: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "2em",
            padding: "1em",
            backgroundColor: "#39E454",
            overflow: "hidden",
          }}
          className={styles.cardspc}
        >
          <div className={styles.cardtop}>
            <h3>Colour</h3>
            <p>
              Absorb the meanings behind our hues and how they help us
              communicate our goals!
            </p>
          </div>
          <div className={styles.cardbtm}>
            <p>LEARN MORE</p>
            <Image src={pallete} style={{ marginTop: "-2em" }} />
          </div>
        </div>
      </div>
    </>
  );
}
