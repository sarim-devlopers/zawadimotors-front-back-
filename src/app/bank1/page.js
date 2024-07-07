
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bank1 from '../components/Finance/Bank1'

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto pt-20 pb-10 p-4">
        {/* Main content goes here */}

        <div>
            <Bank1/>
      </div>
      </main>
    
  
      
    </>
  );
}