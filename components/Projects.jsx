import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Rental from '../public/assets/Projects/Rental management.jpg';
import SMS from '../public/assets/projects/SMS.jpg'
import Webservice from '../public/assets/projects/Webservices.jpg'
import Website from '../public/assets/projects/Website.jpg'
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
            title='Vehicle Rental Management System'
            backgroundImg={Rental}
            projectUrl='/crypto'
            tech='.NET'

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