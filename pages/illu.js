import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import loller from "@/public/Illu/nobody.svg";

export default function Illu() {
  const color = "#FD7BF0";
  const iimg = loller;
  const ititle = "Illustration";
  const itxt =
    "At Brrriliant, we take pride in our unique approach to art and illustrations. Our design philosophy is centered on keeping things simple, friendly, and fun.";
  return (
    <>
      <main>
        <Navbar color={color} />
        <Introduction icolor={color} ititle={ititle} itxt={itxt} iimg={iimg} />
      </main>
    </>
  );
}
