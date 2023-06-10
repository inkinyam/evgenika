import './News.scss';
import NewsCard from '../NewsCard/NewsCard';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import SectionTitle from '../SectionTitle/SectionTitle';
const News = ({data}) => {
  return (
    <section className="section news" id='news'>
      <SectionTitle text="Новости"/>
      <Swiper slidesPerView  = {3}
              spaceBetween   = {30}
              threshold      = {1}
              freeMode       = {true}
              navigation     = {true}  
              breakpoints = {{
                320: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                1240: {
                  slidesPerView: 3,
                },
              }}         
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
