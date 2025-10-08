import React from 'react';
import Link from 'next/link';
import { NavbarItemProps } from '@/types/types';
import { robotoMono } from '@/app/fonts/fonts';


const NavbarItem: React.FC<NavbarItemProps> = ({
  href,
  text,
  icon: Icon,
  onClick,
  className,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={`relative block ${className}`} onClick={handleClick}>
      <Link href={href}>
        <div className="flex items-center space-x-2 py-4 transition-transform transform hover:scale-105 cursor-pointer">
          {Icon && <Icon size={24} />}
          {text && <span className={`text-2xl text- ${robotoMono.className}`}>{text}</span>}
        </div>
      </Link>
    </div>
  );
};

export default NavbarItem;
