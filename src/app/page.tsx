import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ServiceCards from '@/components/home/ServiceCards';
import About from '@/components/home/About';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header (sticky) */}
      <Header />

      {/* Main content */}
      <main className="flex-grow">
        <Hero />
        <ServiceCards />
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}