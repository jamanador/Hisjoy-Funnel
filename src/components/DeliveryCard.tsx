
const DeliveryCard = () => {
    return (
        <div className="p-2 my-4 md:my-8">
            {/* Delivery Section */}
            <div className="border border-gray-300 rounded-xl bg-blue-50 ">
                <div className="p-4 rounded-t-lg text-center bg-brand-third">
                    <h3 className="font-bold md:text-lg text-[15px] text-white">Discreet Delivery. Guaranteed Privacy</h3>
                </div>
                <p className="text-center lg:px-6 px-4 pt-7 pb-5 text-black font-semibold">
                It couldn’t be easier. Once prescribed, your treatment will be rushed directly to you door in plain, discreet packaging.
                    </p>
                <div className="flex justify-center items-center">
                    <img src="/images/hisjoy.png" alt="Packaging 1" className="w-8/12 mt-[-14px]" />
                </div>
            </div>
        </div>
    );
};

export default DeliveryCard;
