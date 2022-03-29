import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {Pagination} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: `Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro
    blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores 
    deserunt explicabo nostrum ducimus quasi?`
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam nisi labore qui illo facilis et sunt 
    soluta non tempore rem ipsa, excepturi odio cupiditate pariatur animi voluptates nulla culpa harum?`
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: `Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro
    blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores 
    deserunt explicabo nostrum ducimus quasi?`
  },
  {
    avatar: AVTR4,
    name: 'Serega Bepersch',
    review: `Carta, carta, carta. I tvoi rot vertel na svoem Java and give to some boy`
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from my friends</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" modules={[Pagination]} spaceBetween={50} slidesPerView={1} pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials