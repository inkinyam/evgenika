import './Guides.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import GuidesCard from '../GuidesCard/GuidesCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { guidesData } from '../../api-utils/data';

const Guides = () => {
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

            { guidesData.map(card => {
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


export default Guides;