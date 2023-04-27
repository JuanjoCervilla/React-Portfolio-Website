import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Avatar_1.png'
import AVTR2 from '../../assets/Avatar_2.jpg'
import AVTR3 from '../../assets/Avatar_3.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar : AVTR1,
    name : 'Yolanda Diaz',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore, esse omnis maximmus repudiandae ipsa illo! Lorem ipsum dolor sit'
  },

  {
    avatar : AVTR2,
    name : 'Pedro Sanchez',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore, esse omnis maximmus repudiandae ipsa illo! Lorem ipsum dolor sit'
  },
  {
    avatar : AVTR3,
    name : 'Alessandro Fiumara',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore, esse omnis maximmus repudiandae ipsa illo! Lorem ipsum dolor sit'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>     
            )
          })
        }
      </Swiper>
      
    </section>
  )
}

export default Testimonials