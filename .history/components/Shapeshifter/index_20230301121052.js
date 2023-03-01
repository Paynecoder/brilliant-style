import { useEffect, useState } from "react";
import styles from "./Shapeshift.module.css";

const words = ["compelling", "inspiring", "unique", "engaging"];

export default function Shapeshifter() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((wordIndex + 1) % words.length);
    }, 1500);
    return () => clearInterval(intervalId);
  }, [wordIndex]);

  return (
    <>
      <div className={styles.shifter}>
        <h3 className={styles.shiftertxt}>
          Unlock the key to creating{" "}
          <span className={styles.word}>{words[wordIndex]}</span> designs!
        </h3>
      </div>
    </>
  );
}
