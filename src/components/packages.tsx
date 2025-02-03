import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type SubscriptionType = "subscribe" | "onetime";
type PackageOption = "1bottle" | "3plus2" | "2plus1";

interface PackageState {
  subscriptionType: SubscriptionType;
  deliveryOption: string;
}

export function Packages() {
  const [packageStates, setPackageStates] = useState<
    Record<PackageOption, PackageState>
  >({
    "1bottle": { subscriptionType: "subscribe", deliveryOption: "1 month" },
    "3plus2": {
      subscriptionType: "subscribe",
      deliveryOption: "every 5 months",
    },
    "2plus1": {
      subscriptionType: "subscribe",
      deliveryOption: "every 3 months",
    },
  });

  const packages = {
    "2plus1": {
      title: "Buy 2, Get 1 FREE!",
      label: "Silver",
      subscribePrice: 79.92,
      onetimePrice: 99.9,
      perBottleSubscribe: 26.64,
      perBottleOnetime: 33.3,
      savingsSubscribe: "$69.93",
      savingsOnetime: "$49.95",
      delivery: "every 3 months",
      deliveryOptions: ["every 45 days", "every 3 months"],
      regularPrice: 49.95,
      fakePrice: 149.85,
      topColor: "bg-[#C0C0C0]",
      textColor: "text-white",
      image: "/images/package3.png",
    },
    "3plus2": {
      title: "Buy 3, Get 2 FREE!",
      label: "Gold",
      subscribePrice: 119.88,
      onetimePrice: 149.85,
      perBottleSubscribe: 23.31,
      perBottleOnetime: 29.97,
      savingsSubscribe: "$129.87",
      savingsOnetime: "$99.90",
      delivery: "every 5 months",
      deliveryOptions: ["every 75 days", "every 5 months"],
      regularPrice: 49.95,
      fakePrice: 249.75,
      topColor: "bg-[#e0c62f]",
      textColor: "text-white",
      image: "/images/package2.png",
    },
    "1bottle": {
      title: "1 Bottle",
      label: "Bronze",
      subscribePrice: 39.96,
      onetimePrice: 49.95,
      perBottleSubscribe: 39.96,
      perBottleOnetime: 49.95,
      savingsSubscribe: "$9.99",
      savingsOnetime: null,
      delivery: "every month",
      deliveryOptions: ["every month", "every 2 months", "every 3 months"],
      regularPrice: 49.95,
      fakePrice: 249.75,
      topColor: "bg-[#CD7F32]",
      textColor: "text-white",
      image: "/images/package1.png",
    },
  };

  const handleSubscriptionChange = (
    packageKey: PackageOption,
    type: SubscriptionType,
  ) => {
    setPackageStates((prev) => ({
      ...prev,
      [packageKey]: { ...prev[packageKey], subscriptionType: type },
    }));
  };

  const handleDeliveryChange = (packageKey: PackageOption, option: string) => {
    setPackageStates((prev) => ({
      ...prev,
      [packageKey]: { ...prev[packageKey], deliveryOption: option },
    }));
  };

  return (
    <div className="secGap mx-auto max-w-5xl bg-white px-4 xl:max-w-7xl">
      <div className="mb-4 text-center md:mb-12">
        <h1 className="title">Choose Your Package</h1>
        <p className="text-md text-gray-600 md:text-xl">
          Your Pathway to Bladder Health
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-10 xl:grid-cols-3 xl:gap-8">
        {Object.entries(packages).map(([key, pkg]) => {
          const isSubscribe =
            packageStates[key as PackageOption].subscriptionType ===
            "subscribe";
          const selectedDeliveryOption =
            packageStates[key as PackageOption].deliveryOption;

          return (
            <div
              key={key}
              className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg"
            >
              <div
                className={`text-md w-full py-2 text-center font-semibold ${pkg.topColor} ${pkg.textColor}`}
              >
                {pkg.label}
              </div>
              <div className="px-1 py-5 sm:px-2 lg:px-4">
                <h2 className="mb-2 text-center text-2xl font-extrabold text-gray-800 md:text-3xl">
                  {pkg.title}
                </h2>
                <p className="mb-6 text-center font-semibold italic text-green-700">
                  {isSubscribe 
                    ? `Instant savings: ${pkg.savingsSubscribe}`
                    : pkg.savingsOnetime!==null ?`Instant savings: ${pkg.savingsOnetime}`:`Bundle to Save`}
                </p>
                <img
                  src={pkg?.image}
                  alt=""
                  className="mx-auto mb-4 h-[250px] w-ful"
                />
                <div className="mb-6 text-center">
                  <div className="text-5xl font-bold text-gray-900">
                    $
                    {isSubscribe
                      ? pkg.perBottleSubscribe
                      : pkg.perBottleOnetime}
                  </div>
                  <p className="font-bold">Per bottle</p>
                  <div className="text-[20px] font-semibold text-gray-400">
                    Regularly
                    <span className="text-red-600 line-through">
                      {" "}
                      ${pkg.regularPrice}
                    </span>
                  </div>
                </div>

                <div className="mb-6 space-y-3">
                  <label className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-2 sm:p-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name={`subscription-${key}`}
                        checked={isSubscribe}
                        onChange={() =>
                          handleSubscriptionChange(
                            key as PackageOption,
                            "subscribe",
                          )
                        }
                        className="h-4 w-4 text-green-600"
                      />
                      <span className="ml-2 text-base">
                        Subscribe & Save 20%
                      </span>
                    </div>
                    <span className="font-semibold text-green-700">
                      ${pkg.subscribePrice}{" "}
                      <span className="font-normal text-gray-500 line-through">
                        {" "}
                        ${pkg?.fakePrice}
                      </span>
                    </span>
                  </label>
                  {isSubscribe && (
                    <div className="relative ml-6">
                      <select
                        value={selectedDeliveryOption}
                        onChange={(e) =>
                          handleDeliveryChange(
                            key as PackageOption,
                            e.target.value,
                          )
                        }
                        className="w-full cursor-pointer appearance-none rounded border border-gray-200 p-2 pr-10 focus:border-gray-400"
                      >
                        {pkg.deliveryOptions.map((option) => (
                          <option
                            key={option}
                            value={option}
                            className="cursor-pointer"
                          >
                            Delivery {option}
                          </option>
                        ))}
                      </select>
                      {/* Arrow Icon */}
                      <div
                        className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transform transition-transform duration-300`}
                      >
                        <IoIosArrowDown className="h-5 w-5 text-blue-700" />
                      </div>
                    </div>
                  )}

                  <label className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name={`subscription-${key}`}
                        checked={!isSubscribe}
                        onChange={() =>
                          handleSubscriptionChange(
                            key as PackageOption,
                            "onetime",
                          )
                        }
                        className="h-4 w-4 text-green-600"
                      />
                      <span className="ml-2">One-time Purchase</span>
                    </div>
                    <span className="font-semibold text-green-600">
                      ${pkg.onetimePrice}{" "}
                      <span className="font-normal text-gray-500 line-through">
                        {" "}
                        ${pkg?.fakePrice}
                      </span>
                    </span>
                  </label>
                </div>

                <button
                  className={`w-full rounded-lg ${pkg.topColor} scale-100 px-4 py-3 text-lg font-semibold text-white transition-colors hover:bg-opacity-90 active:scale-[98%] lg:text-xl`}
                >
                  ADD TO CART
                </button>
                <p className="mt-3 text-center font-bold">
                  Total: ${isSubscribe ? pkg.subscribePrice : pkg.onetimePrice}{" "}
                  + FREE Shipping
                </p>
                <p className="text-center text-sm font-semibold italic text-gray-600">
                  90-Day Money Back Guarantee
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
