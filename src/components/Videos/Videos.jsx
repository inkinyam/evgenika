import './Videos.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import YouTube from 'react-youtube';

import { videoData } from '../../api-utils/data';


const Videos = () => {
const opts = {
  height: '850',
  width: '1271',
  playerVars: {
    autoplay: 0,
  },
}

  return (
    <section className='section videos'>
      <Swiper slidesPerView  = {1}
              spaceBetween   = {0}
              threshold      = {1}
              freeMode       = {true}
              navigation     = {false}  
              pagination     = {true}   
              autoplay       = {true}
              delay          = {{
                delay: 500,
                disableOnInteraction: false,
              }}      
              modules        = {[ Pagination, Autoplay]}
              className      = "videos__slider" >

            { videoData.map(card => {
                return (
                  <SwiperSlide  key  = {card.id}>
                    <YouTube    key  = {card.id}
                                className='videos__video'
                                opts = {opts}
                                videoId={card.link}/>
                    <h4 className='videos__title'>{card.title}</h4>
                  </SwiperSlide> 
                )
              })
            }
      </Swiper>
    </section>
  )
}

export default Videos;