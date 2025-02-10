import { Garage } from "@common/types";

const Brands = {
  re: {
    name: "Royal Enfield",
    logo: "https://logos-download.com/wp-content/uploads/2019/06/Royal_Enfield_Logo_full.png",
  },
};

const Garages: Garage[] = [
  {
    id: "g1",
    name: "Aarambh",
    address: "Ahmadabad",
    vehicles: [
      {
        id: "hi450",
        model: "Himalayan 450",
        nickName: "Himmy",
        garage: {
          id: "g1",
          name: "Aarambh",
        },
        image:
          "https://imgcdn.zigwheels.my/medium/gallery/exterior/89/2470/royal-enfield-himalayan-450-65573.jpg",
        brand: Brands.re,
        onRoadPrice: 358000,
        services: [
          {
            kms: 500,
            problems: [{ description: "Simple service", resolved: true }],
            servicedAt: "2025-02-12",
            billDetails: [
              {
                description: "Oil",
                qty: 1,
                rate: 750,
                total: 1200,
                unit: "liter",
              },
            ],
            oilChanged: true,
          },
        ],
      },
    ],
  },
];

export const Data: {
  Garages: Garage[];
} = {
  Garages,
};
