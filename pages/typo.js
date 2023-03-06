import styles from "@/styles/Typo.module.css";
import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import loller from "@/public/Typo/Aa.svg";

export default function Typo() {
  const color = "#FFb13b";
  const iimg = loller;
  const ititle = "Typography";
  const itxt =
    "At Brrriliant, we understand the importance of typography in creating a cohesive and engaging visual language.";
  return (
    <>
      <main>
        <Navbar color={color} />
        <Introduction icolor={color} ititle={ititle} itxt={itxt} iimg={iimg} />
      </main>
    </>
  );
}
