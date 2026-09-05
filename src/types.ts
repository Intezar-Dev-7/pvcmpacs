export interface ServiceItem {
  id: string;
  category: 'deposit' | 'loan' | 'service';
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  interestRate?: string;
  badge?: string;
}

export interface Director {
  id: string;
  name: string;
  designation: 'Chairman' | 'Vice Chairman' | 'Secretary' | 'Director';
  period: string;
  image: string;
  bio?: string;
}

export interface Branch {
  id: string;
  name: string;
  isHeadOffice?: boolean;
  address: string;
  phone: string;
  mobile: string;
  email: string;
  workingHours: string;
  landmark?: string;
}

export interface SocialActivity {
  id: string;
  title: string;
  category: 'School Kits' | 'Felicitation' | 'Community' | 'Agriculture';
  date: string;
  description: string;
  imageUrl: string;
}

export interface ServiceRequestForm {
  name: string;
  email: string;
  phone: string;
  serviceCategory: string;
  serviceName: string;
  branch: string;
  message: string;
}
