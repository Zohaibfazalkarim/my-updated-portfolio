import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoad height={"100vh"} offset={300}>
          <section id="home">
            <Hero />
          </section>
        </LazyLoad>
      </Suspense>

      {/* Services Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoad height={"100vh"} offset={300}>
          <section id="services">
            <Services />
          </section>
        </LazyLoad>
      </Suspense>

      {/* Portfolio Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoad height={"100vh"} offset={300}>
          <section id="portfolio">
            <Portfolio />
          </section>
        </LazyLoad>
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoad height={"100vh"} offset={300}>
          <section id="contact">
            <Contact />
          </section>
        </LazyLoad>
      </Suspense>
    </div>
  );
};

export default App;
