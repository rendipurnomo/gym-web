import React from 'react';
import '../../Styles/Exercises.css';
import lunges from '../../assets/img/lunges.png';
import yoga from '../../assets/img/yoga-pose.png';
import extended from '../../assets/img/extended.png'

const Exercises = () => {
  return <section id='schedule'>
    <div className="container exercise__container">
        <div className="exercise__top">
            <h2 className="section__title"
            data-aos='zoom-in'
            data-aos-duration="1500"
            >
                Benefit of <span className="highlight">Exercise</span>
            </h2>
            <p
            data-aos='fade-up'
            data-aos-delay="100"
            data-aos-duration="1800"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
            Ex quam obcaecati tempora laborum? Eius, reprehenderit.</p>
        </div>

        {/* ===== Exercise List ===== */}
        <div className="exercise__wrapper">
            <div className="exercise__item"
            data-aos='zoom-in'
            data-aos-duration="1500"
            >
                <span className="exercise__icon">
                    <img src={lunges} alt="lunges" />
                </span>

                <div className="exercise__content"
                data-aos='zoom-in'
                data-aos-duration="1500"
                >
                    <h4>Healthy Life</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="exercise__item"
            data-aos='zoom-in'
            data-aos-duration="1500"
            >
                <span className="exercise__icon">
                    <img src={yoga} alt="yoga" />
                </span>

                <div className="exercise__content"
                data-aos='zoom-in'
                data-aos-duration="1500"
                >
                    <h4>Increased Flexibility</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="exercise__item"
            data-aos='zoom-in'
            data-aos-duration="1500"
            >
                <span className="exercise__icon">
                    <img src={extended} alt="extended" />
                </span>

                <div className="exercise__content"
                data-aos='zoom-in'
                data-aos-duration="1500"
                >
                    <h4>Reducing Blood Pressure</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </div>
  </section>
}

export default Exercises