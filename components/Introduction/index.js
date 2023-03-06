import Image from "next/image";
import styles from "./Introduction.module.css";

export default function Introduction({ ititle, itxt, iimg, icolor }) {
  return (
    <>
      <div className={styles.intro} style={{ backgroundColor: icolor }}>
        <div className={styles.iwrap}>
          <h3 className={styles.ititle}>{ititle}</h3>
          <p className={styles.itxt}>{itxt}</p>
        </div>
        <Image src={iimg} className={styles.ibob} width={300} height={300} />
      </div>
    </>
  );
}
