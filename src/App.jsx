import React, { createContext, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import useFetch from "./useFetch";

export const AppContext = createContext();

const Gallery = () => {
  const { photos, loading, error } = useContext(AppContext);
  const vibrantColors = ['bg-[#a3e635]', 'bg-[#7e22ce]', 'bg-[#22c55e]', 'bg-[#db2777]', 'bg-[#ec4899]', 'bg-[#2563eb]', 'bg-[#bbf7d0]', 'bg-[#581c87]'];

  if (loading) return (
    <div className="flex items-center justify-center h-64 font-mono text-xs text-white">
      Loading...
    </div>
  );

  if (error) return (
    <div className="p-10 m-5 text-xs text-center text-red-500 border border-red-500">Error: {error}</div>
  );

  return (
    <div className="flex justify-center p-4 bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-[1400px]">
        {photos.map((photo, index) => (
          <div key={photo.id} className="flex flex-col items-center p-4 bg-black border border-white/10">
            <div className={`w-full aspect-square ${vibrantColors[index % vibrantColors.length]} flex items-center justify-center mb-4 overflow-hidden`}>
              {photo.images ? (
                <img src={photo.images[0]} alt={photo.title} className="object-cover w-full h-full" />
              ) : (
                <span className="text-xl font-bold text-gray-800/40">{photo.id}</span>
              )}
            </div>
            <p className="text-white text-[10px] text-center leading-tight uppercase px-2 truncate w-full">
              {photo.title}
            </p>
            <p className="text-lime-400 text-[10px] mt-1 font-bold">${photo.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


//dummy api link for user fetching
export default function App() {
  const { data: photos, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=80"
  );

  return (
    <AppContext.Provider value={{ photos: photos || [], loading, error }}>
      <div className="min-h-screen bg-black">
        <header className="sticky top-0 z-50 py-3 text-center bg-black border-b border-white/10">
          <h1 className="text-xl italic font-black tracking-widest text-white uppercase">
            Photos <span className="text-lime-400"></span>
          </h1>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </AppContext.Provider>
  );
}