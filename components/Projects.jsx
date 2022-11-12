import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Weather from '../public/assets/Projects/weather-app.png';
import SMS from '../public/assets/Projects/SMS.jpg'
import Webservice from '../public/assets/Projects/Webservices.jpg'
import Website from '../public/assets/Projects/Website.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Student Management System'
            backgroundImg={SMS}
            projectUrl='/property'
            tech='MERN Stack'
          />
          <ProjectItem
            title='React Weather App'
            backgroundImg={Weather}
            projectUrl='/crypto'
            tech='React JS | OpenWeatherMap API'

          />
          <ProjectItem
            title='Web Service Provider Frontend'
            backgroundImg={Webservice}
            projectUrl='/netflix'
            tech='HTML | CSS | JS'

          />
          <ProjectItem
            title='Fully Responsive Front End Design '
            backgroundImg={Website}
            projectUrl='/twitch'
            tech='HTML | CSS | CDNJS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;