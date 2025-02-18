type MarqueeBannerProps = {
  text?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
};

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  text,
  bgColor = "bg-brand-secondary",
  textColor = "text-white",
  className = "",
}) => {
  const lines = text?.split("\n") || [];

  return (
    <div
      className={`w-screen ${bgColor} ${textColor} text-center font-bold leading-relaxed ml-[-4px] px-4 ${className} lg:py-6 md:py-4 py-4`}
    >
      {lines.length > 0 && (
        <p className="lg:text-3xl md:text-2xl text-xl">{lines[0]}</p>
      )}
      {lines.length > 1 && (
        <p className="lg:text-lg md:text-md text-sm">{lines[1]}</p>
      )}
    </div>
  );
};
