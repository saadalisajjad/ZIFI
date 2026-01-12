import { useEffect } from "react";
import InfoBlock from "../../../common/InfoBlock/InfoBlock";

export default function MoreInformationAddressSection({ sections }) {
  useEffect(() => {
    console.table("section are ", sections);
  });

  return (
    <div className="flex flex-col gap-10 w-full">
      {sections?.map((section, index) => (
        <InfoBlock
          key={index}
          icon={section.icon}
          iconAlt={section.iconAlt}
          items={section.data}
          containerClassName="max-w[420px] lg:max-w-[620px]"
          iconClassName="w-[40px] h-[40px]"
          iconContainerClassName="w-[40px] mt-[2px] flex items-center"

          /* 🔴 EXACT LABEL STYLE (mobile fix added) */
          labelClassName="
            text-[12px] lg:text-[18px]
            text-[#7a7a7a]
            uppercase
            tracking-[0.2em] lg:tracking-[0.45em]
            font-light
            leading-[18px]
          "

          /* 🔴 EXACT VALUE STYLE (mobile fix added) */
          valueClassName="
            text-[12px] lg:text-[18px]
            text-white
            uppercase
            tracking-[0.15em] lg:tracking-[0.32em]
            font-medium
            text-left lg:text-right
            leading-[22px]
          "
        />
      ))}
    </div>
  );
}
