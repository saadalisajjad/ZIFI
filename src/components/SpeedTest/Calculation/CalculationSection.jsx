import { useEffect, useState } from "react";
import Section from "../../common/Section/Section";

export default function CalculationSection({ showMoreInfo, setShowMoreInfo }) {
  const [calculate, setCalculate] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [value, setValue] = useState(0);
  const [target, setTarget] = useState(0);
  const [showButton, setShowButton] = useState(false); // new state for fade-in

  function getRandomValue() {
    return Math.floor(Math.random() * 201);
  }

  useEffect(() => {
    if (!calculate) return;

    const randomTarget = getRandomValue();
    setTarget(randomTarget);
    setValue(0);
    setShowButton(false); // hide button during calculation

    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setValue(current);

      if (current >= randomTarget) {
        clearInterval(interval);
        setCalculate(false);
        setHasCalculated(true);

        // Delay the button fade-in slightly
        setTimeout(() => {
          setShowButton(true);
        }, 100); // 100ms delay for smoother transition
      }
    }, 20);

    return () => clearInterval(interval);
  }, [calculate]);

  return (
    <Section className="flex justify-center lg:justify-end items-center !h-[85vh] w-full">
      <div className="lg:mr-[50px] w-full">
        <div className="flex flex-col lg:flex-row items-center justify-end w-full">
          <div className="flex flex-row justify-center lg:justify-end w-full">
            <span className="text-[152px] lg:text-[700px] leading-[152px] lg:leading-[700px]">
              {value}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center h-full w-full lg:w-auto">
            <div className="flex">
              <img
                src="/black/MBPS.svg"
                alt="Megabits Per Second"
                width="64"
                height="64"
              />
            </div>

            {/* Mobile Button */}
            <div className="flex flex-row justify-end lg:hidden w-full my-[64px] 
            ">
              <button
                className={`!bg-transparent uppercase w-full transition-opacity duration-700 
                  text-center 
    !uppercase
    !text-[#8f8f8f]
    !font-light
    !tracking-[0.23em]
    !leading-none
    !text-[17px]
    ${showButton && !showMoreInfo
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                  }`}
                onClick={() => setShowMoreInfo(true)}
              >
                more information
              </button>
            </div>

            {/* Go Button */}
            <div className="flex">
              <button
                className="!bg-transparent !p-0 !rounded-full lg:mt-12 "
                onClick={() => {
                  if (!calculate) setCalculate(true);
                  setHasCalculated(false);
                  setShowButton(false); // hide button during calculation
                }}
              >
                <img
                  src={calculate ? "/download.svg" : "/black/go.svg"}
                  alt="Go Button"
                  width="64"
                  height="64"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Button */}
        <div className="flex flex-row justify-end hidden lg:flex">
          <button
            className={`!bg-transparent uppercase transition-opacity duration-700  
    text-center lg:text-left
    lg:uppercase
    lg:text-[#8f8f8f]
    lg:font-light
    lg:tracking-[0.23em]
    lg:leading-none
    lg:text-[17px]"
    
    ${showButton && !showMoreInfo
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
              }`}
            onClick={() => setShowMoreInfo(true)}
          >
            more information
          </button>
        </div>
      </div>
    </Section>
  );
}
