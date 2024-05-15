import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Pricing = () => {
  return (
    <div
      className="pb-14 min-h-screen  text-black ">
      <div
        className="w-full flex flex-col justify-center md:items-center px-4 py-16">
        <h1 className="text-4xl text-center font-bold mb-8">Choose Your Adventure</h1>
        <div className="md:max-w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PricingCard
            title="Free"
            price="$0/month"
            features={['Access to basic features', 'Daily limited content']}
            subscribe='Play Now'
            to="/play"
            img='/assets/icons/freeicon.png'
          />
          <PricingCard
            title="Casual"
            price="$7.99/month"
            features={['Double the daily limit']}
            to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BQDW3XTC35SAL"
            img='/assets/icons/casualicon.png'
          />
          <PricingCard
            title="Epic"
            price="$15.99/month"
            features={['Triple the daily limit']}
            to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TBFSYDFY6NBXL"
            img='/assets/icons/epicicon.png'
          />
          <PricingCard
            title="Legendary"
            price="$31.99/month"
            features={['No more limits']}
            to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TEJAJ72NS6C3N"
            img='/assets/icons/legendsicon.png'
          />
        </div>
      </div>
    </div>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  subscribe?: string;
  to: string;
  img: string;
}

const PricingCard = ({ title, img, price, features, subscribe = "Subscribe", to }: PricingCardProps) => {
  return (
    <div
      className="relative flex flex-col justify-center items-center w-[300px] md:w-[400px] h-[350px] md:h-[390px]"
    >
      <Image id='background' className='opacity-70 absolute w-full h-full' alt="parchment" src='/assets/parchment.png' layout='fill'>
      </Image>
      <div id='content' className="z-10 p-4">
      <div className="w-4/12 xl:w-[28%] absolute -top-5 xl:-top-0 xl:left-3 left-0">
        <Image className='w-full' alt="icon" src={img} width={150} height={10}
        />
      </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-4">{price}</p>
        <ul className="mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 mr-2 " />
              {feature}
            </li>
          ))}
        </ul>
        <Link
          href={to}
          className="block text-center underline  hover:scale-105 transition-all duration-300"
        >
          {subscribe}
        </Link>
      </div>
    </div>
  );
};

export default Pricing;

