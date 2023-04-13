export type Listing = {
   id: number;
   name: string;
   category_id: number;
   price: number;
   locality: string;
   description: string;
   watch_count: number;
};
export type Category = {
   id: number;
   name: string;
};

export type User = {};
