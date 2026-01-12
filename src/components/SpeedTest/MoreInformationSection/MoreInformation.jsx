import React from "react";
import Section from "../../common/Section/Section";
import MoreInformationHeading from "../MoreInformation/MoreInformationHeading/MoreInformationHeading";
import MoreInformationCloseButton from "../MoreInformation/MoreInformationCloseButton/MoreInformationCloseButton";
import MoreInformationAddressSection from "../MoreInformation/MoreInformationAddressSection/MoreInformationAddressSection";
import MoreInformationSpeedSection from "../MoreInformation/MoreInformationSpeedSection/MoreInformationSpeedSection";

const MoreInformation = ({ onClose, speedData = {}, moreInformationData }) => {
  return (
    <Section className="px-[18px] lg:px-0 pb-[28px] lg:pb-0 pt-[50px] lg:pt-0 lg:mx-0">
      <MoreInformationHeading />
      <div className="absolute top-[18px] lg:top-0 left-[19px] lg:left-0 lg:relative">
        <MoreInformationCloseButton onClose={onClose} />
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-y-[49px] w-full items-center justify-center">
        <MoreInformationAddressSection sections={moreInformationData} />
        <MoreInformationSpeedSection />
      </div>
    </Section>
  );
};

export default MoreInformation;
