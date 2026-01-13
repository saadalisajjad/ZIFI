import Section from "../../common/Section/Section";

export default function Navbar({ displayLayout, className }) {
  return (
    <Section className={`z-999999 ${className}`}>
      <div className="flex flex-row justify-between mr-[18.03px] lg:mx-[50px] mt-[13px] lg:mt-[40px]">
        <div className="mx-auto pl-[40px] lg:pl-0 lg:mx-0">
          <img src="/zifi.png" alt="Logo" className="navbar-logo" />
        </div>

        <div className="hidden lg:flex items-center text-white uppercase tracking-[0.4em] text-[12px] font-light">
          Your Internet Speed
        </div>

        <div className="navbar-flag-wrapper">
          <img src="/flag.png" alt="Flag" className="navbar-flag" />
        </div>
      </div>
      {!displayLayout && (
        <div className="lg:hidden flex justify-center mx-auto mt-[50px] text-white uppercase tracking-[0.35em] text-[11px] font-light">
          Your Internet Speed
        </div>
      )}
    </Section>
  );
}
