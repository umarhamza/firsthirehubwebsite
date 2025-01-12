import React from 'react';

type CardSimpleWithButtonProps = {
    title: string;
    description: string;
    className?: string;
    buttons: {
        label: string;
        href: string;
        borderColor?: string;
        backgroundColor?: string;
        textColor?: string;
        icon?: React.ElementType;
        download?: boolean;
        target?: string;
        onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    }[];
}

const CardSimpleWithButton = ({ title, description, buttons, className = '' }: CardSimpleWithButtonProps) => {
    return (
       
        <div className={`text-center bg-white p-12 rounded-xl shadow-sm ${className}`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons?.map((b, index) => {
              const Icon = b.icon;
              return (
              <a
                key={index}
                href={b.href}
                target={b.target ?? "_self"}
                className={`inline-flex items-center justify-center px-6 py-3 border rounded-full transition-colors
                  ${b.borderColor ? `border-${b.borderColor}` : 'border-blue-600'}
                  ${b.backgroundColor ? `bg-${b.backgroundColor}` : ''} 
                  ${b.textColor ? `text-${b.textColor}` : 'text-blue-600'}
                  hover:bg-blue-600 hover:text-white
                  ${b.backgroundColor ? `hover:bg-transparent hover:!text-${b.backgroundColor}` : ''}
                  `}
                download={b.download}
                onClick={b.onClick}
              >
                {b.label}
                {Icon && <Icon className="ml-2 h-5 w-5" />}
              </a>
            )})}
          </div>
        </div>
    );
};

export default CardSimpleWithButton;

