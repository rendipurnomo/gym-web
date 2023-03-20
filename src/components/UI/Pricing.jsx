import React from 'react';
import '../../Styles/Pricing.css';

const Pricing = () => {
  return <section id='pricing-plan'>
    <div className="container">
        <div className="pricing__top">
            <h2 className="section__title">Gym
            <span className="highlight"> Pricing </span>
            Plan
            </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> 
            Consequuntur, et necessitatibus officiis provident nihil voluptate.</p>
        </div>
        {/* Pricing Wrapper */}
        <div className="pricing__wrapper">
            <div className="pricing__item"
            data-aos='fade-up'
            data-aos-delay="500"
            data-aos-duration="2000">
                <div className="pricing__card-top">
                    <h2 className='section__title'>Regular Member</h2>
                    <h2 className="pricing section__title">$50 <span>/mount</span></h2>
                </div>

                <div className="services">
                    <ul>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the gym</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Standard option</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>1 classes per week</li>
                    </ul>
                    <button className="register__btn">Join Now</button>
                </div>
            </div>
            <div className="pricing__item pricing__item-02"
            data-aos='fade-up'
            data-aos-delay="500"
            data-aos-duration="2000">
                <div className="pricing__card-top">
                    <h2 className='section__title'>Premium Member</h2>
                    <h2 className="pricing section__title">$150 <span>/mount</span></h2>
                </div>

                <div className="services">
                    <ul>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the gym</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Standard option</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>6 classes per week</li>
                    </ul>
                    <button className="register__btn">Join Now</button>
                </div>
            </div>
            <div className="pricing__item"
            data-aos='fade-up'
            data-aos-delay="500"
            data-aos-duration="2000">
                <div className="pricing__card-top">
                    <h2 className='section__title'>Standard Member</h2>
                    <h2 className="pricing section__title">$75 <span>/mount</span></h2>
                </div>

                <div className="services">
                    <ul>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the gym</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Standard option</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>3 classes per week</li>
                    </ul>
                    <button className="register__btn">Join Now</button>
                </div>
            </div>
        </div>
    </div>
  </section>
}

export default Pricing