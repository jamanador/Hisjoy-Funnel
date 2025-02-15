type MarqueeBannerProps = {
  text?: string;
  bgColor?: string;
  textColor?: string;
  className?: string; // Allow custom styling
};

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  text,
  bgColor = "bg-brand-secondary",
  textColor = "text-white",
  className = "", // Default empty to prevent undefined issues
}) => {
  return (
    <div
      className={`w-screen ${bgColor} ${textColor} lg:py-6 md:py-4 py-4 text-center font-bold lg:text-2xl text-lg md:text-lg leading-relaxed ml-[-4px] px-4 ${className}`}
    >
      {text?.split("\n").map((line: string, index: number) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </div>
  );
};
