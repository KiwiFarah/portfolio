import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";




const Main = () => {
 
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState("#ecf0f3");
    const [linkColor, setLinkColor] = useState("#1f2937");
  
    const router = useRouter();
  
  
  
    const handleNav = () => {
      setNav(!nav);
    };
  
  
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 ">
            LET'S BUILD SOMETHING EPIC TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            {" "}
            Hello, I'm <span className="text-[#5651e5]">Farah</span>
          </h1>
          <h1 className="py-2 text-gray-700"> A Full-Stack Engineer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a full stack developer specializing in building exceptional
            digital experiences curated just for you! My specialties up to now
            include quick learning of new skills and programming languages,
            website design and optimization, responsive web design and the
            execution of full software development life cycles.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/farah-warnakulasuriya/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://www.github.com.KiwiFarah/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div
                onClick={() => setNav(!nav)}
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <AiOutlineMail />
              </div>
            </Link>
            <a
              href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ab6cf703-6bf3-4158-a87c-206ac7d478af/FarahWarnakulasuriya_CV_1.0.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221123T104750Z&X-Amz-Expires=86400&X-Amz-Signature=ace931c9062d1af4a6049f3479ec93336a589a32fcc0fd637383d8d09502b951&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22FarahWarnakulasuriya_CV_1.0.pdf%22&x-id=GetObject"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
