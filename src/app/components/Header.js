'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import Link from 'next/link';

const Header = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  const desktopMode = useMediaQuery({
    query: '(min-width: 1300px)',
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${header ? 'bg-white shadow-md py-2' : 'bg-primary shadow-none text-white py-4'} fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}>
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <a className="cursor-pointer">
              <Image src="/icons/logo.svg" width={10} height={10} alt="Logo" className=" w-32 h-20" />
            </a>
          </Link>
          <div onClick={() => setNav(!nav)} className="cursor-pointer md:hidden">
            {nav ? (<BiX className="text-4xl text-white" />) : (<BiMenuAltRight className="text-4xl text-white" />)}
          </div>
        </div>
        <nav className={`${nav ? 'max-h-max py-8 px-4 md:py-0 md:px-0' : 'max-h-0 md:max-h-max'} flex flex-col w-full bg-white md:bg-transparent gap-y-6 overflow-hidden font-bold md:font-medium md:flex-row md:w-max md:gap-x-8 md:h-max md:pb-0 transition-all duration-150 text-center md:text-left uppercase text-sm md:text-[15px] md:normal-case`}>
          <Link href="/" legacyBehavior>
            <a className="relative group cursor-pointer">
              Home
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-500 transform -translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>
          </Link>
          <Link href="/stocklist" legacyBehavior>
            <a className="relative group cursor-pointer">
              Stock list
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-500 transform -translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>
          </Link>
          <Link href="/aboutus" legacyBehavior>
            <a className="relative group cursor-pointer">
              About us
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-500 transform -translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>
          </Link>
          <Link href="/finance" legacyBehavior>
            <a className="relative group cursor-pointer">
              Financing
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-500 transform -translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>
          </Link>
          <Link href="/coming-soon" legacyBehavior>
            <a className="relative group cursor-pointer">
              Coming Soon
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-500 transform -translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="relative group cursor-pointer">
              Contact Us
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-500 transform -translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className="relative group cursor-pointer">
              Blog
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-500 transform -translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
