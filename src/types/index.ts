export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  department: string;
  imageUrl: string;
  education: string;
  experience: number;
  averageRating: number;
  totalReviews: number;
}

export interface Review {
  id: string;
  doctorId: string;
  userId: string;
  userName: string;
  date: string;
  professionalismRating: number;
  knowledgeRating: number;
  communicationRating: number;
  waitTimeRating: number;
  overallRating: number;
  comment: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isAuthenticated: boolean;
}