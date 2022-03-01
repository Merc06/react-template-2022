interface Steps {
    label: string;
    component: JSX.Element;
}

interface OverviewProps {
    title: string;
    category_id: number;
    subcategory_id: number;
    tag: string;
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

interface FaqProps {
    answer: string;
    question: string;
}

export type {
    Steps,
    OverviewProps,
    CategoryProps,
    FaqListProps,
    FaqProps,
}