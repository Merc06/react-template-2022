import { CancelTokenSource } from 'axios';

type RouteProps = {
    key: string;
    path: string;
    label: string;
    component: JSX.Element;
    icon?: JSX.Element;
};

type CancellationKeys = {
    key: string;
    cancellation: CancelTokenSource;
};

export type {
    RouteProps,
    CancellationKeys,
}