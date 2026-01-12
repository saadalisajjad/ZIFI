export default function MoreInformationCloseButton({onClose}) {
  return (
    <div className="">
      <button className="!bg-transparent !p-0" onClick={onClose} >
        <img
          src="/backbutton.svg"
          alt="back button"
          height="12px"
          width="12px"
          className="p-0"
        />
      </button>
    </div>
  );
}
