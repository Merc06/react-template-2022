import { FC, ReactNode } from 'react';

import { CancelTokenSource } from 'axios';
import { LanguageProps } from '../../profilesetup/types';

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
  
type ProfileProps = {
  email: string;
  description: string;
  first_name: string;
  id: string;
  language: Array<LanguageProps>;
  last_name: string;
  photo: string;
  profile_status: string;
  verified: number;
  website: string;
};



export type {
    RouteProps,
    CancellationKeys,
    ProfileProps,
    
}