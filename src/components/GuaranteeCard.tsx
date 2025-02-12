
const GuaranteeCard = () => {
  return (
    <div className="flex justify-center items-center my-8">
      <div className="bg-white rounded-lg p-6 w-full text-center border border-gray-200">
        <div className="flex justify-center">
          <img
            src="/images/moneyback.png"
            alt="60 Day Money Back Guarantee"
            className="h-60 mt-[-48px]"
          />
        </div>
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mt-[-28px]">
          Try Risk Free With 90 Night Trial
        </h2>
        <h3 className="text-lg md:text-xl font-bold text-gray-900">
          100% Money Back Guarantee
        </h3>
        <p className="text-gray-700 text-sm md:text-base mt-3 leading-relaxed">
          If you are not satisfied with HisJoy Generic <span className="font-semibold">Viagra<sup>&reg;</sup></span> or <span className="font-semibold">Cialis<sup>&reg;</sup></span> for any reason, just let us know within 90 days of receiving your first package. We will refund 100% of your purchase immediately, no questions asked.
        </p>
      </div>
    </div>
  );
};

export default GuaranteeCard;
