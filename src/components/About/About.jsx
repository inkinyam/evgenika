import './About.scss'
import SectionTitle from '../SectionTitle/SectionTitle';

const About = () => {
  return (
    <>
      <section className="section about">
        <SectionTitle text='О певице'/>

        <div className="about__info">
          <h3 className="about__title">Открой для себя удивительный мир музыки Евгеники на её концертах!</h3>

          <ul className="about__text">
            <li>Ее мелодии захватывают душу, а вокал проникает в самые глубины сердца.</li>
            <li>Лауреат конкурсов и фестивалей, золотая медалистка Всероссийских Молодежных Дэльфийских Игр, Стипендиат Министерства Культуры РФ, член союза композиторов.</li>
            <li>Евгеника представляет разнообразную музыку, которая никого не оставит равнодушным.</li>
          </ul>
        </div>
      </section>
    </>
  )
}
   
export default About;