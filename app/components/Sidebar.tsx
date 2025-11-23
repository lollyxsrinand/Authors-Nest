"use client";
import React from "react";



function Sidebar({ branches, mainFolders, isOpen, toggleSidebar }: any) {
  return (
    <aside
      className={`${isOpen ? "w-64" : "w-15"} bg-gray-900 border-r border-gray-700 h-screen p-4 overflow-y-auto fixed transition-width duration-300`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-indigo-400">
          {isOpen ? "Branches" : ""}
        </h2>

        <button className="text-indigo-400" onClick={toggleSidebar}>
          {isOpen ? "⮜" : "⮞"}
        </button>
      </div>

      <ul>
        {branches.length === 0 && (
          <li className="text-gray-600">
            {isOpen ? "No branches found" : ""}
          </li>
        )}

        {branches.map((branch: { id: string; name: string }) => (
          <li
            key={branch.id}
            className="mb-2 cursor-pointer text-gray-300 hover:text-indigo-500 truncate"
            title={branch.name}
          >
            {isOpen ? branch.name : branch.name[0]}
          </li>
        ))}
      </ul>

      {isOpen && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-3 text-indigo-400">
            Main Folders
          </h2>

          <ul>
            {mainFolders.length === 0 && (
              <li className="text-gray-600">No folders found</li>
            )}

            {mainFolders.map((folder: string, index: number) => (
              <li
                key={index}
                className="mb-2 cursor-pointer text-gray-300 hover:text-indigo-500 truncate"
              >
                {folder}
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
