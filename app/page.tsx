import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Care from "./components/Care";
import BodyMap from "./components/BodyMap";
import Method from "./components/Method";
import Doctor from "./components/Doctor";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Care />
        <BodyMap />
        <Method />
        <Doctor />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
