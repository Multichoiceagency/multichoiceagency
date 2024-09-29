import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import the Image component from next/image

interface LogoProps {
  isScrolled: boolean; // Explicitly type the isScrolled prop
}

const Logo: React.FC<LogoProps> = ({ isScrolled }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensures the component is mounted before rendering (next-themes is a client-side hook)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Helper function for dark mode logo
  const getDarkModeLogoSrc = () => {
    return "/images/logo-wit.png"; // White logo in dark mode
  };

  // Helper function for light mode logo
  const getLightModeLogoSrc = (isScrolled: boolean) => {
    return isScrolled ? "/images/logo-multichoiceagency.png" : "/images/logo-wit.png";
  };

  // Decide the logo based on the theme and scroll status
  const getLogoSrc = () => {
    if (theme === 'dark') {
      return getDarkModeLogoSrc();
    }
    return getLightModeLogoSrc(isScrolled);
  };

  // Prevent rendering on the server-side until mounted
  if (!mounted) return null;

  return (
    <Image
      src={getLogoSrc()} // Correct usage of the Image component
      alt="Multichoice Agency Logo"
      width={150} // Adjust the width based on your layout needs
      height={42} // Adjust the height based on your layout needs
      className="logo" // Add your own classes as needed
    />
  );
};

export default Logo;
