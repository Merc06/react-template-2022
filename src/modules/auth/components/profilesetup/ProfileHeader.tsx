import React from 'react';
import { ChevronLeft } from '../../../common/components/Icons';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import GigLogo from '../../../../images/GigLogo.png';

const ProfileHeader = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
  <div className="flex items-center justify-between p-4">
    <img src={GigLogo} alt="GigLogo" className="object-contain h-6" />
    <div className="flex space-x-1 items-center">
      <ChevronLeft className="text-blue-700" />
      <button 
        onClick={handleOpen}
        className="text-blue-700 text-xxs font-semibold">
        Back to user selection
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="flex items-center justify-center">
            <div className="flex absolute top-1/4 flex-col space-y-4 transform w-72 bg-white rounded-md shadow-md px-4 py-7">
              <p className="text-sm text-gray-700 text-center">
                All unsaved changes will be discarded. <br />
                Do you wish to continue?
              </p>
              <div className="flex space-x-3 justify-center">
                <button className='w-20 text-xs py-1 bg-blue-900 rounded-md uppercase text-white'>
                  Yes
                </button>
                <button 
                  onClick={handleClose}
                  className='w-20 text-xs py-1 bg-gray-400 rounded-md uppercase text-white'>
                    No
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  </div>
  );
};

export default ProfileHeader;
