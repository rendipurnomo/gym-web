import React from 'react';
import '../../Styles/Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper';
import avatar1 from '../../assets/img/avatar01.png';
import avatar2 from '../../assets/img/avatar02.png';

const Testimonials = () => {
  return <section>
    <h2 className='sliders__title'>Testimonials</h2>
    <div className="container slider">
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        >
            <SwiperSlide>
                <div className="slide__item">
                    <div className="slide__img-01">
                        <img src={avatar1} alt="people1" />
                    </div>
                    <h4>
                        <span className="rating">
                            <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i>
                        </span>
                    </h4>
                    <h4>Jesica mordor</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    Eius necessitatibus ipsam temporibus repellendus alias labore beatae ipsa odit ratione id!</p>
                </div>
            </SwiperSlide>
            <SwiperSlide><div className="slide__item">
                    <div className="slide__img-02">
                        <img src={avatar2} alt="people2" />
                    </div>
                    <h4>
                        <span className="rating">
                            <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>
                        </span>
                    </h4>
                    <h4>angelica</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    Eius necessitatibus ipsam temporibus repellendus alias labore beatae ipsa odit ratione id!</p>
                </div></SwiperSlide>
            <SwiperSlide><div className="slide__item">
                    <div className="slide__img-03">
                        <img src={avatar1} alt="people1" />
                    </div>
                    <h4>
                        <span className="rating">
                            <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>
                        </span>
                    </h4>
                    <h4>Jesica mordor</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    Eius necessitatibus ipsam temporibus repellendus alias labore beatae ipsa odit ratione id!</p>
                </div></SwiperSlide>
        </Swiper>
    </div>
  </section>
}

export default Testimonials