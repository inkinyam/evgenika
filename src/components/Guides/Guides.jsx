import './Guides.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import GuidesCard from '../GuidesCard/GuidesCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import PropTypes from 'prop-types';

const Guides = ({data}) => {
  return(
    <section className='section guides'>
    <SectionTitle text='Гайды'/>

    <Swiper slidesPerView  = {1}
              spaceBetween = {0}
              threshold    = {1}
              freeMode     = {true}
              pagination   = {true}           
              modules      = {[ Pagination ]}
              className    = "guides__slider" >

            { data.map(card => {
                return (
                  <SwiperSlide  key  = {card.id}>
                    <GuidesCard key  = {card.id}
                                card = {card}/>
                  </SwiperSlide> 
                )
              })
            }
      </Swiper>
    
    </section>
  )
}

Guides.propTypes = {
  data: PropTypes.array.isRequired
}

export default Guides;