import React from 'react';
import ExperienceInfo from './ExperienceInfo';

const ExperienceTopLeft = () => {
  return (
    <div className='w-full lg:w-[300px] flex flex-col gap-6 px-4'>
      <p className='text-orange-500 font-bold uppercase text-3xl font-special text-center'>Since 2023</p>
      <div className='flex justify-center items-center gap-4'>
        <ExperienceInfo number="2" text="Years" />
        <p className='font-bold text-6xl text-amber-900'></p>
        <ExperienceInfo number="10" text="Websites" />
      </div>
      <p className='text-center text-white'>
        With 2 years of experience building dynamic and user friendly user applications.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;