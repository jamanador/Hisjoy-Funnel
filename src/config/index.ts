import type { Category } from "./types";

const categories: Category[] = [
  {
    categoryName: "Cialis",
    categoryImages: ["/images/cialis.png"],
    products: [
      {
        name: "Buy 2 Months - Get 1 Free",
        images: ["/images/Cialis-Buy 2 Months - Get 1 Free.png"],
        description: "Get 30 tablets with instant savings of $140.",
        trialPackage: {
          tablets: 30,
          instantSavings: 140,
          pricePerMonth: 100,
          regularPrice: 240,
          regularPerTablet: 3.33
        },
        additionalInfo: {
          doctorVisit: { price: 59, isFree: true },
          shipping: { price: 10, isFree: true },
          total: 100,
          billingInfo: "Bills Every 2 Months",
          subscription: "Modify, skip or cancel anytime",
          lifetimeDiscount: "LIFETIME Discount",
          guarantee: "90-day money-back guarantee",
          productlink: "https://checkout.hisjoy.com/l/rsk-yzj-c6v",
          category: "Best Value"
        },
      },
      {
        name: "Trial Package",
        images: ["/images/trailpakage.png"],
        description: "Cialis is used for ED treatment.",
        trialPackage: {
          tablets: 10,
          instantSavings: 30,
          pricePerMonth: 50,
          regularPrice: 80,
          regularPerTablet: 5
        },
        additionalInfo: {
          billingInfo: "Bills Every Month",
          doctorVisit: { price: 59, isFree: true },
          shipping: { price: 10, isFree: true },
          total: 50,
          subscription: "Modify, skip or cancel anytime",
          guarantee: "90-day money-back guarantee",
          productlink: "https://checkout.hisjoy.com/l/jqj-53n-vei",
          category: "Great Value"
        },
      },
      {
        name: "Buy 3 Months - Get 2 Free",
        images: ["/images/Cialis-Buy 3 Months - Get 2 Free.png"],
        description: "Get 50 tablets with instant savings of $350.",
        trialPackage: {
          tablets: 50,
          instantSavings: 250,
          pricePerMonth: 150,
          regularPrice: 400,
          regularPerTablet: 3
        },
        additionalInfo: {
          doctorVisit: { price: 59, isFree: true },
          shipping: { price: 10, isFree: true },
          total: 150,
          billingInfo: "Bills Every 3 months",
          subscription: "Modify, skip or cancel anytime",
          lifetimeDiscount: "LIFETIME Discount",
          guarantee: "90-day money-back guarantee",
          productlink: "https://checkout.hisjoy.com/l/vof-bpt-o5d",
          category: "Most Popular"
        },
      }
    ],
  },
  {
    categoryName: "Viagra",
    categoryImages: ["/images/viagra.jpg"],
    products: [
      {
        name: "Buy 2 Months - Get 1 Free",
        images: ["/images/Vaigra-Buy 2 Months - Get 1 Free.png"],
        description: "Get 30 tablets with instant savings of $140.",
        trialPackage: {
          tablets: 30,
          instantSavings: 140,
          pricePerMonth: 100,
          regularPrice: 240,
          regularPerTablet: 3.33
        },
        additionalInfo: {
          doctorVisit: { price: 59, isFree: true },
          shipping: { price: 10, isFree: true },
          total: 100,
          billingInfo: "Bills Every 2 Months",
          subscription: "Modify, skip or cancel anytime",
          lifetimeDiscount: "LIFETIME Discount",
          guarantee: "90-day money-back guarantee",
          productlink: "https://checkout.hisjoy.com/l/b0f-40r-je8",
          category: "Best Value"
        },
      },
      {
        name: "Trial Package",
        images: ["/images/trailpakage-viagra.png"],
        description: "Viagra helps with ED issues.",
        trialPackage: {
          tablets: 10,
          instantSavings: 30,
          pricePerMonth: 50,
          regularPrice: 80,
          regularPerTablet: 5
        },
        additionalInfo: {
          doctorVisit: { price: 59, isFree: true },
          shipping: { price: 10, isFree: true },
          billingInfo: "Bills Every Month",
          total: 50,
          subscription: "Modify, skip or cancel anytime",
          guarantee: "90-day money-back guarantee",
          productlink: "https://checkout.hisjoy.com/l/pui-pqy-l6j",
          category: "Great Value"
        },
      },
      {
        name: "Buy 3 Months - Get 2 Free",
        images: ["/images/Viagra-Buy 3 Months - Get 2 Free.png"],
        description: "Get 50 tablets with instant savings of $350.",
        trialPackage: {
          tablets: 50,
          instantSavings: 250,
          pricePerMonth: 150,
          regularPrice: 400,
          regularPerTablet: 3
        },
        additionalInfo: {
          doctorVisit: { price: 59, isFree: true },
          shipping: { price: 10, isFree: true },
          total: 150,
          billingInfo: "Bills Every 3 Months",
          subscription: "Modify, skip or cancel anytime",
          lifetimeDiscount: "LIFETIME Discount",
          guarantee: "90-day money-back guarantee",
          productlink: "https://checkout.hisjoy.com/l/spa-pcw-d01",
          category: "Most Popular"
        },
      }
    ],
  },
];

export default categories;
