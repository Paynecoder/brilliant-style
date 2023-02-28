import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import "@/styles/variables.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
