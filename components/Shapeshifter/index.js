import { useEffect, useState } from "react";
import styles from "./Shapeshift.module.css";

const words = ["compelling", "inspiring", "unique", "engaging"];

export default function Shapeshifter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [nextWordIndex, setNextWordIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // increment nextWordIndex and wrap around if necessary
      setNextWordIndex((nextWordIndex + 1) % words.length);
      // wait for half of the flip animation duration before updating the current word index
      setTimeout(() => {
        setWordIndex((wordIndex + 1) % words.length);
      }, 250);
    }, 1500);
    // clear interval on unmount
    return () => clearInterval(intervalId);
  }, [wordIndex, nextWordIndex]);

  return (
    <div className={styles.shifter}>
      <h3 className={styles.shiftertxt}>
        Unlock the key to creating{" "}
        {/* apply the flip class to the word and change the content dynamically */}
        <span className={`${styles.word} ${styles.flip}`} key={nextWordIndex}>
          <span className={styles.back}>{words[wordIndex]}</span>
        </span>{" "}
        designs!
      </h3>
    </div>
  );
}
