type MarqueeBannerProps = {
    text?: string; // Change 'message' to 'text'
    bgColor?: string;
    textColor?: string;
  };
  
  export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
    text, // Now accepting 'text' instead of 'message'
    bgColor = "bg-brand-secondary",
    textColor = "text-white",
  }) => {
    return (
      <div className={`w-screen ${bgColor} ${textColor} lg:py-6 md:py-4 py-4 text-center font-bold lg:text-2xl text-lg md:text-lg leading-relaxed ml-[-4px] px-4`}>
        {text}
      </div>
    );
  };
  