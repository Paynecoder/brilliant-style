import { useEffect, useState } from "react";
import styles from "./Shapeshift.module.css";

const words = ["compelling", "inspiring", "unique", "engaging"];
const words2 = ["key", "secret", "solution"];

export default function Shapeshifter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [wordIndex2, setWordIndex2] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((wordIndex + 1) % words.length);
    }, 1500);
    return () => clearInterval(intervalId);
  }, [wordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex2((wordIndex2 + 1) % words2.length);
    }, 1500);
    return () => clearInterval(intervalId);
  }, [wordIndex2]);

  return (
    <>
      <div className={styles.shifter}>
        <h3 className={styles.shiftertxt}>
          Unlock the <span className={styles.word}>{words2[wordIndex2]}</span>{" "}
          to creating <span className={styles.word}>{words[wordIndex]}</span>{" "}
          designs!
        </h3>
      </div>
    </>
  );
}
