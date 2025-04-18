import React from 'react';
import ExperienceTopLeft from './ExperienceTopLeft';
import ExperienceTopMiddle from './ExperienceTopMiddle';
import ExperienceTopRight from './ExperienceTopRight';

const ExperienceTop = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 px-4'>
      <ExperienceTopLeft />
      <ExperienceTopMiddle />
      <ExperienceTopRight />
    </div>
  );
};

export default ExperienceTop;