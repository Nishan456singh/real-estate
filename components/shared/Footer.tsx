import { socialLinks } from "@/constants";
import Link from "next/link"

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <div className='flex flex-row gap-4 ml-7 mt-3'>
          {socialLinks.map((link) => (
            <Link key={link.name} href={link.link} >
              <img
                src={link.iconUrl.src}
                alt={link.name}
                className='w-10 h-10 hover:scale-110 transition-all'
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <p>
          © 2024 <strong>Nishan Singh</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer