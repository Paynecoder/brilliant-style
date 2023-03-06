import { useEffect, useState } from "react";
import styles from "./Shapeshift.module.css";

// Define an array of words to cycle through
const words = ["compelling", "inspiring", "unique", "engaging"];

export default function Shapeshifter() {
  // Declare state for the current word index and the next word index
  const [wordIndex, setWordIndex] = useState(0);
  const [nextWordIndex, setNextWordIndex] = useState(1);

  // Use an effect to cycle through the words and trigger the animation
  useEffect(() => {
    // Set up an interval to change the word every 1.5 seconds
    const intervalId = setInterval(() => {
      // Update the next word index and wrap around to the beginning of the array if necessary
      setNextWordIndex((nextWordIndex + 1) % words.length);
      // Wait for half of the flip animation duration before updating the current word index
      setTimeout(() => {
        // Update the current word index and wrap around to the beginning of the array if necessary
        setWordIndex((wordIndex + 1) % words.length);
      }, 250);
    }, 1500);
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [wordIndex, nextWordIndex]);

  return (
    <div className={styles.shifter}>
      <h3 className={styles.shiftertxt}>
        Unlock the key to creating{" "}
        {/* Apply the flip class to the span element for the next word and set a unique key to trigger the animation */}
        <span className={`${styles.word} ${styles.flip}`} key={nextWordIndex}>
          {/* Apply the back class to the span element for the current word and change its content dynamically */}
          <span className={styles.back}>{words[wordIndex]}</span>
        </span>{" "}
        designs!
      </h3>
    </div>
  );
}
