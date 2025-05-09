export type Product = {
    name: string;
    images: string[]; 
    description: string;
    trialPackage: {
        tablets: number;
        instantSavings: number;
        pricePerMonth: number;
        regularPrice: number;
        regularPerTablet:number;
    };
    additionalInfo: {
        doctorVisit: { price: number; isFree: boolean };
        shipping: { price: number; isFree: boolean };
        total: number;
        billingInfo?: string;
        subscription: string;
        lifetimeDiscount?: string;
        guarantee: string;
        productlink:string;
        category:string;
    };
};

export type Category = {
    categoryName: string;
    categoryImages: string[];
    products: Product[];
};
