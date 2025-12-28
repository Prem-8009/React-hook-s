import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";

const Gallery = () => {
  const { photos, loading, error } = useContext(AppContext);

  const vibrantColors = [
    'bg-[#a3e635]', 'bg-[#7e22ce]', 'bg-[#22c55e]', 'bg-[#db2777]',
    'bg-[#ec4899]', 'bg-[#2563eb]', 'bg-[#bbf7d0]', 'bg-[#581c87]',
  ];

  if (loading) return (
    <div className="flex justify-center items-center h-64 text-white">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-white mr-4"></div>
      Loading 80 Photos...
    </div>
  );

  if (error) return (
    <div className="text-red-500 text-center p-10 border border-red-500 m-5">
      Error: {error}
    </div>
  );

  return (
    <div className="flex justify-center bg-black p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-[1400px]">
        {photos.map((photo, index) => (
          <div key={photo.id} className="border border-white/30 p-4 flex flex-col items-center bg-black">
            <div className={`w-full aspect-square ${vibrantColors[index % vibrantColors.length]} flex items-center justify-center mb-6`}>
              <span className="text-gray-800/40 font-bold text-2xl">600 x {photo.id}</span>
            </div>
            <p className="text-white text-[11px] text-center leading-tight lowercase px-2">
              {photo.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <header className="py-12 text-center">
        <h1 className="text-white text-5xl font-extrabold tracking-tighter">Photos </h1>
      </header>
      <Routes>
        <Route path="/" element={<Gallery />} />
      </Routes>
    </div>
  );
}