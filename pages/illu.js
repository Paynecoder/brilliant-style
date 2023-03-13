import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import loller from "@/public/Illu/body.svg";
import styles from "@/styles/Illu.module.css";
import Image from "next/image";
import { useState } from "react";

import ex1 from "@/public/Illu/ex1.svg";
import ex2 from "@/public/Illu/ex2.svg";
import ex3 from "@/public/Illu/ex3.svg";

import ex21 from "@/public/Illu/ex21.svg";
import ex22 from "@/public/Illu/ex22.svg";
import ex23 from "@/public/Illu/ex23.svg";
import ex24 from "@/public/Illu/ex24.svg";
import ex25 from "@/public/Illu/ex25.svg";
import ex31 from "@/public/Illu/ex31.svg";
import ex32 from "@/public/Illu/ex32.svg";
import ex33 from "@/public/Illu/ex33.svg";
import ex34 from "@/public/Illu/ex34.svg";
import ex35 from "@/public/Illu/ex35.svg";
import ex36 from "@/public/Illu/ex36.svg";

export default function Illu() {
  const [disabled, setDisabled] = useState(true);
  const color = "#FD7BF0";
  const iimg = loller;
  const ititle = "Illustration";
  const itxt =
    "At Brrriliant, we take pride in our unique approach to art and illustrations. Our design philosophy is centered on keeping things simple, friendly, and fun.";
  return (
    <>
      <main className={styles.main}>
        <Navbar color={color} />
        <Introduction icolor={color} ititle={ititle} itxt={itxt} iimg={iimg} />
        <div className={styles.section}>
          <div className={styles.logo}>
            <h1>The Logo</h1>
            <p>
              These are some different versions of our mascot, Burr. We came up
              with this mascot idea to ensure a fun yet powerful learning
              experience for all users.
            </p>
          </div>
          <div className={styles.logo_eg}>
            <Image src={ex1} alt="1" />
            <Image src={ex2} alt="2" />
            <Image src={ex3} alt="3" />
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.prog}>
            <h1>Progressive Versions</h1>
            <p>
              When drawn in a full body context, Burr is shaped like a bean and
              has no arms or legs. He does, however, have an amazing sense of
              style!
            </p>
          </div>
          <div className={styles.prog_eg}>
            <Image src={ex21} alt="1" />
            <Image src={ex22} alt="2" />
            <Image src={ex23} alt="3" />
            <Image src={ex24} alt="4" />
            <Image src={ex25} alt="5" />
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.prog}>
            <h1>Misc. Illustrations</h1>
            <p>
              Our illustrations are all entirely custom made with the goal of
              keeping them all simple and clear. To add depth, the drawings are
              often shaded with a vertical split to add depth and colour
              separation. Hard edges may be used but are uncommon (ex. Milk
              Carton).
            </p>
          </div>
          <div className={styles.misc_eg}>
            <Image src={ex31} alt="1" />
            <Image src={ex32} alt="2" />
            <Image src={ex33} alt="3" />
            <Image src={ex34} alt="4" />
            <Image src={ex35} alt="5" />
            <Image src={ex36} alt="5" />
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.btns}>
            <h1>Buttons</h1>
            <p>
              Our buttons are built using our Primary Blue colour and an
              alternative Accent Blue for the shadows. The text is large, bold,
              white text to ensure maximum readability.
            </p>
            <p>
              When pressed, the text darkens slightly to an off-white colour,
              and the shadow is removed to give the illusion of a three
              dimensional button.
            </p>
            <p>
              An inactive button has no shadow and uses our Secondary Blue for
              the background colour.
            </p>
          </div>
          <div className={styles.btn_eg}>
            <button className={styles.btn1}>Button</button>
            <button className={styles.btn3} disabled={disabled}>
              Button
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
