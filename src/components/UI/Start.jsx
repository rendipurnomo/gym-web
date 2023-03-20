import React from 'react'
import '../../Styles/Start.css';
import trainerImg from '../../assets/img/trainer.png'

const Start = () => {
  return <section id="classes">
    <div className="container">
        <div className="start__wrapper">
            <div className="start__img"
            data-aos='zoom-in'
            data-aos-duration="1500">
                <img src={trainerImg} alt="trainer" />
            </div>
            <div className="start__content">
                <h2 className="section__title"
                data-aos='fade-up'
                data-aos-duration="1500">
                    Ready to make a <span className="highlight">change?</span>
                </h2>
                <p
                data-aos='fade-up'
                data-aos-delay="100"
                data-aos-duration="1800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Laudantium laborum inventore placeat asperiores, 
                    tenetur molestias dolorum rerum quas sit nostrum!</p>
                    <button
                    data-aos='fade-up'
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    className="register__btn">Get Started</button>
            </div>
        </div>
    </div>
  </section>
}

export default Start