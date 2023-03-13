import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import loller from "@/public/Color/pallete.svg";
import styles from "../styles/Color.module.css";

export default function Color() {
  const color = "#39E454";
  const iimg = loller;
  const ititle = "Color";
  const itxt =
    "Color is an essential element of our app's design, and at Brrriliant, we've carefully selected our primary colors to embody our mission and brand identity.";
  return (
    <>
      <main className={styles.main}>
        <Navbar color={color} />
        <Introduction icolor={color} ititle={ititle} itxt={itxt} iimg={iimg} />
        <div className={styles.section}>
          <div className={styles.palette}>
            <h1>The Palette</h1>
            <p>
              The Brrriliant colour palette consists of two shades of blue, two
              shades of beige, two shades of white, and two shades of gray.
            </p>
            <p>
              Our palette is designed to be bright and fun without being an
              eyesore. The blue and beige colours represent the icey arctic
              landscape and the polar bears that inhabit it.
            </p>
            <p>
              The white and gray tones are both supporting hues that are great
              to use for non-illustrative purposes such as background colours
              and text colours.
            </p>
            <p>
              Colours outside of the palette may be used freely in illustrations
              so long as they are consistent with the tone and style that we
              use.
            </p>
          </div>
          <div className={styles.colors}>
            <div
              style={{
                backgroundColor: "#7BD0FF",
              }}
            >
              <p>7BD0FF</p>
            </div>
            <div
              style={{
                backgroundColor: "#C0E8FF",
              }}
            >
              <p>C0E8FF</p>
            </div>
            <div
              style={{
                backgroundColor: "#E0D6C3",
              }}
            >
              <p>E0D6C3</p>
            </div>
            <div
              style={{
                backgroundColor: "#EFEAE1",
              }}
            >
              <p>EFEAE1</p>
            </div>
            <div
              style={{
                backgroundColor: "#F5F5F5",
              }}
            >
              <p>F5F5F5</p>
            </div>
            <div
              style={{
                backgroundColor: "#FFFFFF",
              }}
            >
              <p>FFFFFF</p>
            </div>
            <div
              style={{
                backgroundColor: "#4D4D4D",
              }}
            >
              <p>4D4D4D</p>
            </div>
            <div
              style={{
                backgroundColor: "#707070",
              }}
            >
              <p>707070</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
