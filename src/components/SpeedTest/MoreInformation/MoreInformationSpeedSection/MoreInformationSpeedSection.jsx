export default function MoreInformationSpeedSection() {
  return (
    <div className="flex flex-col gap-[0px] items-center lg:items-end w-full h-full">
      <div className="flex flex-col items-end w-full">
        <div className="flex flex-col lg:flex-row">
          <span className="text-[80px] lg:text-[160px]">175.21</span>
        <div className="lg:hidden flex justify-center items-center"><span className="uppercase tracking-normal text-[16px]">Download</span></div>
          <div className="flex flex-row-reverse lg:flex-col justify-center items-center gap-[36px]">
            <div className="max-w-[79.07px] max-h-[26.24px] h-full w-full"><img src="/Mbps.png" alt="MBPS" className="object-contain object-center" /></div>
            <div className="max-w-[42.86px] max-h-[50px] h-full w-full"><img src="/DownloadIcon.svg" alt="Download Speed" className="object-contain object-center" /></div>
          </div>
        </div>
        <div className="hidden lg:flex pb-[37px] justify-end items-end w-full"><span className="uppercase tracking-normal text-[16px]">Download</span></div>
      </div>

      <div className="flex flex-col items-end w-full">
        <div className="flex flex-col lg:flex-row">
          <span className="text-[80px] lg:text-[160px]">175.21</span>
        <div className="lg:hidden flex justify-center items-center"><span className="uppercase tracking-normal text-[16px]">Upload</span></div>
          <div className="flex flex-row-reverse lg:flex-col justify-center items-center gap-[36px]">
            <div className="max-w-[79.07px] max-h-[26.24px] h-full w-full"><img src="/Mbps.png" alt="MBPS" className="object-contain object-center" /></div>
            <div className="max-w-[42.86px] max-h-[50px] h-full w-full"><img src="/UploadIcon.svg" alt="Upload Speed" className="rotate-180 object-contain object-center" /></div>
          </div>
        </div>
        <div className="hidden lg:flex pb-[37px] justify-end items-end w-full"><span className="uppercase tracking-normal text-[16px]">Upload</span></div>
      </div>
    </div>
  );
}
