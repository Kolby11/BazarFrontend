export interface Listing {
   id: number;
   name: string;
   category_id: number;
   price: number;
   locality: string;
   description: string;
   watch_count: number;
}
export interface Category {
   id: number;
   name: string;
}

export interface User {
   id: number;
   username: string;
   phone_number: string;
   email: string;
}

export interface SecureUser {
   id: number | undefined;
   username: string;
   password: string;
   email: string;
   phone_number: string;
}

export interface LoginCredentials {
   email: string;
   password: string;
}
