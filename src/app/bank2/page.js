
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bank2 from '../components/Finance/Bank2'

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto pt-20 pb-10 p-4">
        {/* Main content goes here */}

        <div>
            <Bank2/>
      </div>
      </main>
     <Footer />
      
    </>
  );
}