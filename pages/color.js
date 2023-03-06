import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import loller from "@/public/Color/pallete.svg";

export default function Color() {
  const color = "#39E454";
  const iimg = loller;
  const ititle = "Color";
  const itxt =
    "Color is an essential element of our app's design, and at Brrriliant, we've carefully selected our primary colors to embody our mission and brand identity.";
  return (
    <>
      <main>
        <Navbar color={color} />
        <Introduction icolor={color} ititle={ititle} itxt={itxt} iimg={iimg} />
      </main>
    </>
  );
}
