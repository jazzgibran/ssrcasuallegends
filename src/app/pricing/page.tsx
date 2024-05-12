import React from 'react';
import Link from 'next/link';

const Pricing = () => {
  return (
    <div
      className="pb-14 min-h-screen flex flex-col justify-center items-center text-MountainMeadow ">
      <div
        className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Choose Your Adventure</h1>
        <div className="mx-auto max-w-[70%] grid grid-cols-1 md:grid-cols-2 gap-8">
          <PricingCard
            title="Free"
            price="$0/month"
            features={['Access to basic features', 'Daily limited content']}
            subscribe='Play Now'
            to="/play"
          />
          <PricingCard
            title="Casual"
            price="$7.99/month"
            features={['Double the daily limit']}
            to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BQDW3XTC35SAL"
          />
          <PricingCard
            title="Epic"
            price="$15.99/month"
            features={['Triple the daily limit']}
            to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TBFSYDFY6NBXL"
          />
          <PricingCard
            title="Legendary"
            price="$31.99/month"
            features={['No more limits']}
            to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TEJAJ72NS6C3N"
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
}

const PricingCard = ({ title, price, features, subscribe = "Subscribe", to}: PricingCardProps) => {
  return (
    <div
      className="border-teal-400 flex flex-col justify-between border bg-GreenMist bg-opacity-70  rounded-lg overflow-hidden shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-4">{price}</p>
      <ul className="mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 11-2 0 1 1 0 012 0zM10 5a1 1 0 00-1 1v5a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={to}
        className="block text-center bg-teal-800 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition duration-300"
      >
        {subscribe}
      </Link>
    </div>
  );
};

export default Pricing;
