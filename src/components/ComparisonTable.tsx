import React from "react";

const ComparisonTable: React.FC = () => {
  const data = {
    header: "Having Trouble Deciding?",
    columns: ["Feature", "Generic Viagra®", "Generic Cialis®"], // Table headers
    features: [
      { label: "Active Ingredient", values: ["Sildenafil", "Tadalafil"] },
      { label: "Lasts for", values: ["4-5 Hours", "36 Hours"] },
      { label: "Starts Working In", values: ["30 Min", "30-60 Min"] },
    ],
    price: "$3",
  };

  return (
    <div>
      <div className="flex justify-center items-center my-12 md:mt-16 md:mb-8 px-2">
        <div className="w-full bg-white rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-50 py-3 text-center text-lg sm:text-xl font-bold">
            <span className="border-b-2 border-red-500 pb-1 ">{data.header}</span>
          </div>

          {/* Table */}
          <table className="w-full border-collapse text-center text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-200">
                {data.columns.map((column, index) => (
                  <th key={index} className="py-2 px-3 border text-[11px] md:text-lg">{column}</th>
                ))}
              </tr>
            </thead>
            <tbody className="font-semibold">
              {data.features.map(({ label, values }, index) => (
                <tr key={index}>
                  <td className="py-2 px-3 border text-white-900 text-[11px]  md:text-lg">{label}</td>
                  {values.map((value, i) => (
                    <td key={i} className="py-2 px-3 border text-[11px] md:text-lg">{value}</td>
                  ))}
                </tr>
              ))}
              {/* Price Row */}
              <tr className="bg-brand-maroon text-white">
                <td className="py-2 px-3 border">Price</td>
                {Array(2).fill(null).map((_, i) => (
                  <td key={i} className="py-2 px-3 border">
                    <span className="bg-white text-black font-bold px-3 py-1 rounded text-[13px] md:text-lg">
                      {data.price}
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h3 className="text-center font-medium md:py-4  text-gray-600">
        <span className="text-red-700 mr-2">NOTE :</span>ACT NOW GET TWO MONTHS FREE
      </h3>


    </div>
  );
};

export default ComparisonTable;
