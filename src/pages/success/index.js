import React from 'react';
import sucess from '../../assets/Images/sucess.png';
export const Success = () => {
  return (
    <div className="i-main flex w-full justify-center z-10 mb-16 grow items-center inlined">
      <div
        class="icon-wrapper thank-you-gradient mx-auto  mt-48 flex flex-col items-center justify-center"
        data-v-f1b7ed20=""
      >
        <img src={sucess}></img>
        <h1 className="mt-8 font-bold text-4xl text-black text-center">
          Thank you for completing this form
        </h1>
        <h2 className="mt-4 font-normal text-2xl text-slate-500">
          Someone will reach out to you shortly
        </h2>
        <svg class="icon w-16 h-20" aria-hidden="true" data-v-f1b7ed20="">
          <use href="#i-icons-like"></use>
        </svg>
      </div>
    </div>
  );
};
