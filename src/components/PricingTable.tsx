
export default function PricingTable() {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-center text-lg lg:text-2xl font-extrabold my-4 lg:my-8 text-brand-maroon">
                Lowest Price Anywhere, Guaranteed.
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                {/* Table Section */}
                <div className="w-full md:w-auto overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Brand</th>
                                <th className="py-2 px-4 border-b">Generic Viagra<sup>®</sup> 100mg</th>
                                <th className="py-2 px-4 border-b">Generic Cialis<sup>®</sup> 20mg</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b text-center">
                                    <img src="/images/CVS.788470c.svg" alt="CVS" className="h-8 mx-auto" />
                                </td>
                                <td className="py-2 px-4 border-b text-center">$45.00</td>
                                <td className="py-2 px-4 border-b text-center">$51.33</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b text-center">
                                    <img src="/images/Walgreens.2f4302d.svg" alt="Walmart" className="h-8 mx-auto" />
                                </td>
                                <td className="py-2 px-4 border-b text-center">$46.22</td>
                                <td className="py-2 px-4 border-b text-center">$50.89</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b text-center">
                                    <img src="/images/hims.c9913b1.svg" alt="Hims" className="h-8 mx-auto" />
                                </td>
                                <td className="py-2 px-4 border-b text-center">$10.00</td>
                                <td className="py-2 px-4 border-b text-center">$9.50</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b text-center">
                                    <img src="/images/bluechew.c1a3413.svg" alt="BlueChew" className="h-8 mx-auto" />
                                </td>
                                <td className="py-2 px-4 border-b text-center">$7.40</td>
                                <td className="py-2 px-4 border-b text-center">$16.66</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Friday Plans Section */}
            <div className="bg-brand-third mt-4  text-white p-4 rounded-lg flex justify-between items-center">
                <span className="text-lg font-semibold">Friday Plans</span>
                <div className="flex space-x-2">
                    <span className="bg-white text-black px-4 py-2 rounded-lg">$4</span>
                    <span className="bg-white text-black px-4 py-2 rounded-lg">$4</span>
                </div>
            </div>
        </div>
    )
}
