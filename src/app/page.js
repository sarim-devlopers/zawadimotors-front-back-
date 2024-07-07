import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto pt-20 pb-10 p-4 flex flex-col min-h-screen">
        {/* Main content goes here */}

        <div className='flex flex-col min-h-screen'>
      <Hero/>
      </div>
      </main>
      <Footer />
    </>
  );
}
