import styles from "@/styles/Typo.module.css";
import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import loller from "@/public/Typo/Aa.svg";

export default function Typo() {
  const color = "#FFb13b";
  const iimg = loller;
  const ititle = "Typography";
  const itxt =
    "At Brrriliant, we understand the importance of typography in creating a cohesive and engaging visual language. Our primary font is Nunito. It has a playful and friendly feeling that perfectly aligns with our brand identity. Nunito is both a fun, bubbly font and a slick, legible one. It’s versatility allows us to create a balanced and visually appealing design that supports our mission of making environmental learning an adventure.";
  return (
    <>
      <main>
        <Navbar color={color} />
        <Introduction icolor={color} ititle={ititle} itxt={itxt} iimg={iimg} />
      </main>
    </>
  );
}
