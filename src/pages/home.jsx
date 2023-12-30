import React, { useEffect, useState } from 'react';
import Headerx from '../components/headerx';
import '../styles/Index.css';
import TypeWriterEffect from 'react-typewriter-effect';
import { themeChange } from 'theme-change';
import ThemedButton from '../components/theme';

const Home = () => {

  return (
    <>
      <Headerx />

      <div className='flex flex-col items-center justify-center '>
        <div className='mt-5 flex items-center'>
          <TypeWriterEffect

            textStyle={{ fontFamily: 'Red Hat Display', fontSize: '32px' }}
            startDelay={100}
            cursorColor="black"
            text="Hi! Welcome to my Website."
            typeSpeed={100}

          />
        </div>

        <div className='prose  max-w-screen-md'>
          <p className='mt-10 text-xl '>
            I'm Chetan Verma, a full-stack web developer & UI designer working remotely around the world. I create websites, brand identities, packaging, and everything in-between. I'm passionate about building & designing delightful experiences with the combination of business, marketing and UI/UX design to make customers and users satisfied when theyre using products and services online.
          </p>
        </div>

        <div>
          <ul className="menu menu-horizontal bg-base-200 rounded-box mt-10">
            <li>
              <a href="https://www.linkedin.com/in/parth-singh-969b74290/" target='_blank' className="tooltip" data-tip="Linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
              </a>
            </li>
            <li>
              <a href='https://github.com/parthsingh' target='_blank' className="tooltip" data-tip="Github">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
            </li>
            <li>
              <a href='mailto:parthsingh16@outlook.com' target='_blank' className="tooltip" data-tip="Email">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" /></svg>
              </a>
            </li>
            <li>
              <a href='https://leetcode.com/parth119516/' target='_blank' className="tooltip" data-tip="Leetcode">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3.383l-.924-.383-7.297 17.617.924.383 7.297-17.617zm.287 3.617l6.153 4.825-6.173 5.175.678.737 7.055-5.912-7.048-5.578-.665.753zm-8.478 0l-6.249 4.825 6.003 5.175-.679.737-6.884-5.912 7.144-5.578.665.753z" /></svg>
              </a>
            </li>
          </ul>
        </div>

        <div className='mt-10'>
          <a href='/resumeNewgrad.pdf' target='_blank' className='btn btn-lg btn-neutral btn-active  '>Resume</a>
        </div>

        
      </div>

    </>
  );
};

export default Home;