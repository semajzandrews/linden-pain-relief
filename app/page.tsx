import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Care from "./components/Care";
import Treatments from "./components/Treatments";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Care />
        <Treatments />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
