import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import loller from "@/public/Illu/nobody.svg";

export default function Illu() {
  const color = "#FD7BF0";
  const iimg = loller;
  const ititle = "Illustration";
  const itxt =
    "At Brrriliant, we take pride in our unique approach to art and illustrations. Our design philosophy is centered on keeping things simple, friendly, and fun. We want our illustrations to be approachable and inclusive for everyone, which is why we use bright colors and rounded shapes that make our art feel warm and inviting. Our goal is to create a visual language that reflects the spirit of our brand, while also conveying important environmental messages in a lighthearted way.";
  return (
    <>
      <main>
        <Navbar color={color} />
        <Introduction icolor={color} ititle={ititle} itxt={itxt} iimg={iimg} />
      </main>
    </>
  );
}
