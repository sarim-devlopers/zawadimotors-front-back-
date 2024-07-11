"use client";
import FAQCard from './ui/faq'
import BookTestDriveButton from './ui/whatsapp'
const About = () => {

  //fetch from backend ( soon i will do it )
  const faqs = [
    {
      question: 'Do you offer hire-purchase?',
      answer: 'At our dealership, we’re pleased to offer flexible hire purchase options to help you acquire your dream vehicle with ease. With our hire purchase program, you can spread the cost of your purchase over a set period, making manageable monthly payments that fit your budget.',
    },
    {
      question: 'What payment options do you have?',
      answer: 'At our dealership, we take pride in offering a wide variety of cars to suit every taste, lifestyle, and budget. Whether you’re in the market for a compact sedan, a spacious SUV, a rugged truck, or a sleek sports car, we have something for everyone',
    },
    {
      question: 'How much do I need to get a car?',
      answer: 'You can pay as low as, 500,000ksh, and drive away with the car of your dreams',
    },
    {
      question: 'Do you import vehicles on behalf?',
      answer: 'Yes. Here at Al-Siddique motors we import vehicles from all over the world to our clients.',
    },
    // Add more FAQs here
  ];
  return (
    <section className="w-full h-screen xl:h-full sm:h-[70vh]">

<div className="text-center mt-16 xl:mt-0">
        <h1 className="h1">About us</h1>
        <p className="description mx-auto xl:mx-0 mb-6 xl:mb-10 font-semibold">
        Our dealership is more than just a place to buy cars; it’s a destination where automotive dreams come to life. Nestled in the heart of Nairobi, along Ngong road. We pride ourselves on offering a unique and personalized experience to every customer who walks through our doors. With a rich history spanning 40 plus years in the automotive industry, we have become synonymous with reliability, trust, and exceptional service.
       Explore our diverse selection of new, certified pre-owned, and quality used vehicles, ensuring you find the perfect fit for your needs and budget. Benefit from transparent and competitive pricing on all our vehicles, with no hidden fees or surprises.


        </p>
      </div>

<div className="text-center mt-16 xl:mt-0">
        <h1 className="h1">Our Mission
        </h1>
        <p className="description mx-auto xl:mx-0 mb-6 xl:mb-10 font-semibold">
        Our mission is to provide an unparalleled automotive experience that exceeds expectations at every turn. We are committed to offering a diverse selection of high-quality vehicles, transparent pricing, and exceptional customer service. Our goal is to build lasting relationships with our clients based on trust, integrity, and mutual respect. We strive to make the car buying process seamless and enjoyable, ensuring that every customer drives away satisfied and confident in their decision.
        </p>
      </div>
      <div className="container mx-auto p-4 bg-secondary-500">
      <h1 className="h1 text-center">Frequently Asked Question
      </h1>
      <div className="App p-4">
   
      {faqs.map((faq, index) => (
        <FAQCard key={index} question={faq.question} answer={faq.answer} />
      ))}
    
    </div>

    <div className='items-center'> <BookTestDriveButton/> 
    </div>
   
        </div>
      </section>
  )
}

export default About