import Header from '../components/Header';
import Footer from '../components/Footer';
import Financing from '../components/Finance/financing'

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto pt-20 pb-10 p-4">
        {/* Main content goes here */}

        <div>
            <Financing/>
      </div>
      </main>
     <Footer />
      
    </>
  );
}