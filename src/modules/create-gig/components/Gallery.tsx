import { FileInfo } from '@uploadcare/react-widget';
import { Dispatch, SetStateAction } from 'react';
import toast from 'react-hot-toast';
import noImage from '../../../images/no-image.jpeg';
import noVideo from '../../../images/no-video.png';
import { IconSquareEdit } from '../../common/components/Icons';
import Uploader from '../../common/components/Uploader';
import { GalleryProps } from '../types';

interface Props {
    img1: GalleryProps; setImg1: Dispatch<SetStateAction<GalleryProps>>;
    img2: GalleryProps; setImg2: Dispatch<SetStateAction<GalleryProps>>;
    img3: GalleryProps; setImg3: Dispatch<SetStateAction<GalleryProps>>;
    video: GalleryProps; setVideo: Dispatch<SetStateAction<GalleryProps>>;
    doc1: GalleryProps; setDoc1: Dispatch<SetStateAction<GalleryProps>>;
    doc2: GalleryProps; setDoc2: Dispatch<SetStateAction<GalleryProps>>;
}

const Gallery = ({
    img1, setImg1,
    img2, setImg2,
    img3, setImg3,
    video, setVideo,
    doc1, setDoc1,
    doc2, setDoc2,
}: Props) => {
    const onUpload = ({ cdnUrl }: FileInfo, type: string) => {
        type === 'IMG1' ?
        setImg1({ type: 'images', files: cdnUrl || '' }) :
        type === 'IMG2' ?
        setImg2({ type: 'images', files: cdnUrl || '' }) :
        type === 'IMG3' ?
        setImg3({ type: 'images', files: cdnUrl || '' }) :
        type === 'VIDEO' ?
        setVideo({ type: 'video', files: cdnUrl || '' }) :
        type === 'DOC1' ?
        setDoc1({ type: 'documents', files: cdnUrl || '' }) :
        type === 'DOC2' ?
        setDoc2({ type: 'documents', files: cdnUrl || '' }) :
        toast.error('Invalid File Type');
    };

    return (
        <div className='p-4 grid grid-cols-1 divide-y'>
            <div className="flex flex-col space-y-1 pb-3">
                <p className='text-sm font-bold'>SHOWCASE YOUR SERVICES IN YOUR GIG GALLERY</p>
                <small className='text-xxs text-gray-400'>Encourage buyers to choose your Gig by featuring a variety of work.</small>
            </div>

            <div className='py-3'>
                <p className='text-xs font-bold'>Images (up to 3)</p>
                <small className='text-xxs text-gray-400 italic'>Only upload .jpeg and .png files</small>

                <div className="flex items-center space-x-3 mt-3">
                    <div className="flex flex-col items-center">
                        {
                            img1.files ?
                            <img src={img1.files} alt="Uploaded" className="h-20 w-20 border" /> :
                            <img src={noImage} alt="Uploaded" className="h-20 w-20 border" />
                        }

                        <Uploader
                            onSuccess={(res) => onUpload(res, 'IMG1')}
                            imagesOnly
                            imgClassname="m-auto"
                            className="flex items-center cursor-pointer text-xxs space-y-1"
                            tabs={['file']}
                        >
                            <IconSquareEdit className="text-blue-700" />
                            <h1 className="text-blue-700 font-medium">Change</h1>
                        </Uploader>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        {
                            img2.files ?
                            <img src={img2.files} alt="Uploaded" className="h-20 w-20 border" /> :
                            <img src={noImage} alt="Uploaded" className="h-20 w-20 border" />
                        }

                        <Uploader
                            onSuccess={(res) => onUpload(res, 'IMG2')}
                            imagesOnly
                            imgClassname="m-auto"
                            className="flex items-center cursor-pointer text-xxs space-y-1"
                            tabs={['file']}
                        >
                            <IconSquareEdit className="text-blue-700" />
                            <h1 className="text-blue-700 font-medium">Change</h1>
                        </Uploader>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        {
                            img3.files ?
                            <img src={img3.files} alt="Uploaded" className="h-20 w-20 border" /> :
                            <img src={noImage} alt="Uploaded" className="h-20 w-20 border" />
                        }

                        <Uploader
                            onSuccess={(res) => onUpload(res, 'IMG3')}
                            imagesOnly
                            imgClassname="m-auto"
                            className="flex items-center cursor-pointer text-xxs space-y-1"
                            tabs={['file']}
                        >
                            <IconSquareEdit className="text-blue-700" />
                            <h1 className="text-blue-700 font-medium">Change</h1>
                        </Uploader>
                    </div>
                </div>
            </div>

            <div className='py-3'>
                <p className='text-xs font-bold'>Videos (Only one)</p>
                <small className='text-xxs text-gray-400 italic'>Only upload an .mp4, .mov and .mpg2 files</small>

                <div className="flex items-center space-x-3 mt-3">
                    <div className="flex flex-col items-center">
                        {
                            video.files ?
                            <iframe width="100%" height="auto" title='Uploaded Video' src={video.files} /> :
                            <img src={noVideo} alt="Uploaded" className="h-20 w-20 border" />
                        }

                        <Uploader
                            onSuccess={(res) => onUpload(res, 'VIDEO')}
                            imgClassname="m-auto"
                            className="flex items-center cursor-pointer text-xxs space-y-1"
                            tabs={['file']}
                        >
                            <IconSquareEdit className="text-blue-700" />
                            <h1 className="text-blue-700 font-medium">Change</h1>
                        </Uploader>
                    </div>
                </div>
            </div>

            <div className='py-3'>
                <p className='text-xs font-bold'>Documents (up to 2)</p>
                <small className='text-xxs text-gray-400 italic'>Only upload .pdf files</small>

                <div className="flex items-center space-x-3 mt-3">
                    <div className="flex flex-col items-center">
                        {
                            doc1.files ?
                            <iframe width="100%" height="auto" title='Uploaded Docs' src={doc1.files} /> :
                            <img src={noImage} alt="Uploaded" className="h-20 w-20 border" />
                        }

                        <Uploader
                            onSuccess={(res) => onUpload(res, 'DOC1')}
                            imgClassname="m-auto"
                            className="flex items-center cursor-pointer text-xxs space-y-1"
                            tabs={['file']}
                        >
                            <IconSquareEdit className="text-blue-700" />
                            <h1 className="text-blue-700 font-medium">Change</h1>
                        </Uploader>
                    </div>

                    <div className="flex flex-col items-center">
                        {
                            doc2.files ?
                            <iframe width="100%" height="auto" title='Uploaded Docs' src={doc2.files} /> :
                            <img src={noImage} alt="Uploaded" className="h-20 w-20 border" />
                        }

                        <Uploader
                            onSuccess={(res) => onUpload(res, 'DOC2')}
                            imgClassname="m-auto"
                            className="flex items-center cursor-pointer text-xxs space-y-1"
                            tabs={['file']}
                        >
                            <IconSquareEdit className="text-blue-700" />
                            <h1 className="text-blue-700 font-medium">Change</h1>
                        </Uploader>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;

