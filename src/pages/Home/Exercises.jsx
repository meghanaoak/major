import React from 'react'
import extended from "../../assets/img/extended.png"
import lungs from "../../assets/img/lunges.png"
import yoga from "../../assets/img/yoga-pose.png"
import "./exercises.css"


const Exercises = () => {
  return (
    <section>
        <div className="container exercise_container">
            <div className="exercise_top">
                <h2 className="section_title">
                    Benefits of Yoga
                </h2>

            </div>
            {/*========== exercise list==========*/}
            <div className="exercise_wrapper">
                <div className="exercise_item">
                    <span className="exercise_icon">
                        <img src={lungs} alt="" />
                    </span>

                    <div className="exercise_content">
                        <h4>Physical Wellness </h4>
                        <p>
                        Yoga enhances flexibility, strength, and balance, while also promoting better cardiovascular health and reducing the risk of injury.
                        </p>
                    </div>
                </div>

                <div className="exercise_item">
                    <span className="exercise_icon">
                        <img src={yoga} alt="" />
                    </span>

                    <div className="exercise_content">
                        <h4>Stress Relief </h4>
                        <p>
                        Yoga helps reduce stress, improve sleep, and enhance mental focus through mindfulness and relaxation techniques.
                        </p>
                    </div>
                </div>

                <div className="exercise_item">
                    <span className="exercise_icon">
                        <img src={extended} alt="" />
                    </span>

                    <div className="exercise_content">
                        <h4>Inner Harmony</h4>
                        <p>
                        Yoga fosters self-awareness, emotional well-being, and a deeper connection to one's inner self, offering a sense of purpose and contentment.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Exercises