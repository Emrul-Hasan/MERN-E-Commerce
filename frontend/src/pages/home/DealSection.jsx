import React from 'react'
import dealsImg from "../../assets/deals.png"

const DealSection = () => {
  return (
  <section className='section__container deals__container'>
    <div className='deals__image'>
        <img src={dealsImg} alt=""></img>   
    </div>
    <div className='deals__content'>
        <h5>Get Up to 20% Discount</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur error beatae nostrum, inventore, rem dignissimos explicabo mollitia magnam et consectetur dolorem obcaecati dicta incidunt, quidem saepe? Fugit voluptatibus animi deleniti.</p>
       <div className='deals__countdown flex-wrap'>
        <div className='deals__countdown__card'>
            <h4>14</h4>
            <p>Days</p>
        </div>
        <div className='deals__countdown__card'>
            <h4>20</h4>
            <p>Hours</p>
        </div>
        <div className='deals__countdown__card'>
            <h4>15</h4>
            <p>Mins</p>
        </div>
        <div className='deals__countdown__card'>
            <h4>05</h4>
            <p>Secs</p>
        </div>
       </div>
    </div>
  </section>
  )
}

export default DealSection
