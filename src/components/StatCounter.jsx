import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

export default function StatCounter({ end, label }) {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
        {startCount ? <CountUp end={end} duration={2} /> : 0}+
      </h3>
      <p className="text-lg sm:text-xl lg:text-2xl mt-1 sm:mt-2">{label}</p>
    </div>
  );
}
