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
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between ">
        <div className="flex justify-between items-center px-4">
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <a className="cursor-pointer">
              <Image src="/icons/logo.svg" width={194} height={64} alt="Logo" />
            </a>
          </Link>
        </div>
        <div onClick={() => setNav(!nav)} className="cursor-pointer xl:hidden">
          {nav ? (<BiX className="text-4xl" />) : (<BiMenuAltRight className="text-4xl" />)}
        </div>
        <nav className={`${nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0 xl:max-h-max'} flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}>
          <Link href="/" legacyBehavior>
            <a className="cursor-pointer">Home</a>
          </Link>
          <Link href="/stocklist" legacyBehavior>
            <a className="cursor-pointer">Stock list</a>
          </Link>
          <Link href="/aboutus" legacyBehavior>
            <a className="cursor-pointer">About us</a>
          </Link>
          <Link href="/finance" legacyBehavior>
            <a className="cursor-pointer">Financing</a>
          </Link>
          <Link href="/coming-soon" legacyBehavior>
            <a className="cursor-pointer">Coming Soon</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="cursor-pointer">Contact Us</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className="cursor-pointer">Blog</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
