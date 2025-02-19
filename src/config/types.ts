export type Product = {
    name: string;
    images: string[]; // Supports multiple images
    description: string;
    trialPackage: {
        tablets: number;
        instantSavings: number;
        pricePerMonth: number;
        regularPrice: number;
    };
    additionalInfo: {
        doctorVisit: { price: number; isFree: boolean };
        shipping: { price: number; isFree: boolean };
        total: number;
        billingInfo?: string; // Optional billing cycle info
        subscription: string;
        lifetimeDiscount?: string; // Optional lifetime discount
        guarantee: string;
    };
};

export type Category = {
    categoryName: string;
    categoryImages: string[];
    products: Product[];
};
