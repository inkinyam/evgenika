import './News.scss';
import NewsCard from '../NewsCard/NewsCard';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const News = ({data}) => {
  return (
    <section className="section news">
      <Swiper slidesPerView  = {3}
              spaceBetween   = {30}
              threshold      = {1}
              freeMode       = {true}
              navigation     = {true}           
              modules        = {[ Navigation ]}
              className      = "news__slider" >

            { data.map(card => {
                return (
                  <SwiperSlide  key  = {card.id}>
                    <NewsCard   key  = {card.id}
                                card = {card}/>
                  </SwiperSlide> 
                )
              })
            }
      </Swiper>
    </section>
  )
}

News.propTypes = {
  data: PropTypes.array.isRequired
}

export default News;
