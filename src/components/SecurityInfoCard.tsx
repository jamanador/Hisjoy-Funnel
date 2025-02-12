
const SecurityInfoCard = () => {
  return (
    <div className="flex justify-center items-center my-8">
      <div className="bg-white rounded-lg p-6 w-full text-center border border-gray-200">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          Your Information Is
          <span className="block text-brand-secondary">Protected and Confidential</span>
        </h2>
        <div className="flex justify-center my-4">
          <img
            src="/images/protect.svg"
            alt="Security Icon"
            className=""
          />
        </div>
        {/* <p className="text-gray-700 text-sm md:text-base">
          Your personal information is safeguarded with
          <a href="#" className="text-blue-500 font-medium"> rigorous protection measures</a>.
          Contact details, orders, and responses are stored securely and treated with the
          <a href="#" className="text-blue-500 font-medium"> highest level of confidentiality</a>,
          ensuring your privacy is always protected.
        </p> */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <img src="/images/securityicon1.png" alt="HIPAA Compliant" className="h-20" />
          <img src="/images/securityicon2.png" alt="FDA Approved" className="h-20" />
          <img src="/images/securityicon3.png" alt="Licensed Pharmacists" className="h-20" />
          {/* <img src="/icons/legitscript.png" alt="Legit Script Verified" className="h-10" /> */}
        </div>
      </div>
    </div>
  );
};

export default SecurityInfoCard;