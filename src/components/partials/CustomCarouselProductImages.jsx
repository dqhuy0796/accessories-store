import { Carousel } from '@material-tailwind/react';

function CustomCarouselProductImages({ images }) {
    return (
        <div className="relative pt-[calc(100%*4/3)]">
            <div className="absolute inset-0 z-0">
                <Carousel
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill('').map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                        activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                                    }`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}
                >
                    {images.map(({ public_id, secure_url }) => (
                        <img key={public_id} src={secure_url} alt={public_id} className="h-full w-full object-cover" />
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default CustomCarouselProductImages;
