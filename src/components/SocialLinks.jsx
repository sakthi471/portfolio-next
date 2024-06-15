import React from "react";
import { Github, Linkedin,Mail,Twitter} from 'lucide-react';


const SocilaLinks = () => {




    const SocialLink=[
        {
            id:1,
            child:(
                <>
                Linkedian <Linkedin/>
               </>
            ),
            href:"https://www.linkedin.com/in/sakthi-m-79a98a227/",
            style:"rounded-tr-md"
            
        },
        {
            id:2,
            child:(
                <>
                Github < Github/>
               </>
            ),
            href:"https://github.com/sakthi471",
            
        }
        ,
        {
            id:3,
            child:(
                <>
               Mail <Mail/>
               </>
            ),
            href:"mailto:sakthim61797@gmail.com",
            
        },
        {
            id:4,
            child:(
                <>
                Twitter <Twitter/>
               </>
            ),
            href:"public/model resume.pdf",
            style:"rounded-br-md",
            
        }
    ]
  return (
    <div className="hidden  lg:flex flex-col top-[35%] left-0 fixed z-10 ">
      <ul>
        { SocialLink.map(({id,child,href,style})=>(
            (
                <li key={id} className={
                    `bg-gray-500 flex justify-between items-center w-40 h-11  px-4  ml-[-110px] hover:rounded-md duration-300 hover:ml-[-10px] ${style}`
                }>
                <a href={href}  target="_blank"  rel="noreferrer" className="text-white flex w-full justify-between items-center">
                  {child}
                </a>
              </li>
            )
        ))
        }
       
      </ul>
    </div>
  );
};

export default SocilaLinks;