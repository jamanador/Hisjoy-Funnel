export default function PricingTable() {
    return (
        <div className="container mx-auto p-4 my-6">
            {/* Title */}
            <h2 className="text-center sm:lg md:text-xl lg:text-2xl font-extrabold text-brand-maroon border-b-2 border-b-brand-maroon pb-2">
                Lowest Price Anywhere, Guaranteed.
            </h2>

            {/* Table Section */}
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full border border-gray-300 text-center">
                    <thead className="bg-gray-100">
                        <tr className="border-b">
                            <th className="py-3 px-4">Brand</th>
                            <th className="py-3 px-4">Generic Viagra<sup>®</sup> 100mg</th>
                            <th className="py-3 px-4">Generic Cialis<sup>®</sup> 20mg</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {[{ name: "CVS", price1: "$45.00", price2: "$51.33", img: "/images/CVS.788470c.svg" },
                        { name: "Walgreens", price1: "$46.22", price2: "$50.89", img: "/images/Walgreens.2f4302d.svg" },
                        { name: "hims", price1: "$10.00", price2: "$9.50", img: "/images/hims.c9913b1.svg" },
                        { name: "BlueChew", price1: "$7.40", price2: "$16.66", img: "/images/bluechew.c1a3413.svg" }]
                            .map((brand, index) => (
                                <tr key={index} className="border-b">
                                    <td className="py-3 px-4">
                                        <img src={brand.img} alt={brand.name} className="mx-auto h-8" />
                                    </td>
                                    <td className="py-3 px-4 text-lg font-semibold text-gray-500">{brand.price1}</td>
                                    <td className="py-3 px-4 text-lg font-semibold text-gray-500">{brand.price2}</td>
                                </tr>
                            ))}
                        {/* Friday Plans Row */}
                        <tr className="bg-brand-maroon text-white font-semibold">
                            <td className="py-3 px-4 text-center justify-center justify-items-center pl-6 text-[13px] sm:text-md md:text-xl">
                                <img src="/images/logo.svg" alt="HisJoy" className="h-8 " />
                            </td>

                            <td className="py-3 px-4 text-lg font-bold">
                                <span className="bg-white text-black px-4 py-2 rounded-md">$3</span>
                            </td>
                            <td className="py-3 px-4 text-lg font-bold">
                                <span className="bg-white text-black px-4 py-2 rounded-md">$3
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
