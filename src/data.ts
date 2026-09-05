import { ServiceItem, Director, Branch, SocialActivity } from './types';

export const SOCIETY_INFO = {
  fullName: 'Parra Verla Canca Multipurpose Primary Agriculture Co-operative Society Ltd',
  shortName: 'PVCMPACS',
  regNumber: 'RES/AGR/GOA/1997/428',
  servingSince: '1997',
  termPeriod: '2026 - 2031',
  logoUrl: '/pvc-logo.jpg',
  logoExternalUrl: 'https://i.ibb.co/5Wn4X22k/PVC-LOGO.jpg',
  boardCombinedImageUrl: '/board-directors.jpg',
  boardCombinedImageExternalUrl: 'https://i.ibb.co/nNCgtNMg/board-directors-need-to-get-involved-with-cyber-risk-governancea.jpg',
  tagline: 'Serving since 1997 • Empowering Communities through Co-operation',
  aboutText:
    'Parra Verla Canca Multipurpose Primary Agriculture Co-operative Society Ltd. is committed to empowering our members and strengthening our community through the principles of co-operation. We strive to promote financial well-being and sustainable growth by offering a range of services, including deposit schemes, loan facilities and other member-oriented services. With a strong commitment to trust, transparency and service, we work towards economic and social development of our members and the community. Together, we move forward towards prosperity through co-operation and shared progress.',
  headOfficeAddress: 'House No. 128/A, Main Market Road, Parra, Bardez, Goa - 403510',
  phone: '+91 832 2272345',
  altPhone: '+91 98221 45678',
  whatsappNumber: '919822145678',
  email: 'pvcmpacs@gmail.com',
  workingHours: 'Monday – Saturday: 9:00 AM – 5:00 PM (Lunch: 1:30 PM – 2:30 PM) | Sunday Closed',
};

// Hero Carousel Slides (Page 1)
export const HERO_SLIDES = [
  {
    id: 'slide-1',
    badge: 'Established 1997',
    title: 'Parra Verla Canca Multipurpose Primary Agriculture Co-op. Society Ltd',
    subtitle: 'Proudly Serving Our Community Since 1997',
    description:
      'Built upon bedrock principles of mutual trust, transparency, and cooperative financial empowerment for the farmers, families, and businesses of Parra, Verla, Canca and beyond.',
    highlight: 'Serving Since 1997',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    ctaText: 'Explore Our Services',
    ctaLink: '#services',
  },
  {
    id: 'slide-2',
    badge: 'Secure Savings',
    title: 'Grow Your Savings Securely with Our Attractive Deposit Schemes',
    subtitle: 'Safe Savings with Complete Peace of Mind',
    description:
      'From flexible Saving Deposits to Fixed and Recurring Deposits, we offer customized options and doorstep Pigmy collection.',
    highlight: 'Attractive & Secure Deposit Schemes',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80',
    ctaText: 'View Deposit Schemes',
    ctaLink: '#deposit-schemes',
  },
  {
    id: 'slide-3',
    badge: 'Housing Finance',
    title: 'Home Loan Scheme',
    subtitle: 'Build or Renovate Your Dream Home in Goa',
    description:
      'Fulfill your dream of homeownership with transparent terms, low processing charges, flexible repayment tenures, and minimal documentation.',
    highlight: 'Easy Repayment Tenures Available',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    ctaText: 'Apply for Home Loan',
    ctaLink: '#request-service',
  },
  {
    id: 'slide-4',
    badge: 'Automobile Finance',
    title: 'Vehicle Loan Scheme',
    subtitle: 'Drive Home Your Dream Two-Wheeler or Four-Wheeler',
    description:
      'Approvals and pocket-friendly EMIs for two-wheelers, light motor vehicles, and commercial vehicles with quick disbursement.',
    highlight: 'Affordable Financing & Quick Disbursement',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    ctaText: 'Explore Vehicle Loans',
    ctaLink: '#request-service',
  },
  {
    id: 'slide-5',
    badge: 'Immediate Cash',
    title: 'Instant Gold Loans with Us',
    subtitle: 'Fast Liquidity against Gold Ornaments',
    description:
      'Unlock the value of your gold jewelry with immediate appraisal, fair valuation, and maximum security storage in certified bank-grade vaults.',
    highlight: 'Instant Disbursal against Gold',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80',
    ctaText: 'Get Gold Loan Details',
    ctaLink: '#request-service',
  },
  {
    id: 'slide-6',
    badge: 'One-Stop Banking',
    title: 'Utility Bill Payments, NEFT / RTGS & ECS / NACH Facilities',
    subtitle: 'Comprehensive Banking & Payment Services for Members',
    description:
      'Pay your Electricity and Water bills hassle-free at our counters, send instant nationwide funds via NEFT/RTGS, and manage electronic clearance with ECS/NACH services.',
    highlight: 'Convenient Utility & Electronic Services',
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    ctaText: 'View All Services',
    ctaLink: '#services',
  },
];

// All Services (Deposit Schemes, Loan Schemes, Utility Services)
export const DEPOSIT_SCHEMES: ServiceItem[] = [
  {
    id: 'saving-deposit',
    category: 'deposit',
    title: 'Saving Deposit',
    subtitle: 'Everyday Savings with Liquidity',
    description:
      'Flexible savings account designed for daily liquidity, enabling members to save money securely. Includes passbook and withdrawal slip facilities.',
    features: [
      'Safe and accessible savings for all community members',
      'No hidden charges for rural members',
      'Passbook and account statement on demand',
      'Easy nomination and joint account facilities',
    ],
    badge: 'Daily Savings',
  },
  {
    id: 'current-deposit',
    category: 'deposit',
    title: 'Current Deposit',
    subtitle: 'Tailored for Traders & Local Businesses',
    description:
      'Convenient transactional account for local merchants, farmers, self-employed professionals, and agricultural entrepreneurs requiring frequent withdrawals and deposits.',
    features: [
      'High daily transaction limits for business needs',
      'Convenient local cheque collection & clearing facility',
      'Detailed monthly ledger statements',
      'Overdraft eligibility on member tenure',
    ],
    badge: 'For Business & Trade',
  },
  {
    id: 'recurring-deposit',
    category: 'deposit',
    title: 'Recurring Deposit (RD)',
    subtitle: 'Disciplined Monthly Wealth Accumulation',
    description:
      'Build substantial capital by depositing a fixed manageable sum every month. Ideal for planning upcoming festive expenses, children’s higher education, or agricultural inputs.',
    features: [
      'Flexible tenures tailored to your savings goals',
      'Guaranteed savings payout upon maturity',
      'Loan facility available against accumulated RD balance',
      'Standing instructions enabled directly from Savings account',
    ],
    badge: 'Disciplined Growth',
  },
  {
    id: 'fixed-deposit',
    category: 'deposit',
    title: 'Fixed Deposit (FD)',
    subtitle: 'Guaranteed Returns on Lump Sums',
    description:
      'Lock in safe, guaranteed growth for your hard-earned funds with versatile duration choices, protected under cooperative regulations.',
    features: [
      'Choice of cumulative reinvestment or regular payout',
      'Special benefits for Senior Citizens',
      'Loan facility available against Fixed Deposit',
      'Premature withdrawal options available as per rules',
    ],
    badge: 'Secure Growth',
  },
  {
    id: 'pigmy-deposit',
    category: 'deposit',
    title: 'Pigmy Deposit',
    subtitle: 'Doorstep Daily Collection Scheme',
    description:
      'Our iconic community savings program where authorized society collection agents visit your doorstep, shop, or farm daily to collect micro-savings.',
    features: [
      'Daily doorstep collection by trusted society agents',
      'Instant computerized receipt confirmation',
      'Encourages daily saving habit for vendors, drivers, and artisans',
      'Emergency loan eligibility based on savings track record',
    ],
    badge: 'Doorstep Service',
  },
  {
    id: 'monthly-quarterly-interest',
    category: 'deposit',
    title: 'Monthly & Quarterly Interest Scheme',
    subtitle: 'Regular Monthly/Quarterly Cashflow',
    description:
      'Designed specifically for retirees, senior citizens, and households seeking a steady, dependable monthly or quarterly income stream directly credited to their savings account.',
    features: [
      'Monthly or quarterly direct credit to your Savings account',
      'Principal remains 100% intact until maturity tenure',
      'Ideal for retirees and steady household budgeting',
      'Auto-renewal options upon term expiry',
    ],
    badge: 'Senior Citizen Friendly',
  },
];

export const LOAN_SCHEMES: ServiceItem[] = [
  {
    id: 'personal-business-loan',
    category: 'loan',
    title: 'Personal / Business Loan',
    subtitle: 'Flexible Capital for Personal Needs & Enterprise',
    description:
      'Quick financial support for family medical emergencies, festive ceremonies, inventory purchases, or local retail expansion with transparent terms.',
    features: [
      'Prompt processing with easy community guarantor terms',
      'No punitive pre-payment closure penalty',
      'Flexible tenures with equated monthly installments',
      'Transparent documentation and quick sanction',
    ],
    badge: 'Personal & Business',
  },
  {
    id: 'house-loan',
    category: 'loan',
    title: 'House Loans',
    subtitle: 'Realize Your Home Ownership Dreams',
    description:
      'Affordable mortgage loans tailored for buying residential plots, constructing new homes, or carrying out major renovations and structural extensions across Goa.',
    features: [
      'Long repayment tenures suited for home builders',
      'Affordable processing charges',
      'Special terms for agricultural families',
      'Legal appraisal guidance provided by society panel',
    ],
    badge: 'Housing Finance',
  },
  {
    id: 'gold-loan',
    category: 'loan',
    title: 'Gold Loan',
    subtitle: 'Instant Cash against Gold Ornaments',
    description:
      'Hassle-free, immediate liquidity against your gold ornaments. Accurate on-the-spot appraisal and safety insured in fireproof security vaults.',
    features: [
      'Disbursal across branch counters',
      'Fair valuation as per prevailing market rates',
      'Flexible repayment options',
      'Safe custody in bank-grade certified vaults',
    ],
    badge: 'Instant Disbursal',
  },
  {
    id: 'two-wheeler-loan',
    category: 'loan',
    title: 'Two Wheeler Loan',
    subtitle: 'Ride Your New Scooter or Motorcycle',
    description:
      'Own your personal motorcycle, electric scooter, or moped with easy down-payments and customized repayment schedules designed for daily commuters.',
    features: [
      'Convenient on-road financing options',
      'Quick sanction upon document submission',
      'Flexible monthly repayment installments',
      'Tie-ups with local automobile dealerships',
    ],
    badge: 'Quick Sanction',
  },
  {
    id: 'light-motor-vehicle-loan',
    category: 'loan',
    title: 'Light Motor Vehicle (Four Wheeler) Loan',
    subtitle: 'Drive Your Family Car or Commercial Van',
    description:
      'Affordable vehicle financing for purchasing new or certified pre-owned passenger hatchbacks, sedans, SUVs, and light commercial delivery vans.',
    features: [
      'Financing for personal and commercial vehicles',
      'Comfortable repayment tenures',
      'Convenient down-payment options',
      'Fast-track approval for society members',
    ],
    badge: 'Vehicle Finance',
  },
  {
    id: 'salary-deduction-loans',
    category: 'loan',
    title: 'Salary Deduction Loans for Govt Employees',
    subtitle: 'Exclusive Facilities for State & Central Staff',
    description:
      'Special streamlined credit scheme for Government of Goa and Central Government employees, with repayments executed via monthly payroll deductions.',
    features: [
      'Simplified loan sanction with direct payroll arrangement',
      'Exclusive terms for public servants',
      'Direct monthly salary mandate execution via DDO',
      'Minimal paperwork and fast disbursal',
    ],
    badge: 'Govt Employees',
  },
];

export const UTILITY_SERVICES: ServiceItem[] = [
  {
    id: 'electricity-water-bills',
    category: 'service',
    title: 'Electricity & Water Bills Payment',
    subtitle: 'No Waiting in Queues at Government Counters',
    description:
      'Convenient, dedicated bill payment counters across all our branch offices for settling Goa Electricity Department bills and PWD Water Department bills.',
    features: [
      'Instant official computerized payment receipt provided',
      'Avoid long queues at taluka treasury or government electricity sub-stations',
      'Pay via cash, member account transfer, or cheque',
      'Zero convenience surcharge or hidden convenience fees',
    ],
    badge: 'Community Convenience',
  },
  {
    id: 'neft-rtgs-services',
    category: 'service',
    title: 'NEFT / RTGS Services',
    subtitle: 'Instant Nationwide Interbank Money Transfer',
    description:
      'Transfer funds swiftly and securely to any commercial, cooperative, or nationalized bank account across India through Reserve Bank of India’s NEFT and RTGS networks.',
    features: [
      'Safe, reliable electronic bank-to-bank settlements',
      'RTGS for high-value immediate fund settlements (> Rs. 2 Lakhs)',
      'NEFT for flexible recurring payments, supplier settlements, and school fees',
      'Assisted branch counter processing with SMS confirmation',
    ],
    badge: 'Nationwide Transfer',
  },
  {
    id: 'ecs-nach-services',
    category: 'service',
    title: 'ECS / NACH Services',
    subtitle: 'Automated Electronic Clearing Services',
    description:
      'Electronic Clearing Service (ECS) and National Automated Clearing House (NACH) facilities for automatic debits and credits.',
    features: [
      'Hassle-free automated payment of insurance premiums, loan EMIs, and SIPs',
      'Seamless direct credit of government subsidies and pension transfers',
      'Eliminates the need for writing and tracking post-dated physical cheques',
      'Fully compliant with National Payments Corporation of India (NPCI) mandates',
    ],
    badge: 'Automated Clearing',
  },
];

// Board of Directors (Page 3 & Page 4)
export const BOARD_MEMBERS: Director[] = [
  {
    id: 'bod-1',
    name: 'Shri. Rameshwar V. Parab',
    designation: 'Chairman',
    period: '2026 - 2031',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Dedicated agriculturalist and community leader guiding the society’s sustainable vision and financial governance.',
  },
  {
    id: 'bod-2',
    name: 'Shri. Ashok D. Morajkar',
    designation: 'Vice Chairman',
    period: '2026 - 2031',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'Experienced cooperative advocate overseeing loan appraisal integrity and member welfare programs.',
  },
  {
    id: 'bod-3',
    name: 'Smt. Sunita S. Narvekar',
    designation: 'Secretary',
    period: '2026 - 2031',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Heading executive management, regulatory compliance with the Registrar of Co-operative Societies, and audits.',
  },
  {
    id: 'bod-4',
    name: 'Shri. Dilip P. Chodankar',
    designation: 'Director',
    period: '2026 - 2031',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    bio: 'Focusing on farmer welfare, fertilizer subsidy coordination, and agricultural credit schemes.',
  },
  {
    id: 'bod-5',
    name: 'Shri. Anand R. Harmalkar',
    designation: 'Director',
    period: '2026 - 2031',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    bio: 'Guiding branch infrastructure upgrades and Pigmy deposit field operations.',
  },
  {
    id: 'bod-6',
    name: 'Smt. Pratima K. Verlekar',
    designation: 'Director',
    period: '2026 - 2031',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'Championing women’s self-help groups (SHG), micro-enterprise loans, and local handicrafts.',
  },
  {
    id: 'bod-7',
    name: 'Shri. Santosh B. Shirodkar',
    designation: 'Director',
    period: '2026 - 2031',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    bio: 'Supervising member loan recovery mechanisms, ethical standards, and legal compliance.',
  },
  {
    id: 'bod-8',
    name: 'Shri. Mahesh G. Govekar',
    designation: 'Director',
    period: '2026 - 2031',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    bio: 'Spearheading social responsibility drives, school kits distribution, and medical health camps.',
  },
  {
    id: 'bod-9',
    name: 'Shri. Pravin N. Salgaonkar',
    designation: 'Director',
    period: '2026 - 2031',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'Coordinating youth employment guidance, vehicle loan facilities, and digital banking services.',
  },
];

// Branches (Page 4)
export const BRANCHES: Branch[] = [
  {
    id: 'head-office',
    name: 'Head Office (Parra)',
    isHeadOffice: true,
    address: 'H.No. 128/A, Central Market Road, Near St. Anne’s Church, Parra, Bardez, Goa - 403510',
    phone: '0832 - 2272345',
    mobile: '+91 98221 45678',
    email: 'headoffice@pvcmpacs.coop',
    workingHours: 'Mon - Sat: 9:00 AM - 5:00 PM (Cash: 9:30 AM - 3:30 PM)',
    landmark: 'Opposite Village Panchayat Office, Parra',
  },
  {
    id: 'parra-branch',
    name: 'Parra Branch',
    isHeadOffice: false,
    address: 'Shop No. 4 & 5, Verla-Parra Commercial Complex, Verla Junction, Goa - 403510',
    phone: '0832 - 2272890',
    mobile: '+91 98221 45679',
    email: 'parra.branch@pvcmpacs.coop',
    workingHours: 'Mon - Sat: 9:00 AM - 5:00 PM (Cash: 9:30 AM - 3:30 PM)',
    landmark: 'Near Verla Tintto Bus Stop',
  },
  {
    id: 'vagator-branch',
    name: 'Vagator Branch',
    isHeadOffice: false,
    address: 'Building No. 12, Main Chapora - Vagator Beach Road, Vagator, Bardez, Goa - 403509',
    phone: '0832 - 2273114',
    mobile: '+91 98221 45680',
    email: 'vagator.branch@pvcmpacs.coop',
    workingHours: 'Mon - Sat: 9:00 AM - 5:00 PM (Cash: 9:30 AM - 3:30 PM)',
    landmark: 'Near Vagator Petrol Pump Junction',
  },
  {
    id: 'arpora-branch',
    name: 'Arpora Branch',
    isHeadOffice: false,
    address: 'Ground Floor, Green View Arcade, Arpora-Baga Main Road, Arpora, Bardez, Goa - 403518',
    phone: '0832 - 2274556',
    mobile: '+91 98221 45681',
    email: 'arpora.branch@pvcmpacs.coop',
    workingHours: 'Mon - Sat: 9:00 AM - 5:00 PM (Cash: 9:30 AM - 3:30 PM)',
    landmark: 'Opposite Arpora Sports Ground',
  },
];

// Social Activities (Page 3 & Page 6)
export const SOCIAL_ACTIVITIES: SocialActivity[] = [
  {
    id: 'act-1',
    title: 'Annual School Kits & Educational Supplies Distribution',
    category: 'School Kits',
    date: 'June 2025',
    description:
      'Distributed complete school kit sets (bags, notebooks, geometry boxes, and water bottles) to over 350 deserving village students across government and government-aided schools in Parra, Verla, and Canca.',
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'act-2',
    title: 'Academic Excellence Felicitation Ceremony',
    category: 'Felicitation',
    date: 'July 2025',
    description:
      'Honored and awarded cash incentives & mementos to meritorious children of society members who excelled in SSC (10th) and HSSC (12th) Goa Board examinations.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'act-3',
    title: 'Senior Citizen & Veteran Member Felicitation',
    category: 'Felicitation',
    date: 'October 2025',
    description:
      'Warmly felicitated long-standing senior citizen members of the society with traditional Goan shawls and tokens of gratitude for their decades of trust and loyalty.',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'act-5',
    title: 'Felicitation of Progressive Agriculturalists & Farmers',
    category: 'Agriculture',
    date: 'January 2026',
    description:
      'Recognized innovative paddy farmers and organic vegetable growers with modern farming kits and organic bio-fertilizer vouchers to boost sustainable agriculture.',
    imageUrl: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'act-6',
    title: 'Community Health & Eye Check-up Camp',
    category: 'Community',
    date: 'February 2026',
    description:
      'Organized free health diagnostics, blood pressure screenings, and eye examination camps with subsidized corrective spectacles distributed to rural senior members.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  },
];
