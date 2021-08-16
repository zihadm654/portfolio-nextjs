import About from './About';
import Hero from './Hero';
import Describe from './Describe';
import Progress from './Progress';
import Skills from './Skills';
import Testimonial from './Testimonial';
import Projects from './Projects';
export default function Layouts() {
  return (
    <>
      <Hero />
      <Describe />
      <Projects />
      {/* <Testimonial /> */}
      <Progress />
      <Skills />
      <About />
    </>
  );
}
