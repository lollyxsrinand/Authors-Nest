"use client";

import React from 'react';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import Sidebar from '@/app/components/Sidebar';
import { useStories } from '@/app/hooks/useStories';
import { useBranches } from '@/app/hooks/useBranches';

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const { user, loading: loadingUser } = useCurrentUser();
  const displayName = user?.displayName || "user";

  const { stories, loading: loadingStories, error: errorStories } = useStories();
  const { branches, loading: loadingBranches, error: errorBranches } = useBranches();

  // Static main folders as backend route for folders is not found
  const mainFolders = ["Folder 1", "Folder 2", "Folder 3"];

  return (
    <div className="flex min-h-screen font-geistSans bg-gradient-to-b from-gray-900 via-black to-black text-gray-200">

      <Sidebar branches={branches} mainFolders={mainFolders} isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <main className={`flex-grow px-6 py-10 max-w-6xl flex flex-col transition-all duration-300 ${
        sidebarOpen ? "ml-64" : "ml-16"
      }`}>
        <header className=" max-w-2xl mb-10 ">
          <h1 className="text-4xl text-left font-extrabold tracking-tight text-white drop-shadow-lg">
            {loadingUser ? "Loading..." : `Welcome, ${displayName}!`}
          </h1>
          <button className="flex items-center rounded-lg  bg-indigo-200 text-indigo-900 px-4 py-2 mt-4 hover:bg-indigo-300 transition">
            create
          </button>
          <div className="font-semibold text-xl text-left mb-6 mt-15 ml-5">
            Your Stories
          </div>
        </header>
        {/*
        <section className="mb-8 flex justify-center items-center text-center text-2xl">
        {loadingStories && <p className="text-center text-gray-400">Loading stories...</p>}
        {errorStories && <p className="text-center text-red-500">Error: {errorStories}</p>}
        </section>
        */}
        <div className="bg-gray-300 rounded-2xl p-6 mb-6 min-h-[500px] w-full flex gap-6 justify-start">
        
          <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full text-amber-100">
            {stories.length === 0 ? (
              <p className="text-center text-2xl col-span-full text-white ">No stories found...</p>
            ) : (
              stories.map((story) => (
                <div
                  key={story.id}
                  className="group bg-gray-800 rounded-2xl p-8 shadow-xl shadow-black/60 hover:shadow-indigo-500 transition-shadow duration-300 border border-transparent hover:border-indigo-400 hover:-translate-y-1 cursor-pointer"
                  title={story.description}>
                  <h2 className="text-2xl font-semibold text-indigo-400 mb-2 truncate">{story.title}</h2>
                  <p className="text-gray-300 leading-relaxed line-clamp-3">
                    {story.description}
                  </p>
                </div>
              ))
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Home;
