import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import loller from "@/public/Color/pallete.svg";

export default function Color() {
  const color = "#39E454";
  const iimg = loller;
  const ititle = "Color";
  const itxt =
    "Color is an essential element of our app's design, and at Brrriliant, we've carefully selected our primary colors to embody our mission and brand identity. Our light blue color represents the icy Arctic landscape, while our beige color is inspired by our beloved mascot, Burr the Polar Bear. By using these colors, we aim to create a visual connection between our brand and the environment, emphasizing our commitment to eco-consciousness.";
  return (
    <>
      <main>
        <Navbar color={color} />
        <Introduction icolor={color} ititle={ititle} itxt={itxt} iimg={iimg} />
      </main>
    </>
  );
}
