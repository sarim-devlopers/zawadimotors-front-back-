

import Header from '../components/Header';
import Footer from '../components/Footer';
import LoanCalculator from '../components/Finance/LoanCal'

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto pt-20 pb-10 p-4">
        {/* Main content goes here */}

        <div>
            <LoanCalculator/>
      </div>
      </main>
     <Footer />
      
    </>
  );
}

