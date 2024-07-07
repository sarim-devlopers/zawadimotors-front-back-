
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bank3 from '../components/Finance/Bank3'

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto pt-20 pb-10 p-4">
        {/* Main content goes here */}

        <div>
            <Bank3/>
      </div>
      </main>
     <Footer />
      
    </>
  );
}