import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#080b37]">
      <div className="py-5 px-6">
        <div className="flex justify-center">
          <p className="text-[#39f4ed] font-bold text-2xl md:text-4xl py-3">
            Md. Mahadi Hasan
          </p>
        </div>
        <div className="mt-2 flex justify-center space-x-4">
          <Link
            to="/"
            className="text-gray-300 hover:text-gray-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="https://github.com/mahadi61"
            target="_blank"
            className="text-gray-300 hover:text-gray-400 transition-colors duration-300"
          >
            GitHub
          </Link>
          <Link
            to="https://www.linkedin.com/in/mahadihasan61/"
            target="_blank"
            className="text-gray-300 hover:text-gray-400 transition-colors duration-300"
          >
            LinkedIn
          </Link>
        </div>
        <div className="flex justify-center">
          <p className="text-gray-300">
            &copy; 2023 Mahadi Hasan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
