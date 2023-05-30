import './News.scss';
import NewsCard from '../NewsCard/NewsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { newsData } from '../../api-utils/data';

const News = () => {
  return (
    <section className="section news">
      <Swiper slidesPerView  = {3}
              spaceBetween   = {30}
              threshold      = {1}
              freeMode       = {true}
              navigation     = {true}           
              modules        = {[ Navigation ]}
              className      = "news__slider" >

            { newsData.map(card => {
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

export default News;
