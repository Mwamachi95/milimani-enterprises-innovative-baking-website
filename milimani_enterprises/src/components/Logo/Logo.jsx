import React from 'react';
import logoSvg from '../../assets/images/logos/Milimani Enterprises Logo.svg';
import logoPng from '../../assets/images/logos/Milimani Enterprises Logo.png';

const Logo = ({ variant = 'svg', className = '', alt = 'Milimani Enterprises Logo' }) => {
  const logoSrc = variant === 'svg' ? logoSvg : logoPng;
  
  return (
    <img 
      src={logoSrc} 
      alt={alt}
      className={`logo ${className}`}
    />
  );
};

export default Logo;