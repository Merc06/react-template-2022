import Seller from '../../../images/img-seller-default.png';
import Buyer from '../../../images/img-buyer-default.png';
import RoleManager from '../../../images/img-manager-default.png';
import RoleScholar from '../../../images/img-scholar-default.png';

export const UserTypeItems = [
    {
      img: Seller, 
      title: 'I want to sell gigs',
      SubTitle: 'Post freelance gigs and earn',
      Button: 'BECOME A SELLER',
      style: 'bg-accent w-full text-grayblack font-bold',
      type: 'Seller'
    },
    {
      img: Buyer, 
      title: 'I want to buy gigs',
      SubTitle: 'Hire freelancers for your project',
      Button: 'BECOME A BUYER',
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