import CalculationSection from "./Calculation/CalculationSection";
import MoreInformation from "./MoreInformationSection/MoreInformation";
import Modal from "../common/Modal/Modal";

export default function SpeedTest({ setIsModalOpen, isModalOpen }) {
  // const [showMoreInfo, setShowMoreInfo] = useState(false);

  const speedData = {
    download: "175.31",
    upload: "52.97",
  };

  const moreInformationData = [
    {
      icon: "/flag.png",
      iconAlt: "Location",
      data: [
        { label: "City", value: "London" },
        { label: "Country", value: "United Kingdom" },
      ],
    },
    {
      icon: "/profile.png",
      iconAlt: "Network",
      data: [
        { label: "Latitude", value: "51.514882" },
        { label: "Longitude", value: "-0.123563" },
        { label: "Internal IP", value: "10.0.0.186" },
        { label: "External IP", value: "82.41.174.63" },
        { label: "MAC Address", value: "5D:C3:07:7A:C4:88" },
      ],
    },
    {
      icon: "/wifi.png",
      iconAlt: "Wifi",
      data: [
        { label: "Provider", value: "Virgin Media" },
        { label: "Router Name", value: "Tp link" },
        { label: "Server", value: "london" },
        { label: "Ping", value: "12 ms" },
      ],
    },
    {
      icon: "",
      iconAlt: "",
      data: [
        { label: "DATE", value: "27/03/2025" },
        { label: "Time", value: "15:45" },
      ],
    },
  ];

  return (
    <>
      <CalculationSection
        showMoreInfo={isModalOpen}
        setShowMoreInfo={setIsModalOpen}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        displayLayout={true}
      >
        <div className="px-0 lg:px-[50px] w-full">
          <MoreInformation
            onClose={() => setIsModalOpen(false)}
            speedData={speedData}
            moreInformationData={moreInformationData}
          />
        </div>
      </Modal>
    </>
  );
}
