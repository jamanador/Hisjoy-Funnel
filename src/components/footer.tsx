const Footer = () => {
    return (
      <footer className="bg-[#6fb1c8] text-white text-center py-6 text-sm w-full mt-auto footer_cls">
        <p>All trademarks are the property of their respective owners.</p>
  
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="text-lg">🔒</span>
          <span className="font-semibold">256-BIT TLS SECURITY</span>
        </div>
  
        <div className="mt-2">
          <a href="#" className="hover:underline mx-2">Terms of Use</a> |
          <a href="#" className="hover:underline mx-2">Privacy Policy</a> |
          <a href="#" className="hover:underline mx-2">Consent to Telehealth</a>
        </div>
  
        <p className="mt-2">
          <a href="#" className="hover:underline">Physician Code of Conduct</a>
        </p>
      </footer>
    );
  };
  
  export default Footer;
  