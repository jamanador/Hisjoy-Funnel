
const SuccessCard = () => {
    return (
        <div className="p-4 space-y-4">
            {/* Clinically Proven Section */}
            <div className="border border-brand-four rounded-lg p-4 bg-brand-three">
                <div className="flex items-center">
                    <div className="w-1/3 flex flex-col items-center justify-center p-2">
                        <div className="bg-green-100 border-2 border-green-600 rounded-full w-12 h-12 flex items-center justify-center">
                            <img src="/images/clinic.png" alt="" className="w-full h-full" />
                        </div>
                        <span className="text-brand-secondary font-bold md:text-xl mt-2">Clinically Proven</span>
                    </div>
                    <div className="w-2/3 p-2">
                        <div className="flex items-center mb-1">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-orange-500 text-2xl">★</span>
                            ))}
                        </div>
                        <h2 className="text-yellow-500 font-bold text-lg">94% Success Rate</h2>
                        <p className="text-brand-secondary font-bold">in Improving Erections</p>
                    </div>
                </div>
                <p className="text-green-700 text-sm mt-4">
                    A clinical study of <span className="font-bold">979 men found that 94% were satisfied</span> with Sildenafil’s effects on their erections. PMID:
                    <a href="#" className="text-green-800 font-semibold underline">18516312</a>
                </p>
            </div>
        </div>
    );
};

export default SuccessCard;
