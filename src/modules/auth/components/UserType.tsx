import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../../common/apis';
import Button from '../../common/components/Button';

import { IconPlay } from '../../common/components/Icons';
import { signupUserType } from '../apis';
import { Items } from '../constants/userType';

const UserType = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getProfile();
  }, []);

  const onChoose = (type: string): void => {
    signupUserType({ type }, () => {
      navigate('/profile-setup');
    });
  }

  return (
    <div className="flex flex-col items-center py-12 px-6">
      <h1 className="text-grayblack text-2xl font-semibold">Get Started</h1>
      <p className="mt-8 text-xs text-gray-500 text-center">
        Please select an account type below <br /> and complete setting up your profile.
      </p>

      <div className="flex flex-col p-4">
      {
        Items.map((item, key) => (
          <div key={key} className="p-5 flex space-y-3 flex-col items-center border border-gray-600 rounded-2xl w-full mt-5">
            <img src={item.img} alt="Seller Illustration" className="h-32" />
            <div className="flex flex-col space-y-1 pb-5">
              <h1 className="text-grayblack text-center text-lg font-semibold">{item.title}</h1>
              <p className="text-xs text-gray-500 text-center">{item.SubTite}</p>
            </div>
            <Button
              className={item.style}
              onClick={() => onChoose(item.type)}
            >
              {item.Button}
            </Button>
          </div>
        ))
      }
      </div>

      <div className="flex space-x-1 items-center">
        <IconPlay />
        <h1 className="text-sm">How DOC Gig Works</h1>
      </div>
    </div>
  );
};

export default UserType;
