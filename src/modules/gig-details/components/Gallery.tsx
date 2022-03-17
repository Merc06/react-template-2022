import _ from 'lodash';

import { useLocation } from 'react-router-dom';
import { AllGigListProps } from '../../gig-post/types';
import noImage from '../../../images/no-image.jpeg';
import noVideo from '../../../images/no-video.png';

const Gallery = () => {
    const location = useLocation();
    const state = location.state as AllGigListProps;

    const getVideo = () => {
        const videoObject = state.gallery.filter((item) => item.type === 'video');
        return videoObject;
    }

    return (
        <div className="grid grid-rows gap-2 px-3">
            <div className="w-full">
            {
                !_.isEmpty(getVideo()) ?
                <iframe src={getVideo()[0]?.files} title="Profile Illustration" /> :
                <img src={noVideo} alt="Gallery Illustration" className="mx-auto" />
            }
            </div>
            <div className="grid grid-cols-3 gap-x-2">
                {
                    state.gallery.filter((item) => item.type === 'images').map((item, key) => (
                        <img key={key} src={item.files || noImage} alt="Gallery Illustration" className="object-contain" />
                    ))
                }
            </div>
        </div>
    );
};

export default Gallery;