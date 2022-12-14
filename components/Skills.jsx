import React from 'react'
import Image from 'next/image';
import Html from '../public/assets/Skills/html.png';
import Css from '../public/assets/Skills/css.png';
import Javascript from '../public/assets/Skills/javascript.png';
import ReactImg from '../public/assets/Skills/react.png';
import Node from '../public/assets/Skills/node.png';
import Github from '../public/assets/Skills/github1.png';
import PHP from '../public/assets/Skills/php.png';
import Typescript from '../public/assets/Skills/TS.png'
import NextJS from '../public/assets/Skills/nextjs.png'
import NestJS from '../public/assets/Skills/nestjs.png'
import MUI from '../public/assets/Skills/mui.png'
import Redux from '../public/assets/Skills/redux.png'
import Prisma from '../public/assets/Skills/prisma.png'
import MySQL from '../public/assets/Skills/mysql.png'
import Sourcetree from '../public/assets/Skills/sourcetree.png'


function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
        Skills
      </p>
      <h2 className='py-4'>What I Can Do</h2>
      <div className='grid grid-cols-2 lg:grid-cols-5 gap-8'>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={Html} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>HTML</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={Css} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>CSS</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={Javascript} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>JavaScript</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={Typescript} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Typescript</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={PHP} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>PHP</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={MUI} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Material UI</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={ReactImg} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>ReactJS</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={Redux} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Redux</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={Node} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>NodeJS</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={NextJS} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>NextJS</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={NestJS} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>NestJS</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={Prisma} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Prisma</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={MySQL} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>MySQL</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={Sourcetree} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Sourcetree</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={Github} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Github</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Skills