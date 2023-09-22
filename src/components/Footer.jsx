import { AiFillInstagram, AiOutlineTwitter, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import '../styles';

function Footer() {
  const iconsTab = [
    { icon: <AiFillInstagram />, link: "https://www.instagram.com/ani.__sh/"},
    { icon: <AiOutlineTwitter /> , link: "https://twitter.com/Anish9701" },
    { icon: <AiFillLinkedin /> , link: "https://www.linkedin.com/in/anish-ganapathi-086049220/"},
    { icon: <AiOutlineGithub /> , link: "https://github.com/anishganapathi"},
  ];
  return (
    <>
      <footer className="bg-black footer-main" style={{
        paddingTop: "15px",
        paddingBottom: "10px",
      }}>
        <div className="container mx-auto py-1">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 pl-4 py-3 gap-8 ">
              {/* <img
                src={"https://i.ibb.co/sW9xhNT/A-logo.png"}
                alt="footer_logo"
                className="w-[8rem] flex justify-center items-center"
              /> */}
              
              {/* <p className="text-[15px] font-medium text-[#9ba2c3]">
                 <b>BE</b> Gentle with the <b>YOU</b>ng....!
              </p> */}
              {/* socials */}
              
              
              <p className="text-[16px] font-medium text-[#9ba2c3]">
                Privacy Policy | © {new Date().getFullYear()}  {" "}
                {/* Design by{" "} */}
                
              </p>
              
            </div>
               
             <div>
              
              <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.anishganapathi.com/"
                  className="text-[16px] font-bold hover:text-[#ff0366] cursor-pointer text-[#9ba2c3] footer-name-text"
                  style={{lineHeight:"2.8",paddingRight: "250px",}}
                >
                  AnishGanapathi
                </a>
             </div>
            
            <div className="flex flex-col gap-9 relative">
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start" style={{paddingRight: "30px",}}>
  {iconsTab.map(({ icon, link }, index) => {
    return (
      <a
        key={index}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div
          className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white"
          style={{ transition: "all 0.3s" }}
        >
          {icon}
        </div>
      </a>
    );
  })}
</div>
              {/* <p className="text-[22px] font-bold footer-main">Fields of Fascination</p>

              <span className="top-[33px] absolute w-[12.5rem] h-[3.5px] bg-[#ff0366]" />

              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#9ba2c3] font-medium hover:font-bold">
                React
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#9ba2c3] font-medium hover:font-bold">
                Node
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#9ba2c3] font-medium hover:font-bold">
                Flutter
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#9ba2c3] font-medium hover:font-bold">
               Tensorflow
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#9ba2c3] font-medium hover:font-bold">
                Linux
              </p> */}
            </div>

           
            {/* <span /> */}
            
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;