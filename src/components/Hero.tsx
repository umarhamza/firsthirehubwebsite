import React from 'react';

type HeroProps = {
    heading: string;
    headingStyle2?: boolean;
    description: string;
    buttonOneLabel?: string;
    buttonTwoLabel?: string;
    buttonOneClickHandler?: () => void;
    buttonTwoClickHandler?: () => void;
    buttonOneArrow?: React.ElementType;
}

export default function Hero({ heading, description, buttonOneLabel, buttonTwoLabel, buttonOneClickHandler, buttonTwoClickHandler, buttonOneArrow, headingStyle2 }: HeroProps) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className={`text-4xl font-bold text-gray-900 mb-6 ${!headingStyle2 ? 'md:text-6xl' : 'md:text-5xl'}`}>
            <div dangerouslySetInnerHTML={{ __html: heading }} />
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex justify-center gap-4">
            {buttonOneLabel && buttonOneClickHandler && (
              <button 
                onClick={buttonOneClickHandler}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center"
              >
                {buttonOneLabel}
                {buttonOneArrow && React.createElement(buttonOneArrow)}
              </button>
            )}
            {buttonTwoLabel && buttonTwoClickHandler && (
              <button 
                onClick={buttonTwoClickHandler}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
              >
                {buttonTwoLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}