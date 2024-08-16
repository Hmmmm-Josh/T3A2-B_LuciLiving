import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className=''>
      <div className='flex flex-col gap-6 lg:p-28 p-3 max-w-6xl mx-auto'>
        <h1 className='tex-3xl font-bold lg:text-6xl'>Welcome to my Blog!</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>Here you will find a variety of posts and houses that you can find when you're dammed to HELL!</p>
        <Link to="/posts" className="text-xs sm:text-sm text-teal-500 font-bold hover:underline">
        View all Posts
      </Link>
      </div>
    </div>
  );
};
