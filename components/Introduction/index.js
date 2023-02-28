import iceberg from "@/public/Home/iwrap.svg";
import Image from "next/image";
import styles from "./Introduction.module.css";

export default function Introduction() {
  return (
    <>
      <div className={styles.intro}>
        <div className={styles.iwrap}>
          <h3 className={styles.ititle}>Hey!</h3>
          <p className={styles.itxt}>
            Here at Brrriliant, we believe learning about the impact of our
            actions on the environment can be an adventure. Our app is vibrant,
            approachable, and intuitive, making it easy for anyone to join Burr
            the polar bear and our community of eco-conscious learners. Start
            exploring the challenges and opportunities of climate change today -
            it's easy and rewarding with Brrriliant!
          </p>
        </div>
        <Image src={iceberg} className={styles.ibob} />
      </div>
    </>
  );
}
