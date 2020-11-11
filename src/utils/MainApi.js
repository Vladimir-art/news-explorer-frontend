import image from './constants';
export const saveArticles = (url, data, token) => {
  return fetch(`https://illus.students.nomoreparties.space/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      "keyword": data.keyword,
      "title": data.data.title,
      "text": data.data.description,
      "date": data.data.publishedAt,
      "source": data.data.source.name,
      "link": data.data.url,
      "image": data.data.urlToImage === null ? image : data.data.urlToImage,
    })
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    return data;
  })
}

export const register = (url, values) => {
  return fetch(`https://illus.students.nomoreparties.space/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": values.name,
      "email": values.email,
      "password": values.password,
    })
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    return data;
  })
}

export const login = (url, values) => {
  return fetch(`https://illus.students.nomoreparties.space/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": values.email,
      "password": values.password,
    })
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    localStorage.setItem('jwt', data.token);
    return data;
  })
}

export const getUser = (url, token) => {
  return fetch(`https://illus.students.nomoreparties.space/${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    }
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
}
