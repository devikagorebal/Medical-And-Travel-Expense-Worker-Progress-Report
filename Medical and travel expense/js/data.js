// Column definitions for each expense section
const COLUMNS = {
  prescriptionDrugs: [
    { label: 'Drug Name', key: 'drugName' },
    { label: 'Prescription Date', key: 'prescriptionDate' },
    { label: 'Date Purchased', key: 'datePurchased' },
    { label: 'Healthcare Provider Name', key: 'provider' },
    { label: 'Paid Amount', key: 'paidAmount' }
  ],
  otcDrugs: [
    { label: 'Drug Name', key: 'drugName' },
    { label: 'Date Purchased', key: 'datePurchased' },
    { label: 'Paid Amount', key: 'paidAmount' },
    { label: "Seller's Name", key: 'seller' },
    { label: 'Reason for Purchasing', key: 'reason' }
  ],
  medicalSupplies: [
    { label: 'Item Purchased', key: 'item' },
    { label: 'Date Purchased', key: 'datePurchased' },
    { label: 'Was this Prescribed?', key: 'prescribed' },
    { label: 'Healthcare Provider Name', key: 'provider' },
    { label: 'Paid Amount', key: 'paidAmount' },
    { label: "Seller's Name", key: 'seller' }
  ],
  parking: [
    { label: 'Address of Healthcare Provider/Medical Facility', key: 'address' },
    { label: 'Date', key: 'date' },
    { label: 'Paid Amount', key: 'paidAmount' },
    { label: 'Meter Used?', key: 'meterUsed' },
    { label: 'Meter Number', key: 'meterNumber' }
  ],
  mileage: [
    { label: 'Appointment Date', key: 'date' },
    { label: 'Address of Healthcare Provider/Medical Facility', key: 'providerAddress' },
    { label: 'Address of Workplace', key: 'workAddress' },
    { label: 'Number of km (Round Trip)', key: 'km' }
  ],
  busTaxi: [
    { label: 'Appointment Date', key: 'date' },
    { label: 'Address of Starting Point', key: 'startAddress' },
    { label: 'Address of Healthcare Provider/Medical Facility', key: 'providerAddress' },
    { label: 'Bus or Taxi (indicate one)', key: 'mode' },
    { label: 'Total Fare Paid', key: 'fare' }
  ]
};

// Shared branding and contact details
const LOGO_PATH = 'assets/wcb-logo.jpeg';

const WCB_ADDRESS = {
  line1: '333 Broadway',
  cityProvPostal: 'Winnipeg, MB R3C 4W3',
  phone: '(204) 954-4321',
  tollFree: '1-855-954-4321',
  website: 'wcb.mb.ca'
};

// Sample claim data for the first example
const DATASET_1 = {
  logo: LOGO_PATH,
  address: WCB_ADDRESS,
  formTitle: 'Medical & Travel Expense Request',
  claimNo: '12345678',
  workerName: 'G Devika',
  workerAppId: '7875764',
  submitted: 'March 28, 2024 20:43',
  privacyUrl: '#privacy-notice',
  columns: COLUMNS,
  sections: {
    prescriptionDrugs: [
      {
        drugName: 'Naproxen',
        prescriptionDate: 'February 28, 2024',
        datePurchased: 'February 29, 2024',
        provider: 'Dr. Beeru',
        paidAmount: '$20.00'
      }
    ],
    otcDrugs: [
      {
        drugName: 'Advil',
        datePurchased: 'March 28, 2024',
        paidAmount: '$8.00',
        seller: 'Shoppers Drug Mart',
        reason: 'Pain'
      }
    ],
    medicalSupplies: [
      {
        item: 'Tensor',
        datePurchased: 'February 28, 2024',
        prescribed: 'Yes',
        provider: 'Dr. Beeru',
        paidAmount: '$10.00',
        seller: 'Shoppers DrugMart'
      }
    ],
    parking: [
      {
        address: '333 St Mary Ave, Winnipeg MB R3C4A5, Canada',
        date: 'March 28, 2024',
        paidAmount: '$10.00',
        meterUsed: 'Yes',
        meterNumber: '12245'
      }
    ],
    mileage: [
      {
        date: 'March 28, 2024',
        providerAddress: 'HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada',
        workAddress: 'WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada',
        km: '20 km'
      }
    ],
    busTaxi: [
      {
        date: 'March 28, 2024',
        startAddress: '',
        providerAddress: 'HSC Winnipeg Women\u2019s Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada',
        mode: 'Bus',
        fare: '$3.00'
      },
      {
        date: 'March 27, 2024',
        startAddress: '25 Furby St, Winnipeg MB R3C2A2, Canada',
        providerAddress: '440 Edmonton St, Winnipeg MB R3B 2M4, Canada',
        mode: 'Taxi',
        fare: '$15.00'
      }
    ]
  }
};

// Second sample claim with more rows and an empty section
const DATASET_2 = {
  logo: LOGO_PATH,
  address: WCB_ADDRESS,
  formTitle: 'Medical & Travel Expense Request',
  claimNo: '98765432',
  workerName: 'G Devraj',
  workerAppId: '598214',
  submitted: 'July 21, 2026 09:12',
  privacyUrl: '#privacy-notice',
  columns: COLUMNS,
  sections: {
    prescriptionDrugs: [
      {
        drugName: 'Amoxicillin',
        prescriptionDate: 'June 02, 2026',
        datePurchased: 'June 02, 2026',
        provider: 'Dr. Veeru',
        paidAmount: '$14.50'
      },
      {
        drugName: 'Gabapentin',
        prescriptionDate: 'June 10, 2026',
        datePurchased: 'June 11, 2026',
        provider: 'Dr. Veeru',
        paidAmount: '$32.00'
      },
      {
        drugName: 'Cyclobenzaprine',
        prescriptionDate: 'June 18, 2026',
        datePurchased: 'June 19, 2026',
        provider: 'Dr. Veeru',
        paidAmount: '$27.75'
      }
    ],
    otcDrugs: [
      {
        drugName: 'Tylenol Extra Strength',
        datePurchased: 'June 15, 2026',
        paidAmount: '$12.25',
        seller: 'Walmart Pharmacy',
        reason: 'Headache / back pain'
      },
      {
        drugName: 'Robaxacet',
        datePurchased: 'June 22, 2026',
        paidAmount: '$16.99',
        seller: 'Shoppers Drug Mart',
        reason: 'Muscle spasm'
      }
    ],
    // Deliberately empty to demonstrate the "no entries" state.
    medicalSupplies: [],
    parking: [
      {
        address: '820 Sherbrook St, Winnipeg MB R3A 1R9, Canada',
        date: 'June 11, 2026',
        paidAmount: '$14.00',
        meterUsed: 'No',
        meterNumber: '—'
      },
      {
        address: '409 Tache Ave, Winnipeg MB R2H 2A6, Canada',
        date: 'June 19, 2026',
        paidAmount: '$9.50',
        meterUsed: 'Yes',
        meterNumber: '30871'
      }
    ],
    mileage: [
      {
        date: 'June 02, 2026',
        providerAddress: '2109 Portage Ave, Winnipeg MB R3J 0K2, Canada',
        workAddress: 'Manitoba Hydro Place, 360 Portage Ave, Winnipeg MB R3C 0G8, Canada',
        km: '12 km'
      },
      {
        date: 'June 18, 2026',
        providerAddress: '409 Tache Ave, Winnipeg MB R2H 2A6, Canada',
        workAddress: 'Manitoba Hydro Place, 360 Portage Ave, Winnipeg MB R3C 0G8, Canada',
        km: '9 km'
      }
    ],
    busTaxi: [
      {
        date: 'June 22, 2026',
        startAddress: '145 Marion St, Winnipeg MB R2H 0T7, Canada',
        providerAddress: 'Shoppers Drug Mart, 640 Osborne St, Winnipeg MB R3L 2C1, Canada',
        mode: 'Bus',
        fare: '$3.15'
      }
    ]
  }
};

// Available datasets for the selector in the page toolbar
const DATA_SOURCES = {
  dataset1: { label: 'Claim 12345678 \u2014 G Devika', data: DATASET_1 },
  dataset2: { label: 'Claim 98765432 \u2014 G Devraj', data: DATASET_2 }
};
