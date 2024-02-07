import React, { useEffect, useState } from 'react';
import ExampleComponent from '../components/ExampleComponent';

const ExamplePage: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <ExampleComponent
        backgroundImage="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
        textColor="text-white"
        parallaxSpeed={0.5}
        scrollPosition={scrollPosition}
      >
        <h1 className="text-4xl font-bold">Первый блок</h1>
        <p>Содержимое первого блока</p>
      </ExampleComponent>
      <ExampleComponent
        backgroundImage="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
        textColor="text-black"
        parallaxSpeed={0.8}
        scrollPosition={scrollPosition}
      >
        <h1 className="text-4xl font-bold">Второй блок</h1>
        <p>Содержимое второго блока</p>
      </ExampleComponent>
      <ExampleComponent
        backgroundImage="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
        textColor="text-white"
        parallaxSpeed={1.2}
        scrollPosition={scrollPosition}
      >
        <h1 className="text-4xl font-bold">Третий блок</h1>
        <p>Содержимое третьего блока</p>
      </ExampleComponent>
    </div>
  );
};

export default ExamplePage;
