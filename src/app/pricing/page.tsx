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
        <div className="md:max-w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <PricingCard
            title="Free"
            price="$0/month"
            features={['Access to basic features', 'Daily limited content']}
            subscribe='Play Now'
            to="/play"
            img='/assets/icons/freeicon.png'
            imgbutton='/assets/icons/freebutton.png'
          />
          <PricingCard
            title="Casual"
            price="$7.99/month"
            features={['Double the daily limit']}
            to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BQDW3XTC35SAL"
            img='/assets/icons/casualicon.png'
            imgbutton='/assets/icons/casualbutton.png'
          />
          <PricingCard
            title="Epic"
            price="$15.99/month"
            features={['Triple the daily limit']}
            to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TBFSYDFY6NBXL"
            img='/assets/icons/epicicon.png'
            imgbutton='/assets/icons/epicbutton.png'
          />
          <PricingCard
            title="Legendary"
            price="$31.99/month"
            features={['No more limits']}
            to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TEJAJ72NS6C3N"
            img='/assets/icons/legendsicon.png'
            imgbutton='/assets/icons/legendsbutton.png'
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
  imgbutton: string;
}

const PricingCard = ({ title, img, imgbutton, price, features, subscribe = "Subscribe", to }: PricingCardProps) => {
  return (
    <div className='flex items-center justify-center'>
      <div className="w-5/12">
        <Image className='w-full' alt="icon" src={img} width={150} height={10}
        />
      </div>
      <div
        className="relative mt-7 flex flex-col justify-center items-center w-[300px] md:w-[400px] h-[350px] md:h-[390px]"
      >
        <div className="z-10 absolute -top-2 left-[25%] w-[40px]">
          <Image className='w-full' alt="icon" src={imgbutton} width={150} height={10}
          />
        </div>
        <Image id='background' className='opacity-70 absolute w-full h-full' alt="parchment" src='/assets/parchment.png' layout='fill'>
        </Image>
        <div id='content' className="z-10 p-4">
          <div className=''><h2 className="text-3xl text-left md:text-4xl font-bold mb-4">{price}</h2>
            <p className="text-lg mb-4"></p>
            <ul className="mb-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 mr-2 " />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href={to}
            className="block text-center underline  hover:scale-105 transition-all duration-300"
          >
            {subscribe}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

