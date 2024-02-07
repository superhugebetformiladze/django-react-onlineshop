import React from 'react';

interface BlockProps {
  children: React.ReactNode;
  backgroundImage: string;
  textColor: string;
  parallaxSpeed: number;
  scrollPosition: number;
}

const ExampleComponent: React.FC<BlockProps> = ({
  children,
  backgroundImage,
  textColor,
  parallaxSpeed,
  scrollPosition,
}) => {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    color: textColor,
    transform: `translateY(${scrollPosition * parallaxSpeed}px)`,
  };

  return (
    <div className="h-screen flex justify-center items-center" style={styles}>
      <div className="text-center">{children}</div>
    </div>
  );
};

export default ExampleComponent;
