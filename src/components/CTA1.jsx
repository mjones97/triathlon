import React from 'react';
import Button from './Button';

const CTA1 = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-16 py-14 mx-6 bg-blue-800 rounded-xl text-center">
      <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl pb-4 sm:pb-5 text-white max-w-[32rem]">
        Ready to train?
      </h1>
      <p className="font-normal text-lg sm:text-xl md:text-2xl text-white pb-8 max-w-[32rem]">
        First week is on us
      </p>
      <div className="flex flex-col w-1/2">
        <Button>Start Trial</Button>
      </div>
    </section>
  );
};

export default CTA1;
