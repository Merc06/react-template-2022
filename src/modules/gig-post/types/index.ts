interface AllGigListProps {
    name: string;
    tag: string;
    description: string;
    status: string;
    client: Array<Client>;
    pricing: Array<Pricing>;
    category: Array<Category>;
    subCategory: Array<Category>;
    gig_description: Array<any>;
    gallery: Array<Gallery>;
}

interface Gallery {
    client_id: number;
    files: string;
    gig_id: number;
    id: number;
    type: string;
}

interface Category {
    id: number;
    name: string;
    logo: string;
    banner: string;
}

interface Pricing {
    id: number;
    client_id: number;
    gig_id: number,
    package: string;
    package_name: string;
    inclusion_one: string;
    inclusion_two: string;
    inclusion_three: string;
    package_description: string;
    delivery_time: string;
    price: number,
}

interface Client {
    id: number;
    verified: number;
    profile_status: string;
    country: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    contact: string;
    photo: string;
    description: string;
    personal_website: string;
    language: Array<string>,
    level: string,
}

export type {
    AllGigListProps,
    Gallery,
    Pricing
}