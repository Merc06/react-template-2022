import { FC, ReactNode } from 'react';

import { CancelTokenSource } from 'axios';

type RouteProps = {
    key: string;
    path: string;
    label: string;
    component: JSX.Element;
};

type CancellationKeys = {
    key: string;
    cancellation: CancelTokenSource;
  };
  
  type ProfileProps = {
    company_category?: string;
    company_code?: string;
    company_id?: string;
    company_logo?: string;
    company_name: string;
    company_type?: string;
    country: string;
    credits: string;
    department?: string;
    department_id?: number;
    email: string;
    first_login?: number;
    first_name: string;
    id: number;
    industry?: string;
    industry_id?: number;
    initial?: string;
    job_title?: string;
    last_name: string;
    level_two_signature?: string;
    level_two_status?: string;
    middle_name: string;
    photo: string;
    plan_id?: number;
    profile_id: number;
    referral_link?: string;
    role?: string;
    seal?: string;
    selfie_with_signature?: string;
    simple_signature?: string;
    team_role?: string;
    valid_id?: string;
    valid_id_card?: string;
    signature?: string;
    notification_channel: string;
    placeholder?: object;
  };

export type {
    RouteProps,
    CancellationKeys,
    ProfileProps
}