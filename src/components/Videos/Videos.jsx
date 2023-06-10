import './Videos.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import SectionTitle from '../SectionTitle/SectionTitle';
import PropTypes from 'prop-types';

import ReactPlayer from 'react-player'

const Videos = ({data, social}) => {
  return (
    <section className='section videos' id='videos'>
      <SectionTitle text="Клипы"/>
      
      <Swiper slidesPerView  = {1}
              spaceBetween   = {0}
              threshold      = {1}
              freeMode       = {true}
              navigation     = {false}  
              pagination     = {true}   
              autoplay       = {true}
              delay          = {{
                delay: 1500,
                disableOnInteraction: false,
              }}      
              modules        = {[ Pagination, Autoplay]}
              className      = "videos__slider" >

            { data.map(card => {
                return (
                  <SwiperSlide  key  = {card.id}>
                    <ReactPlayer  url      = {card.link}
                                  playing  = {false}
                                  controls 
                                  light    = {<img src={card.image} alt={card.name} />}

                                  playIcon = {<button className='videos__video-button'></button>}
                                  config   = {{
                                    youtube: {
                                      playerVars: {
                                        autoplay: 0,
                                        showinfo: 0,
                                        modestbranding: 1,
                                        rel: 0,
                                        iv_load_policy: 3,
                                        disablekb: 1,
                                        controls:2
                                      },
                                    }
                                  }} />
                    <h4 className='videos__title'>{card.name}</h4>
                  </SwiperSlide> 
                )
              })
            }
      </Swiper>

      <a href={social.youtube} className="videos__button">Еще больше клипов</a>
    </section>
  )
}

Videos.propTypes = {
  data: PropTypes.array.isRequired,
  social: PropTypes.object.isRequired
}

export default Videos;