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
  id: string;
  profile_status: string;
  email: string;
  profile_type: string;
  profile_role: string;
  contact: string;
  verified: number;
  first_name: string;
  last_name: string;
  photo: string;
  description: string;
  website: string;
  language: Array<LanguageProps>;
  username: string;
};



export type {
    RouteProps,
    CancellationKeys,
    ProfileProps,
    
}