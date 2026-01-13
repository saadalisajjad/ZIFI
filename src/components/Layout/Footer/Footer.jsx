import Section from "../../common/Section/Section";

export default function Footer({className}) {
  return (
    <Section className={`flex flex-row justify-between mb-[24px] lg:mb-[33px] ${className}`}>
      <div className="lg:ml-[38px] w-full hidden lg:flex items-center">
        <img
          src="/logo.png"
          alt="logo"
          className="max-w-[59px] lg:max-w-[148px] w-full max-h-[20px] lg:max-h-[36px] h-full"
        />
      </div>

      <div className="flex flex-row justify-between lg:justify-end items-center w-full gap-[50px] mx-[18px] lg:mx-0 lg:mr-[50px]">
        <img
          src="/ztr.png"
          alt="ztr"
          width="65.11px"
          height="35.03"
          className="max-w-[58.87px] lg:max-w-[103.11px] w-full max-h-[20px] lg:max-h-[36px] h-full"
        />
        <img
          src="/logo.png"
          alt="logo"
          className="max-w-[59px] lg:max-w-[148px] w-full flex lg:hidden max-h-[20px] lg:max-h-[36px] h-full mr-[15px] "
        />

        <img
          src="/zimo.png"
          alt="Zimo logo"
          width="70.91"
          height="40.03"
          className="max-w-[44.9px] lg:max-w-[78.64px] w-full max-h-[20px] lg:max-h-[36px] h-full"
        />
      </div>
    </Section>
  );
}
