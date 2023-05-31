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
    avatar : AVTR2,
    name : 'Alex Lenfant',
    review: 'Juan José and I worked together on several projects, and I was lucky to call him my coworker. He consistently gave 100 percent effort to the team and played a significant role in ensuring that we completed assignments on time.'
  },
  
  {
    avatar : AVTR1,
    name : 'Elizabeth Hall',
    review: 'Juan José had great communication and finished all work in a timely manner.'
  },

  {
    avatar : AVTR3,
    name : 'Alejandro Díaz',
    review: 'Mr. Cervilla is one of the most delightful people I had the pleasure of working for in my career. Not only did he have a unique ability to keep our team organized and on schedule, but his constant communication helped lift our spirits in challenging situations.'
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