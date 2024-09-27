'use client';

import React, { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

interface PrimaryButtonProps extends ButtonProps {
  variant?: 'solid' | 'outline' | 'transparent';
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
}

const buttonVariants: MotionProps['variants'] = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'solid', 
  ...props 
}) => {
  const baseClasses = "font-semibold white uppercase py-3 px-4 rounded-md shadow-md transition-colors duration-200";
  const variantClasses = {
    solid: "bg-white text-white hover:bg-primary-dark",
    outline: "bg-transparant text-white border-2 border-white hover:bg-primary hover:text-white",
    transparent: "bg-transparent text-primary hover:bg-primary/10",
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <motion.button
    className={`bg-black uppercase text-white font-semibold py-2 px-4 rounded-md shadow-md ${className}`}
    variants={buttonVariants}
    initial="initial"
    animate="animate"
    whileHover="hover"
    {...props}
  >
    {children}
  </motion.button>
);

export const TextLink: React.FC<LinkProps> = ({ children, href, className = '', ...props }) => (
  <motion.a
    href={href}
    className={`text-primary font-semibold underline ${className}`}
    variants={buttonVariants}
    initial="initial"
    animate="animate"
    whileHover="hover"
    {...props}
  >
    {children}
  </motion.a>
);

const Button: React.FC = () => (
  <div className="space-y-4">
    <PrimaryButton variant="outline">Learn More</PrimaryButton>
    <SecondaryButton>Let's work together</SecondaryButton>
    <PrimaryButton variant="transparent">Transparent Primary</PrimaryButton>
    <TextLink href="#">Explore our services</TextLink>
  </div>
);

export default Button;