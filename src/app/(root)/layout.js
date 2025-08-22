import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow pb-10">{children}</main>
      <Footer />
    </>
  );
}
