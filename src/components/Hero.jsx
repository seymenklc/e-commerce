import { Carousel } from 'react-responsive-carousel';
// assets
import imgOne from '../assets/img-1.jpg';
import imgTwo from '../assets/img-2.jpg';
import imgThree from '../assets/img-3.jpg';
import imgFour from '../assets/img-4.jpg';

const featured = [imgOne, imgTwo, imgThree, imgFour];

export default function Hero() {
    return (
        <section>
            <div className='p-5'>
                <Carousel
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}
                >
                    {featured.map((img, idx) => (
                        <img
                            key={img}
                            src={featured[idx]}
                            alt="hero-img"
                            className="object-cover object-center w-full max-h-[32rem]"
                        />
                    ))}
                </Carousel>
            </div>
            <p className='text-center'>
                <button
                    className='font-semibold text-xl 
                p-4 border border-red-400 text-red-400 w-64
                hover:bg-red-400 hover:text-zinc-50 transition 
                ease-in-out delay-150 hover:scale-110 active:scale-95'
                >
                    Pre-order Now
                </button>
            </p>
        </section>
    );
}