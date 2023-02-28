import Aa from "@/public/Home/aa.svg";
import Image from "next/image";
import Burr from "@/public/Home/burr.svg";
import pallete from "@/public/Home/Layer_1.svg";
import styles from "./Cards.module.css";

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
            <Image src={Aa} />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardtop}>
            <h3>Illustration</h3>
            <p>Learn about how Burr and his friends came to be!</p>
          </div>
          <div className={styles.cardbtm} style={{ marginTop: "-1em" }}>
            <p>LEARN MORE</p>
            <Image src={Burr} />
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
        >
          <div className={styles.cardtop}>
            <h3>Colour</h3>
            <p>
              Discover the meanings behind our hues and the ways they help us
              communicate our goals!
            </p>
          </div>
          <div className={styles.cardbtm}>
            <p>LEARN MORE</p>
            <Image src={pallete} style={{ marginTop: "-2em" }} />
          </div>
        </div>
      </div>
      ;
    </>
  );
}
