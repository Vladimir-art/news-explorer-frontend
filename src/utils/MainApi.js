export const saveArticles = (url, data, token) => {
  console.log(data);
  return fetch(`https://illus.students.nomoreparties.space/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      "keyword": data.keyword,
      "title": data.data.title,
      "text": data.data.description ? data.data.description : data.data.text,
      "date": data.data.publishedAt ? data.data.publishedAt : data.data.date,
      "source": data.data.source.name ? data.data.source.name : data.data.source,
      "link": data.data.url ? data.data.url : data.data.link,
      "image": data.data.urlToImage ? data.data.urlToImage : data.data.image,
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

export const getContent = (url, token) => {
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

export const deleteArticle = (id, token) => {
  return fetch(`https://illus.students.nomoreparties.space/articles/${id}`, {
    method: 'DELETE',
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
