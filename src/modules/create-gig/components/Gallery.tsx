import { FileInfo } from '@uploadcare/react-widget';
import noImage from '../../../images/no-image.jpeg';
import noVideo from '../../../images/no-video.png';
import { IconSquareEdit } from '../../common/components/Icons';
import Uploader from '../../common/components/Uploader';

const Gallery = () => {
    const onUploadLogo = (fileInfo: FileInfo) => {
        console.log(fileInfo)
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
                        <img src={noImage} alt="Display" className="h-20 w-20 border" />

                        <Uploader
                            onSuccess={onUploadLogo}
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
                        <img src={noImage} alt="Display" className="h-20 w-20 border" />

                        <Uploader
                            onSuccess={onUploadLogo}
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
                        <img src={noImage} alt="Display" className="h-20 w-20 border" />

                        <Uploader
                            onSuccess={onUploadLogo}
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
                        <img src={noVideo} alt="Display" className="h-20 w-20 border" />

                        <Uploader
                            onSuccess={onUploadLogo}
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
                <p className='text-xs font-bold'>Documents (up to 2)</p>
                <small className='text-xxs text-gray-400 italic'>Only upload .pdf files</small>

                <div className="flex items-center space-x-3 mt-3">
                    <div className="flex flex-col items-center">
                        <img src={noImage} alt="Display" className="h-20 w-20 border" />

                        <Uploader
                            onSuccess={onUploadLogo}
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
                        <img src={noImage} alt="Display" className="h-20 w-20 border" />

                        <Uploader
                            onSuccess={onUploadLogo}
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
        </div>
    );
};

export default Gallery;