import Carousel from 'react-multi-carousel';
import { useFetchProducts } from '../hooks/useFetchProducts';
// components
import CarouselCard from './CarouselCard';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

export default function CardCarousel() {
    const { data, isLoading, error } = useFetchProducts('desc');

    return (
        <section className='p-3 mt-10'>
            <h3 className='text-center mb-4 font-bold'>You might like these:</h3>
            <Carousel responsive={responsive} arrows={true} infinite={true} autoPlay={true}>
                {isLoading && <p className='text-center'>Loading...</p>}
                {data && data.map(product => (
                    <div key={product.id} className='mx-3'>
                        <CarouselCard product={product} />
                    </div>
                ))}
            </Carousel>
        </section>
    );
}