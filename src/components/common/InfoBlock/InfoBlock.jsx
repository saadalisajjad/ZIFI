export default function InfoBlock({
  icon,
  iconAlt,
  items = [],
  iconClassName = "",
  containerClassName = "",
  rowClassName = "",
  labelClassName = "",
  valueClassName = "",
  iconContainerClassName = "",
}) {
  return (
    <div className={`flex items-start gap-6 ${containerClassName}`}>

      {/* Icon */}
      <div className={`flex flex-shrink-0 self-center ${iconContainerClassName}`}>
        {icon ? (
          <img src={icon} alt={iconAlt} className={iconClassName} />
        ) : (
          <div className={iconClassName}></div>
        )}
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-[10px] w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={`
              flex
              flex-col lg:flex-row
              gap-1 lg:gap-0
              justify-between
              items-start
              w-full
              ${rowClassName}
            `}
          >
            <p className={labelClassName}>{item.label}</p>
            <p className={valueClassName}>{item.value}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
