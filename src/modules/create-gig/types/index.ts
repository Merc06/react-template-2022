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

export type {
    Steps,
    OverviewProps,
    CategoryProps,
}