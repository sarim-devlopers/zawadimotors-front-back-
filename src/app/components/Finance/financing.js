// pages/financing.js

import Link from 'next/link';

const Financing = () => {
  return (
    <section className="w-full h-screen flex flex-col py-10 items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Personalized Vehicle Financing</h1>
        <p className="text-lg mb-6 font-semibold">
          Zawadi Motors has partnered with Various Banks in Kenya to make it super easy for you to get the car you’ve been dreaming about (both personal and commercial vehicles). With up to 90%* financing, this is a deal you simply cannot miss! Select the bank option from below.
        </p>
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        <Link href="/bank1" legacyBehavior>
          <a className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Stanbic Bank </a>
        </Link>
        <Link href="/bank2"  legacyBehavior>
          <a className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"> NCBA Bank</a>
        </Link>
        <Link href="/bank3"  legacyBehavior>
          <a className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Absa Bank</a>
        </Link>
        <Link href="/loan-calculator"  legacyBehavior>
          <a className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">Loan Calculator</a>
        </Link>
      </div>
    </section>
  );
};

export default Financing;
