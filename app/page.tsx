import About from '@/components/About';
import Blog from '@/components/Blog';
import Brands from '@/components/Brands';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Membership from '@/components/Membership';
import Prices from '@/components/Prices';
import Testimonial from '@/components/Testimonial';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Prices />
      <Membership />
      <Testimonial />
      <Blog />
      <Brands />
      <Contact />
    </main>
  );
}
