export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  startingPrice: string;
  iconName: string;
}
