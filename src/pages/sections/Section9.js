import React from "react";
import { BsInstagram, BsLinkedin, BsTelephone } from "react-icons/bs";
import { SiLinktree } from "react-icons/si";
import { TbBrandLinktree } from "react-icons/tb";
import { SiGmail } from "react-icons/si";

// Contact Us

const Section9 = () => {
  return (
    <React.Fragment>
      {}
      <section
        id="section9"
        className="w-screen bg-black px-[calc(100vw/12)] py-16 font-poppins"
      >
        <h1 className="text-5xl text-white font-bold pb-6">Contact Us</h1>
        <div className="flex flex-col lg:flex-row gap-8 flex-wrap text-white mt-8">
          <div className="space-y-6 lg:w-56 lg:mr-12">
           
            <button
              className="flex items-center space-x-4"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/cea_ici_psgtech/",
                  "_blank"
                )
              }
            >
              <BsInstagram size={24} className="text-white" />
              <p className="text-lg"></p>
              Instagram
            </button>
            <button
              className="flex items-center space-x-4"
              onClick={() => window.open("mailto:cea.civil@psgtech.ac.in", "_blank")}
            >
              <SiGmail size={24} className="text-white" />
              <p className="text-lg"></p>
              Gmail
            </button>
            
            {}
          </div>
          <div className="flex-1 flex flex-col lg:flex-wrap gap-8 lg:gap-6 lg:gap-y-12 lg:flex-row items-center ">
            <div className="w-full lg:w-56">
              <h5 className="text-xs tracking-widest">Secretaries</h5>
              <ContactItem name="Ellakiyaa A" phone="+91 7598436113 " isPresent={true} />
              <ContactItem name="Kaveiya Priya S" phone="+91 9345773847" isPresent={true} />
            </div>
            <div className="w-full lg:w-56 whitespace-nowrap">
              <h5 className="text-xs tracking-widest">Developers</h5>
              <ContactItem name="Kavvya Subramani" />
              <ContactItem name="Mithilesh EN" />
              <ContactItem name="Elamathi M" />
              <ContactItem name="Kishoreadhith" />
              <ContactItem name="Navaneetha Krishnan K S" />
            </div>
            
            
            


          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

const ContactItem = ({ name, phone, className = ""  , isPresent}) => {
  return (
    <div className={`${className}`}>
      <h4 className="text-lg mt-2 font-semibold">{name}</h4>
      {isPresent ? (<>
        <button
        className="flex items-center space-x-4 mt-2"
        onClick={() => window.open(`tel:${phone}`)}
      >
     
        <BsTelephone className="text-white" />
        <p className="text-sm">{phone}</p>
      </button>
      </>) : <></>}
     
    </div>
  );
};

export default Section9;
