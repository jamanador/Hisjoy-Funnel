
const DeliveryCard = () => {
    return (
        <div className="p-4 space-y-4">
            {/* Delivery Section */}
            <div className="border border-gray-300 rounded-xl ">
                <div className="p-4 rounded-t-lg text-center bg-brand-third">
                    <h3 className="font-bold md:text-lg text-[15px] text-white">Discreet Delivery. Guaranteed Privacy</h3>
                </div>
                <p className="text-center px-2 py-8">
                        Unmarked packaging ensures privacy, and individually wrapped pills keep you prepared at home or on the go. Confidence starts here.
                    </p>
                <div className="p-4 flex justify-center items-center">
                    <img src="/images/hisjoy.png" alt="Packaging 1" className="h-80" />
                </div>
            </div>
        </div>
    );
};

export default DeliveryCard;
