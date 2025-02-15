
const FastActingCard = () => {
    return (
        <div className="p-2 my-4 md:my-8">
            {/* Fast-Acting Section */}
            <div className="border border-gray-300 rounded-xl ">
                <div className="bg-brand-third text-white p-4">
                    <h3 className="font-bold md:text-lg text-[15px] text-center">Get Results Fast: Works in 30 Minutes</h3>
                </div>
                <div className="p-4 flex flex-col sm:flex-row items-center">
                    <div className="w-24 h-24 flex-shrink-0">
                        <img
                            src="/images/30-minutes.webp"
                            alt="30 Minute Timer"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="sm:ml-4 text-center sm:text-left">
                        <p className="text-gray-700 text-sm">
                            Generic Viagra and Generic Cialis are <span className="font-bold">fast-acting.</span> As soon as <span className="font-bold">30 minutes</span> after taking a tablet, you can achieve a<span className="font-bold underline pl-1">harder, longer-lasting erection on demand.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FastActingCard;
