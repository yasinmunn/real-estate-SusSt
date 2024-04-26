import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper text-red-500"
            >
                <SwiperSlide>
                    <div className='flex container items-center gap-5 bg-blue-100 mx-auto lg:rounded-[35px] py-6 lg:py-0'>
                        <div className='lg:pl-16 p-4'>
                            <h5 className='text-[#171717] outfit font-medium text-[15px]'>FIND YOUR DREAM HOME</h5>
                            <h1 className=' text-3xl lg:text-[70px] pt-6 pb-3 text-[#171717] font-semibold anek'>Discover <span className='block mb-0 leading-none'>Your Ideal Residence!</span></h1>
                            <hr />
                            <p className='pt-4 text-[#6E6E78] outfit text-base pb-6'>Explore our selection of residential properties tailored to your lifestyle and preferences.</p>
                            <button className='text-[#171717] py-[14px] px-[33px] font-medium outfit text-[12px] bg-[#FBA968] rounded-full hover:bg-white duration-200'>VIEW PROPERTIES</button>
                        </div>
                        <img className='w-7/12 h-1/2 hidden lg:block rounded-r-[35px]' src="https://i.postimg.cc/q74R6MWw/outsite-co-R-LK3sq-Li-Bw-unsplash.jpg" alt="residential_1" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='flex container items-center gap-5 bg-blue-100 mx-auto lg:rounded-[35px] py-6 lg:py-0'>
                        <div className='lg:pl-16 p-4'>
                            <h5 className=' text-[#171717] outfit font-medium text-[15px]'>EXPLORE FAMILY-FRIENDLY HOMES</h5>
                            <h1 className='text-3xl lg:text-[70px] pt-6 pb-3 text-[#171717] font-semibold anek'>Find <span className='block mb-0 leading-none'>Your Perfect Family Haven!</span></h1>
                            <hr />
                            <p className='pt-4 text-[#6E6E78] outfit text-base pb-6'>Discover comfortable and spacious homes suitable for families of all sizes.</p>
                            <button className='text-[#171717] py-[14px] px-[33px] font-medium outfit text-[12px] bg-[#FBA968] rounded-full hover:bg-white duration-200'>EXPLORE FAMILY HOMES</button>
                        </div>
                        <img className='w-7/12 h-1/2 hidden lg:block rounded-r-[35px]' src="https://i.postimg.cc/L5c49Hzz/kenny-eliason-m-GZX2-MOPR-s-unsplash.jpg" alt="residential_2" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='flex container items-center gap-5 bg-blue-100 mx-auto lg:rounded-[35px] py-6 lg:py-0'>
                        <div className='lg:pl-16 p-4'>
                            <h5 className='text-[#171717] outfit font-medium text-[15px]'>FIND LUXURY LIVING SPACES</h5>
                            <h1 className=' text-3xl lg:text-[70px] pt-6 pb-3 text-[#171717] font-semibold anek'>Explore <span className='block mb-0 leading-none'>Luxurious Residential Estates!</span></h1>
                            <hr />
                            <p className='pt-4 text-[#6E6E78] outfit text-base pb-6'>Browse through our portfolio of exquisite luxury homes and prestigious residences.</p>
                            <button className='text-[#171717] py-[14px] px-[33px] font-medium outfit text-[12px] bg-[#FBA968] rounded-full hover:bg-white duration-200'>DISCOVER LUXURY HOMES</button>
                        </div>
                        <img className='w-7/12 h-1/2 hidden lg:block rounded-r-[35px]' src="https://i.postimg.cc/sg9fzC1h/img.jpg" alt="residential_3" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
