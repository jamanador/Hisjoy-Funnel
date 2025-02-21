import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Category } from '../config/types';

export const ProductCard: React.FC<{ product: Category['products'][0] }> = ({ product }) => {
    const [formData, setFormData] = useState<{ [key: string]: string } | null>(null);
    const productName = useParams();

    useEffect(() => {
        // Retrieve form data from local storage
        const savedData = localStorage.getItem('contactFormData');
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
        return url.toString();
    };

    const exist = product.additionalInfo.category;

    return (
        <div className="rounded-3xl product-card overflow-hidden shadow-sm bg-white mb-0 border border-blue-50 hover:border-blue-100 transition-all duration-1000 hover:cursor-pointer mx-4 md:mx-0">
            {exist && <button className="bg-brand-maroon text-white w-full py-2 font-bold">{product.additionalInfo?.category}</button>}
            <div className="text-center mb-4">
                <h2 className="text-2xl font-extrabold mt-5">{product.name}</h2>
                <span className="text-green-700 font-semibold italic text-sm">Instant savings: ${product.trialPackage.instantSavings}</span>
            </div>
            <div className="text-center my-4">
                <img className="w-11/12 h-full mx-auto mb-[-15px]" src={product.images[0]} alt={product.name} />
            </div>
            <div className="text-center mb-4">
                <span className="text-2xl font-bold mt-[-30px]">{product.trialPackage.tablets} Tablets</span>
                <p className="text-[12px] text-gray-500 font-semibold"><span className="text-brand-maroon font-semibold mx-1">${product.trialPackage.regularPerTablet}</span>Per Tablet</p>
            </div>
            <div className="flex flex-col mb-4 mx-10 font-sans ">
                <span className=" border-b">
                    <p className="text-gray-700 text-base font-semibold mb-2 text-center">
                        Lifetime Discount
                    </p>
                </span>
                <div className="flex justify-between w-full mt-2">
                    <div>
                        <p className="text-gray-700 text-base font-extrabold">
                            Generic {productName.category?.toLocaleUpperCase()}®
                        </p>
                        <span className="text-[12px] mb-[-20px] pt-0">50-100 MG Tablets</span>
                    </div>
                    <p className="text-gray-700 text-base font-semibold">
                        <span className="line-through mr-4">${product.trialPackage.regularPrice}</span>
                        <span className="text-brand-secondary">{product.trialPackage.pricePerMonth ? ' 150' : ''}</span>
                    </p>
                </div>
                <div className="flex justify-between w-full">
                    <p className="text-gray-700 text-base font-semibold">
                        Online Doctor Visit
                    </p>
                    <p className="text-gray-700 text-base font-semibold">
                        <span className="line-through mr-2">${product.additionalInfo.doctorVisit.price}</span>
                        <span className="text-brand-secondary">{product.additionalInfo.doctorVisit.isFree ? ' FREE' : ''}</span>
                    </p>
                </div>
                <div className="flex justify-between w-full">
                    <p className="text-gray-700 text-base font-semibold">
                        Shipping
                    </p>
                    <p className="text-gray-700 text-base font-semibold">
                        <span className="line-through mr-2">${product.additionalInfo.shipping.price}</span>
                        <span className="text-brand-secondary">{product.additionalInfo.doctorVisit.isFree ? ' FREE' : ''}</span>
                    </p>
                </div>
                <div className="flex justify-between w-full">
                    <p className="text-gray-700 text-base font-semibold">
                        Instant Savings
                    </p>
                    <p className="text-brand-secondary text-base font-semibold">
                        <span className="">-${product.trialPackage.instantSavings}</span>
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
                <Link to={constructUrlWithQueryParams(product.additionalInfo.productlink)}>
                    <button className="bg-brand-maroon hover:bg-brand-secondary text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline cursor-pointer">
                        ADD TO CART
                    </button>
                </Link>
            </div>
            <div className="text-center mt-2 mb-4 text-sm text-gray-900">
                <p className="font-semibold">{product.additionalInfo.billingInfo}</p>
                <p className="italic font-semibold text-black">{product.additionalInfo.subscription} <br /><span>Member login provided after checkout</span></p>
                <p className="italic font-semibold text-gray-800">{product.additionalInfo.guarantee}</p>
            </div>
        </div>
    );
};
