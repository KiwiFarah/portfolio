import React from "react";
import AboutImg from "../public/assets/about.jpg";
import Image from "next/image";

function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            // I am not your average developer
          </p>
          <p className="py-2 text-gray-600">
            There I was, with my most recent role as an academic coach, which
            made sense with my education in Communication and Lit. I had finally
            hit it off, But I started wondering, whose dream was it? I yearned for
            something more, yearned to learn more.
          </p>
          <p className="py-2 text-gray-600">
            That’s when I made a revelation. The spark I was missing was
            suddenly aflame when I started playing around with my first actual
            python turtle script. Since then I’ve been a human addicted, and
            found out that web development called to every aspect of my
            passions; a place to put forward creativity and problem solving - to
            make and pull apart my code. (Not in the main Git branch of course)
          </p>
          
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl " alt="/" />
        </div>
      </div>
    </div>
  );
}

export default About;
