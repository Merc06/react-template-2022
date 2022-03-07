interface Steps {
    label: string;
    component: JSX.Element;
}

interface OverviewProps {
    category: string;
    category_id: number;
    client_id: number;
    id: number;
    subcategory: string;
    subcategory_id: number;
    tag: string;
    title: string;
}

interface CategoryProps {
    banner: string;
    id: number;
    logo: string;
    name: string;
}

interface FaqListProps {
    client_id: number;
    created_at: string | Date;
    id: number;
    question: string;
    updated_at: string | Date;
    answer: string;
};

interface FaqDescriptionListProps {
    client_id: number;
    description: string;
    faq: FaqListProps;
    id: number;
}

interface FaqProps {
    id: number;
    answer: string;
    question: string;
}

interface OverviewInfoProps {
    title: string;
    category: string;
    subcategory: string;
    tag: string;
}


interface PackageProps {
    gig_id: number | string;
    package: string;
    package_name: string;
    package_description: string;
    delivery_time: string;
    price: number;
    inclusion_one: string;
    inclusion_two: string;
    inclusion_three: string;
}

export type {
    Steps,
    OverviewProps,
    CategoryProps,
    FaqListProps,
    FaqDescriptionListProps,
    FaqProps,
    OverviewInfoProps,
    PackageProps,
}