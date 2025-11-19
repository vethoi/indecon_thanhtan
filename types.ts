
export type Language = 'vi' | 'en' | 'zh';

export interface ContentData {
  nav: {
    home: string;
    location: string;
    fdi: string;
    infrastructure: string;
    services: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    developer: string;
    area: string;
    lease: string;
    cta: string;
  };
  stats: {
    fdiTitle: string;
    fdiDesc: string;
    fdiValue: string;
    targetValue: string;
    ranking: string;
    companiesTitle: string; 
    companies: string[];    
    badges: {
      location: string;
      incentives: string;
      labor: string;
      global: string;
    }
  };
  map: {
    title: string;
    subtitle: string;
    mapImage: string; // New field for localized map image path
    googleMapUrl: string; 
    btnLabel: string;     
    distAirport: string;
    distSeaport: string;
    distCity: string;
    legend: {
      highway: string;
      airport: string;
      seaport: string;
    }
  };
  overview: {
    title: string;
    desc: string;
    locationTitle: string;
    locationDesc: string;
    infraTitle: string;
    infraDesc: string;
  };
  labor: {
    title: string;
    desc: string;
    region: string;
    wage: string;
    effective: string;
  };
  pricing: {
    title: string;
    landPrice: string;
    landTax: string;
    taxIncentive1: string;
    taxIncentive2: string;
  };
  utilities: {
    title: string;
    electricity: string;
    electricityDesc: string;
    water: string;
    waterPrice: string;
    waste: string;
    wastePrice: string;
    security: string;
    solar: string;
  };
  services: {
    title: string;
    subtitle: string;
    list: string[];
    steps: {
      investCert: string;
      envPermit: string;
      firePermit: string;
      constructPermit: string;
    }
  };
  contact: {
    title: string;
    phone: string;
    email: string;
    address: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    footerQuote: string;
  };
}