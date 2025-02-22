import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Category } from '../config/types';

// Mapping of categories to discount codes
const categoryDiscountCodes = {
    'Best Value': 'HJ140I',
    'Great Value': 'HJ30I30',
    'Most Popular': 'HJ250I',
    // Add more categories and their corresponding discount codes if needed
} as const;

export const ProductCard: React.FC<{ product: Category['products'][0] }> = ({ product }) => {
    const [formData, setFormData] = useState<{ [key: string]: string } | null>(null);
    const productName = useParams()

    useEffect(() => {
        // Retrieve form data from local storage
        const savedData = localStorage.getItem('contactFormData');
        console.log(savedData);
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    const constructUrlWithQueryParams = (baseUrl: string) => {
        const url = new URL(baseUrl);
        if (formData) {
            Object.entries(formData).forEach(([key, value]) => {
                url.searchParams.append(key, value);
            });
        }
        // Use a type assertion to ensure TypeScript treats the category as a valid key
        const category = product.additionalInfo.category;
        const discountCode = categoryDiscountCodes[category as keyof typeof categoryDiscountCodes];
        if (discountCode) {
            url.searchParams.append('discount_code', discountCode);
        }
        return url.toString();
    };

    const exist = product.additionalInfo.category;
    const twentymg = productName.category === 'cialis'
    const hundredmg = productName.category === 'viagra'

    return (
        <div className="rounded-3xl product-card overflow-hidden shadow-sm bg-white mb-0 border border-blue-50 hover:border-blue-100 transition-all duration-1000 hover:cursor-pointer mx-4 md:mx-0">
            {exist && <button className="bg-brand-maroon text-white w-full py-2 font-bold">{product.additionalInfo?.category}</button>}
            <div className="text-center mb-4">
                <h2 className="text-2xl font-extrabold mt-5">{product.name}</h2>
                <span className="text-brand-secondary font-semibold italic text-sm">Instant savings: ${product.trialPackage.instantSavings}</span>
            </div>
            <div className="text-center my-4">
                <img className="w-11/12 h-full mx-auto mb-[-15px]" src={product.images[0]} alt={product.name} />
            </div>
            <div className="text-center mb-4">
                <span className="text-xl font-bold mt-[-80px]">
                    {product.trialPackage.tablets} Tablets
                </span>
                <p className="text-[12px] text-gray-800 font-medium flex justify-center items-center animate-fade-in-up">
                    <span className="text-brand-maroon font-medium text-3xl mr-1">
                        ${product.trialPackage.regularPerTablet}
                    </span>
                    <span className="text-[11px] leading-none">   Per <br /> Tablet</span>
                </p>
            </div>

            <div className="flex flex-col mb-4 mx-10 font-sans ">
                <span className=" border-b">
                    <p className="text-gray-700 text-base font-semibold mb-2 text-center">
                        Lifetime Discount
                    </p>
                </span>
                <div className="flex justify-between w-full mt-3">
                    <div className="mb-1">
                        <p className="text-gray-700 text-base font-extrabold leading-none">
                            Generic {productName.category?.toLocaleUpperCase()}<sup className='font-extrabold text-sm'>®</sup>
                            <br />
                            <span className="text-[13px] font-semibold text-gray-700">
                                {product.trialPackage.tablets} Tablets,
                                {twentymg && <span>20MG</span>}
                                {hundredmg && <span>100MG</span>}
                            </span>
                        </p>
                    </div>


                    <p className="text-gray-700 text-base font-semibold">
                        <span className="red-line-through mr-4">
                            ${product.trialPackage.regularPrice}
                        </span>
                        <span className="text-brand-secondary">
                            {product.trialPackage.pricePerMonth ? ' 150' : ''}
                        </span>
                    </p>
                </div>
                <div className="flex justify-between w-full">
                    <p className="text-gray-700 text-base font-semibold">
                        Online Doctor Visit
                    </p>
                    <p className="text-gray-700 text-base font-semibold">
                        <span className="red-line-through mr-2">
                            ${product.additionalInfo.doctorVisit.price}
                        </span>
                        <span className="text-brand-secondary">
                            {product.additionalInfo.doctorVisit.isFree ? ' FREE' : ''}
                        </span>
                    </p>

                </div>
                <div className="flex justify-between w-full">
                    <p className="text-gray-700 text-base font-semibold">
                        Shipping
                    </p>
                    <p className="text-gray-700 text-base font-semibold">
                        <span className="red-line-through mr-2">
                            ${product.additionalInfo.shipping.price}
                        </span>
                        <span className="text-brand-secondary">
                            {product.additionalInfo.doctorVisit.isFree ? ' FREE' : ''}
                        </span>
                    </p>

                </div>
                <div className="flex justify-between w-full">
                    <p className="text-gray-700 text-base font-semibold">
                        Instant Savings
                    </p>
                    <p className="text-gray-800 text-base font-semibold">
                        <span className="mr-2">-${product.trialPackage.instantSavings}</span>
                        <span className="text-white">
                            {product.additionalInfo.doctorVisit.isFree ? ' FREE' : ''}
                        </span>
                    </p>
                </div>
                <div className="flex justify-between w-full mt-4 border-t">
                    <p className="text-gray-700 text-md font-bold mt-2">
                        TOTAL
                    </p>
                    <p className="text-black text-md font-bold mt-2">
                        ${product.trialPackage.pricePerMonth}
                    </p>
                </div>
            </div>
            <div className="text-center lg:mx-4 mx-2">
                <a href={constructUrlWithQueryParams(product.additionalInfo.productlink)}>
                    <button className="bg-brand-maroon hover:bg-brand-secondary text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline cursor-pointer">
                        ADD TO CART
                    </button>
                </a>
            </div>
            <div className="text-center mt-2 mb-4 text-xs text-gray-900">
                <p className="font-semibold">{product.additionalInfo.billingInfo}</p>
                <p className="italic font-semibold text-black">{product.additionalInfo.subscription} <br /><span>Member login provided after checkout</span></p>
                <p className="italic font-semibold text-gray-800">{product.additionalInfo.guarantee}</p>
            </div>
        </div>
    );
};
