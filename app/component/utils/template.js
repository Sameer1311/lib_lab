"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingScreen({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false); // controls fade visibility

  useEffect(() => {
    setLoading(true);
    setVisible(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => (prev < 95 ? prev + 1 : prev));
    }, 15);

    const complete = setTimeout(() => {
      setProgress(100);
      clearInterval(interval);
      setTimeout(() => {
        setVisible(false); // fades out
        setTimeout(() => {
          setLoading(false); // remove from DOM
          setProgress(0);
        }, 300); // matches opacity transition
      }, 400);
    }, 1000); // simulate 1s duration

    return () => {
      clearTimeout(complete);
      clearInterval(interval);
    };
  }, [pathname]);

  return (
    <div>
      {loading && (
        <div
          className={`
            fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-[9999]
            bg-black text-white transition-opacity duration-500 ease-in-out
            ${visible ? "opacity-100" : "opacity-0"}
          `}
        >
          <div className="text-4xl font-bold mb-4 animate-pulse">Redirecting...</div>
          <div className="text-2xl">{progress}%</div>
          <div className="w-64 h-2 bg-gray-700 rounded mt-4 overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      <div className={loading ? 'blur-sm pointer-events-none' : ''}>
        {children}
      </div>
    </div>
  );
}
