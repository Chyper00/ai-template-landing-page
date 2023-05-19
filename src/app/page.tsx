'use client';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import Lottie from 'react-lottie';
import animationData from './animation.json';

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  const isMobile = window.innerWidth <= 768;

  const lottieWidth = isMobile ? '100%' : 500;
  const lottieHeight = isMobile ? 'auto' : 500;

  return (
    <section className="flex flex-col md:flex-row p-4 md:p-20">
      <div className="flex-1 flex flex-col justify-center md:pl-44">
        <h1 className="text-4xl font-bold mb-4">Empower your Research</h1>
        <div className="">
          <p className="">
            Unlock hidden insights, discover untapped opportunities, and fuel
            innovation.
          </p>
          <p className="mb-4">
            Make data-driven decisions confidently and accelerate your growth
            with AI-powered insights.
          </p>
        </div>

        <div className="flex items-center mb-4">
          <a href="https://www.twitter.com">
            <div className="bg-green-500 rounded-full flex items-center justify-center w-12 h-12 mr-2">
              <FaTwitter className="text-white text-xl" />
            </div>
          </a>
          <a href="https://www.instagram.com">
            <div className="bg-green-500 rounded-full flex items-center justify-center w-12 h-12 mr-4">
              <FaInstagram className="text-white text-xl" />
            </div>
          </a>
          <span className="ml-2 text-xl">150+ Successful Clients</span>
        </div>
      </div>
      <div className="pr-4 md:pr-44">
        <Lottie
          options={defaultOptions}
          width={lottieWidth}
          height={lottieHeight}
        />
      </div>
    </section>
  );
}
