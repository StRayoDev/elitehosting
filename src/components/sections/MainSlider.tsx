import { useState, useEffect } from 'react';

import { hostingPlansMap } from '../../utils/consts/hostings';

export function MainSlider() {
  const [currentImg, setCurrentImg] = useState(1);
  const TOTAL_IMG = 6;

  const handlePrev = () => {
    setCurrentImg(currentImg === 1 ? TOTAL_IMG : currentImg - 1);
  };

  const handleNext = () => {
    setCurrentImg(currentImg === TOTAL_IMG ? 1 : currentImg + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImg]);

  return (
    <>
      <button onClick={handlePrev} className='absolute text-6xl text-white top-1/2 left-10 z-10'>⟨</button>
      <button onClick={handleNext} className='absolute text-6xl text-white top-1/2 right-10 z-10'>⟩</button>
      <section className='flex h-screen w-full relative -z-10'>
        <article className='absolute text-white text-left text-pretty w-[550px] top-1/4 left-[10%]'>
          <h1 className='text-5xl font-black'>
            { currentImg === 1 ? hostingPlansMap.mcHosting.title : currentImg === 2 ? hostingPlansMap.webHosting.title : currentImg === 3 ? hostingPlansMap.dsHosting.title : currentImg === 4 ? hostingPlansMap.dtHosting.title : currentImg === 5 ? hostingPlansMap.vpsHosting.title : hostingPlansMap.gameHosting.title}
          </h1>
          <p className='text-3xl '>
          { currentImg === 1 ? hostingPlansMap.mcHosting.description : currentImg === 2 ? hostingPlansMap.webHosting.description : currentImg === 3 ? hostingPlansMap.dsHosting.description : currentImg === 4 ? hostingPlansMap.dtHosting.description : currentImg === 5 ? hostingPlansMap.vpsHosting.description : hostingPlansMap.gameHosting.description}
          </p>
          <a 
            className='text-2xl p-4 bg-yellow-500 rounded-md mt-4 inline-block hover:bg-yellow-600'
            href={
              currentImg === 1 ? hostingPlansMap.mcHosting.anchor : currentImg === 2 ? hostingPlansMap.webHosting.anchor : currentImg === 3 ? hostingPlansMap.dsHosting.anchor : currentImg === 4 ? hostingPlansMap.dtHosting.anchor : currentImg === 5 ? hostingPlansMap.vpsHosting.anchor : hostingPlansMap.gameHosting.anchor
          }
          >
            Ver planes disponibles →
          </a>
        </article>
        <img src={`/slider/Slider${currentImg}.webp`} alt="Main Slider" width="100%" height="100%"/> 
      </section>
    </>
  );
}