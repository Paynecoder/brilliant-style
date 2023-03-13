import styles from "@/styles/Typo.module.css";
import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import loller from "@/public/Typo/Aa.svg";
import ex from "../public/Typo/x.svg";
import check from "@/public/Typo/check.svg";
import Image from "next/image";

export default function Typo() {
  const color = "#FFb13b";
  const iimg = loller;
  const ititle = "Typography";
  const itxt =
    "At Brrriliant, we understand the importance of typography in creating a cohesive and engaging visual language.";
  return (
    <>
      <main className={styles.main}>
        <Navbar color={color} />
        <Introduction icolor={color} ititle={ititle} itxt={itxt} iimg={iimg} />
        <div className={styles.section}>
          <div className={styles.emotion}>
            <h2>Emotion</h2>
            <p>
              At Brrriliant, we believe that typography can help create an
              engaging and cohesive visual language. That's why our primary
              font, Nunito, perfectly aligns with our brand identity. Nunito has
              a playful and friendly feeling that creates a fun and inviting
              atmosphere, while also being sleek and professional.
            </p>
          </div>
          <div className={styles.emo_eg}>
            <div>
              <h2>Get Ready to Learn!</h2>
              <Image src={check} alt="check" />
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "arial",
                  fontWeight: "lighter",
                  fontSize: 36,
                  color: "var(--secondary-gray)",
                }}
              >
                Get Ready to Learn!
              </h2>
              <Image src={ex} alt="ex" />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.headers}>
            <h2>Headers</h2>
            <p>
              We use Nunito Black for our headers to create an eye-catching and
              commanding effect. With a 48pt typeface (in the web app), it's the
              biggest and boldest variation of the family, ensuring that
              important information stands out and catches the attention of our
              young audience.
            </p>
          </div>
          <div className={styles.head_eg}>
            <div>
              <h2>Brrriliant</h2>
              <Image src={check} alt="check" />
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "Nunito",
                  fontWeight: "lighter",
                  fontSize: 32,
                }}
              >
                Brrriliant
              </h2>
              <Image src={ex} alt="ex" />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.bodytxt}>
            <h2>Body Text</h2>
            <p>
              For our body text (in the web app specifically), we use Nunito
              Bold with a 20pt typeface. While some may discourage using bold
              fonts for body text, Nunito Bold's legibility and easy-to-read
              letterforms make it an ideal choice for us. Even when used in
              smaller sizes, it remains clear and easy to read.
            </p>
          </div>
          <div className={styles.body_eg}>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
              <Image src={check} alt="check" />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "Nunito",
                  fontWeight: "900",
                  fontSize: 24,
                  color: "#000",
                }}
              >
                Lorem ipsum dolor sit amet
              </p>
              <Image src={ex} alt="ex" />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.readability}>
            <h2>Readability</h2>
            <p>
              We take readability seriously at Brrriliant, which is why we avoid
              using text that doesn't contrast well enough to the background.
              For example, we avoid using yellow text on a white background, or
              any color that doesn't provide enough contrast for our users. By
              using Nunito, we ensure that all text is easy to read and doesn't
              strain the eyes of our users, making the learning experience as
              smooth and enjoyable as possible.
            </p>
          </div>
          <div className={styles.readability__eg}>
            <div>
              <h1
                style={{
                  color: "#E2E2E2",
                }}
              >
                Brrriliant - Not Good!
              </h1>
            </div>
            <div>
              <h1
                style={{
                  color: "#BABABA",
                }}
              >
                Brrriliant - Better!
              </h1>
            </div>
            <div>
              <h1>Brrriliant - Perfect!</h1>
              <Image src={check} alt="check" />
            </div>
            <div>
              <h1
                style={{
                  color: "#000",
                }}
              >
                Brrriliant - Too Harsh!
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
