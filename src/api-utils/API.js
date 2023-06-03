const SERVER_URL = 'http://evgenika.su/api/v1/content';


class mainApi {
  constructor (baseUrl, {headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }


  //метод, проверяющий какой результат пришел, возвращает объект если ок, и ошибку, если нет
  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // метод, который реализует получение данные публикаций
  async getPublicationData () {
    const res = await fetch(`${this.baseUrl}/publications/`, {
       headers: {
        'Content-Type': 'application/json'
      },
       method: "GET"
     });
     return this._checkRes(res);
  }
  // метод, который реализует получение данные о концертах
  async getConcertsData () {
    const res = await fetch(`${this.baseUrl}/concerts/`, {
       headers: {
        'Content-Type': 'application/json'
      },
       method: "GET"
     });
     return this._checkRes(res);
  }

  // метод, который реализует получение данные о треках
  async getTracksData () {
    const res = await fetch(`${this.baseUrl}/tracks/`, {
       headers: {
        'Content-Type': 'application/json'
      },
       method: "GET"
     });
     return this._checkRes(res);
  }


  // метод, который реализует получение данные о видео
  async getVideosData () {
    const res = await fetch(`${this.baseUrl}/videos/`, {
       headers: {
        'Content-Type': 'application/json'
      },
       method: "GET"
     });
     return this._checkRes(res);
  }

  // метод, который реализует получение данные о гайдах
  async getGuidesData () {
    const res = await fetch(`${this.baseUrl}/guides/`, {
       headers: {
        'Content-Type': 'application/json'
      },
       method: "GET"
     });
     return this._checkRes(res);
  }

  // метод, который реализует получение данные о певице
  async getAboutData () {
    const res = await fetch(`${this.baseUrl}/about/`, {
       headers: {
        'Content-Type': 'application/json'
      },
       method: "GET"
     });
     return this._checkRes(res);
  }

    // метод, который реализует получение данные о певице
    async getContacstData () {
      const res = await fetch(`${this.baseUrl}/contacts/`, {
         headers: {
          'Content-Type': 'application/json'
        },
         method: "GET"
       });
       return this._checkRes(res);
    }


  
}


/*создаем и экспортируем экземпляр класса api для использования в App*/ 
const api = new mainApi (SERVER_URL, {})

export default api;