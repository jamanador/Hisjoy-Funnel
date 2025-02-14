
const features = [
  {
    icon: <img src="/images/bnr-list2-icn1.png" alt="U.S. Licensed Pharmacy" className="w-12 h-12" />, 
    title: "U.S. Licensed Pharmacy",
  },
  {
    icon: <img src="/images/bnr-list2-icn2.png" alt="HIPAA Compliant" className="w-12 h-12" />, 
    title: "HIPAA Compliant",
  },
  {
    icon: <img src="/images/bnr-list2-icn3.png" alt="Lowest Price Guarantee" className="w-12 h-12" />, 
    title: "Lowest Price Guarantee",
  },
];

const SecurityInfoCard = () => {
  return (
    <div className="flex justify-center items-center my-4 md:my-8 px-2">
      <div className="rounded-lg p-6 w-full text-center bg-blue-50">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          Your Information Is
          <span className="block text-brand-secondary underline">Protected and Confidential</span>
        </h2>
        <div className="flex justify-center mt-5 mb-2">
          <img
            src="/images/Certification-Seal-2025-300x325-wm@2x.webp"
            alt="Security Icon"
            className="w-32"
          />
        </div>
        {/* <p className="text-gray-700 text-sm md:text-base">
          Your personal information is safeguarded with
          <a href="#" className="text-blue-500 font-medium"> rigorous protection measures</a>.
          Contact details, orders, and responses are stored securely and treated with the
          <a href="#" className="text-blue-500 font-medium"> highest level of confidentiality</a>,
          ensuring your privacy is always protected.
        </p> */}
       <div className="bg-blue-50 py-2 md:py-4 px-4 md:px-12 flex flex-col md:flex-row justify-center items-center gap-0 md:gap-12 text-center">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="p-3">{feature.icon}</div>
          <p className="text-sm font-semibold text-gray-800 mt-2">{feature.title}</p>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default SecurityInfoCard;