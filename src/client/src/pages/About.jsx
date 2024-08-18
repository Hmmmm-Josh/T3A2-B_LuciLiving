import react from 'react';
import { Link } from "react-router-dom";

export default function about() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className='flex flex-col gap-6 lg:p-28 p-3 max-w-6xl mx-auto'>
        <div className="">
        <h1 to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-bold dark:text-white'>
      <span className='px-2 py-1 bg-gradient-to-r from-red-700 via-orange-500
       to-yellow-300 rounded-lg text-white'>
        LuciLiving
      </span>
      Blog
        </h1>
      <h1 className="flex p-4 text-3xl">
        About Us:
      </h1>
      <h2>
        We are a real-estate company formed in Hell! To suit your needs in the afterlife.
      </h2>
      <h5 className="flex text-xs">(because we all know most people will end up here)
        
      </h5>
        </div>
      </div>
    </div>
  );
};
