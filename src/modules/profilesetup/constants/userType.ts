import Seller from '../../../images/Seller.png';
import Manager from '../../../images/Manager.png';
import RoleManager from '../../../images/role-manager.png';
import RoleScholar from '../../../images/role-scholar.png';

export const UserTypeItems = [
    {
      img: Seller, 
      title: 'I want to be a seller',
      SubTitle: 'Post freelance gigs and earn',
      Button: 'BECOME A SELLER',
      style: 'bg-accent w-full text-grayblack font-bold',
      type: 'Seller'
    },
    {
      img: Manager, 
      title: 'I want to be a manager',
      SubTitle: 'Hire freelancers and scholars for your project',
      Button: 'BECOME A MANAGER',
      style: 'bg-grayblack w-full text-white font-bold',
      type: 'Manager'
    }
];

export const ProfileRoleItems = [
    {
      img: RoleManager, 
      title: 'Hire scholars to work on your project',
      SubTitle: 'Post freelance gigs and earn',
      Button: 'BECOME A MANAGER',
      style: 'bg-accent w-full text-grayblack font-bold',
      type: 'Manager'
    },
    {
      img: RoleScholar, 
      title: 'I want to be a scholar',
      SubTitle: 'Hire freelancers and scholars for your project',
      Button: 'APPLY TO BE A SCHOLAR',
      style: 'bg-grayblack w-full text-white font-bold',
      type: 'Scholar'
    }
];