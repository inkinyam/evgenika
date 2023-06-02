const concertsData = [
  {
    id:1,
    city: 'Москва',
    location: 'Олимпийский',
    vatiations: 'партер, VIP зона',
    day: '10',
    mounth: 'июня',
    link: 'yandex.ru'
  },
  {
    id:2,
    city: 'Санкт-Петербург',
    location: 'Олимпийский',
    vatiations: 'партер, VIP зона',
    day: '2',
    mounth: 'июня',
    link: 'yandex.ru'
  },
  {
    id:3,
    city: 'Южно-сахалинск',
    location: 'Олимпийский',
    vatiations: 'партер, VIP зона',
    day: '30',
    mounth: 'августа',
    link: 'yandex.ru'
  },
  {
    id:4,
    city: 'Уфа',
    location: 'Олимпийский',
    vatiations: 'партер, VIP зона',
    day: '1',
    mounth: 'сентября',
    link: 'yandex.ru'
  },
  {
    id:5,
    city: 'Ставрополь',
    location: 'Олимпийский',
    vatiations: 'партер, VIP зона',
    day: '10',
    mounth: 'сентября',
    link: 'yandex.ru'
  },
  {
    id:6,
    city: 'Москва',
    location: 'Олимпийский',
    vatiations: 'партер, VIP зона',
    day: '22',
    mounth: 'октября',
    link: 'yandex.ru'
  },

]

const tracksData = [
  {
    id: 1,
    name: 'какой-то',
    link: 'yandex.ru',
    img: 'https://sun9-57.userapi.com/impg/lYLiCE3kjPqz0fmWjfEP984ZIqU-AeTDMYT8qg/rGusDFQtxrQ.jpg?size=300x300&quality=96&sign=be897340d5345c828e2c783c4ec7dffb&type=album'
  },
  {
    id: 2,
    name: 'какой-то',
    link: 'yandex.ru',
    img: 'https://sun9-57.userapi.com/impg/lYLiCE3kjPqz0fmWjfEP984ZIqU-AeTDMYT8qg/rGusDFQtxrQ.jpg?size=300x300&quality=96&sign=be897340d5345c828e2c783c4ec7dffb&type=album'
  },
  {
    id: 3,
    name: 'какой-то',
    link: 'yandex.ru',
    img: 'https://sun9-57.userapi.com/impg/lYLiCE3kjPqz0fmWjfEP984ZIqU-AeTDMYT8qg/rGusDFQtxrQ.jpg?size=300x300&quality=96&sign=be897340d5345c828e2c783c4ec7dffb&type=album'
  },
  {
    id: 4,
    name: 'какой-то',
    link: 'yandex.ru',
    img: 'https://sun9-57.userapi.com/impg/lYLiCE3kjPqz0fmWjfEP984ZIqU-AeTDMYT8qg/rGusDFQtxrQ.jpg?size=300x300&quality=96&sign=be897340d5345c828e2c783c4ec7dffb&type=album'
  },
  {
    id: 5,
    name: 'какой-то',
    link: 'yandex.ru',
    img: 'https://sun9-57.userapi.com/impg/lYLiCE3kjPqz0fmWjfEP984ZIqU-AeTDMYT8qg/rGusDFQtxrQ.jpg?size=300x300&quality=96&sign=be897340d5345c828e2c783c4ec7dffb&type=album'
  },
  {
    id: 6,
    name: 'какой-то',
    link: 'yandex.ru',
    img: 'https://sun9-57.userapi.com/impg/lYLiCE3kjPqz0fmWjfEP984ZIqU-AeTDMYT8qg/rGusDFQtxrQ.jpg?size=300x300&quality=96&sign=be897340d5345c828e2c783c4ec7dffb&type=album'
  },
  {
    id: 7,
    name: 'какой-то',
    link: 'yandex.ru',
    img: 'https://sun9-57.userapi.com/impg/lYLiCE3kjPqz0fmWjfEP984ZIqU-AeTDMYT8qg/rGusDFQtxrQ.jpg?size=300x300&quality=96&sign=be897340d5345c828e2c783c4ec7dffb&type=album'
  },
]

const newsData = [
  {
    id:1, 
    img: 'https://sun9-57.userapi.com/impg/lYLiCE3kjPqz0fmWjfEP984ZIqU-AeTDMYT8qg/rGusDFQtxrQ.jpg?size=300x300&quality=96&sign=be897340d5345c828e2c783c4ec7dffb&type=album',
    date: '12.12.12',
    title: 'Назвнаие',
    descpription: 'Назвнаие Назвнаие Назвнаие Назвнаие Назвнаие Назвнаие'
  },
  {
    id:2, 
    date: '12.12.12',
    title: 'Назвнаие',
    descpription: 'Назвнаие Назвнаие Назвнаие Назвнаие Назвнаие Назвнаие'
  },
  {
    id:3, 
    img: 'https://sun9-57.userapi.com/impg/lYLiCE3kjPqz0fmWjfEP984ZIqU-AeTDMYT8qg/rGusDFQtxrQ.jpg?size=300x300&quality=96&sign=be897340d5345c828e2c783c4ec7dffb&type=album',
    date: '12.12.12',
    title: 'Назвнаие',
    descpription: 'Назвнаие Назвнаие Назвнаие Назвнаие Назвнаие Назвнаие'
  },
  {
    id:4, 
    img: 'https://sun9-57.userapi.com/impg/lYLiCE3kjPqz0fmWjfEP984ZIqU-AeTDMYT8qg/rGusDFQtxrQ.jpg?size=300x300&quality=96&sign=be897340d5345c828e2c783c4ec7dffb&type=album',
    date: '12.12.12',
    title: 'Назвнаие',
    descpription: 'Назвнаие Назвнаие Назвнаие Назвнаие Назвнаие Назвнаие'
  },
  {
    id:5, 
    img: 'https://sun9-57.userapi.com/impg/lYLiCE3kjPqz0fmWjfEP984ZIqU-AeTDMYT8qg/rGusDFQtxrQ.jpg?size=300x300&quality=96&sign=be897340d5345c828e2c783c4ec7dffb&type=album',
    date: '12.12.12',
    title: 'Назвнаие',
    descpription: 'Назвнаие Назвнаие Назвнаие Назвнаие Назвнаие Назвнаие'
  },
  {
    id:6, 
    img: 'https://sun9-57.userapi.com/impg/lYLiCE3kjPqz0fmWjfEP984ZIqU-AeTDMYT8qg/rGusDFQtxrQ.jpg?size=300x300&quality=96&sign=be897340d5345c828e2c783c4ec7dffb&type=album',
    date: '12.12.12',
    title: 'Назвнаие',
    descpription: 'Назвнаие Назвнаие Назвнаие Назвнаие Назвнаие Назвнаие'
  },
]

const videoData = [
  {
    id: 1,
    title: 'о боже какой мужчина',
    link: '3OxG_5N0LqE',
    img: 'http://evgenika.su/static/uploads/content/video/image/sample10.jpg'
  },
  {
    id: 2,
    title: 'Развод',
    link: '3OxG_5N0LqE',
    img: 'http://evgenika.su/static/uploads/content/video/image/sample10.jpg'
  },
  {
    id: 3,
    title: 'Оттепель',
    link: 'GkMlZjAMgLI',
    img: 'http://evgenika.su/static/uploads/content/video/image/nature.jpg'
  }
]

const guidesData = [
  {
    id: 1,
    img: 'https://i.pinimg.com/originals/91/7f/81/917f818cba22907a5ed31730cd2355bb.jpg', 
    title: 'Гениальный гайд',
    subtitle: 'В Гайде описаны мои наблюдения, мои собственные ситуации, письма моих подписчиц и мои советы им, возможно ты узнаешь в них себя). Как только найдешь свой случай — читай как выходить из сложившейся ситуации. Тут собран колоссальный женский опыт, что поможет тебе сэкономить своё драгоценное время!!! Ведь самая печальная и невосполнимая утрата в НЕздоровых отношениях — это ВРЕМЯ, потраченное НЕ на того человека…',
    buttontext: 'Купить',
    buttonlink: 'ya.ru'
  },
  {
    id: 2,
    img: 'https://99px.ru/sstorage/56/2012/01/12001120919337451.jpg', 
    title: 'Еще более гениальный гайд 2.0',
    subtitle: 'В Гайде описаны мои наблюдения, мои собственные ситуации, письма моих подписчиц и мои советы им, возможно ты узнаешь в них себя). Как только найдешь свой случай — читай как выходить из сложившейся ситуации. Тут собран колоссальный женский опыт, что поможет тебе сэкономить своё драгоценное время!!! Ведь самая печальная и невосполнимая утрата в НЕздоровых отношениях — это ВРЕМЯ, потраченное НЕ на того человека…',
    buttontext: 'Купить',
    buttonlink: 'ya.ru'
  },
]


export {concertsData, tracksData, newsData, videoData,guidesData}