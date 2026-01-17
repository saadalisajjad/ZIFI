import Section from "../../common/Section/Section";

export default function Navbar({ displayLayout, className }) {
  return (
    <Section className={`z-999999 ${className}`}>
      <div className="flex flex-row justify-between mr-[18.03px] lg:mx-[50px] mt-[13px] lg:mt-[40px]">
        <div className="mx-auto pl-[40px] lg:pl-0 lg:mx-0">
          <img src={displayLayout ? '/zifi.png' : "/black/zifi.svg"} alt="Logo" className="lg:w-full w-[48.49px] lg:h-full h-[25px] object-contain object-center" />
        </div>

        <div className={`hidden lg:flex items-center ${displayLayout ? 'text-white' :'text-black'} uppercase tracking-[0.4em] text-[12px] font-light`}>
          Your Internet Speed
        </div>

        <div className="">
          <img src="/flag.png" alt="Flag" className="w-[25px] h-[25px] lg:w-full lg:h-full object-contain object-center" />
        </div>
      </div>
      {!displayLayout && (
        <div className="lg:hidden flex justify-center mx-auto mt-[50px] text-black uppercase tracking-[0.35em] text-[11px] font-light">
          Your Internet Speed
        </div>
      )}
    </Section>
  );
}
