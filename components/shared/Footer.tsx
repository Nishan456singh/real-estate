import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          {/* <Image src='/assets/images/logo.png'
          alt="logo"
          width={128}
          height={32} 
          className="rounded-full"
          /> */}

          <h3 className="text-white text-md font-medium">Aura</h3>
          <p className="mb-4 text-sm sm:text-base">
            I wanted to take a moment to share my personal experience with you. Having built and successfully operated my own trucking business, I understand the challenges, the highs, and the lows that come with this dynamic industry.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="text-sm sm:text-base">
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/career"
                className="hover:text-white transition-colors duration-300"
              >
                Career
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              {/* <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Services
              </a> */}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-sm sm:text-base">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>        
            </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          {/* <h3 className="text-white text-md font-medium">OFFICE</h3>
          <p>Canada</p> */}
          <p className="text-sm sm:text-base">Email: info@aura24.online</p>
          <p className="text-sm sm:text-base">Phone: +1-778-823-0751</p>
        </div>
      </div>
      <p className="text-center text-md pt-8">© 2024 Aura. All rights reserved.</p>
      <p className="text-center text-xs pt-2">
        © Design & Developed By
        <a href="https://nishansingh.pro" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-800">
          {""} Nishan Singh
        </a>
      </p>
    </footer>
  )
}

export default Footer