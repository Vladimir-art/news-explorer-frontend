export const getArticles = (keyword, pastDate, currDate) => {
  return fetch(`https://newsapi.org/v2/everything?q=${keyword}&from=${pastDate}&to=${currDate}&sortBy=popularity&pageSize=100`, {
    method: 'GET',
    headers: {
      'authorization': 'fd59b3e2c05a4cf99251be8b08a136ed'
    },
  })
  .then((res) => {
    try {
      if (res.status === 200) {
        return res.json();
      }
      if (res.status === 401) {
        return console.log('Ключ не передан или передан не в том формате')
      }
    }
    catch (err) {
      return err;
    }
  })
  .then((data) => {
    return data;
  });
}

export const getCommonArticles = () => {
  return fetch('https://newsapi.org/v2/everything?language=ru&sortBy=popularity', {
    method: 'GET',
    headers: {
      'authorization': 'fd59b3e2c05a4cf99251be8b08a136ed'
    }
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    return data;
  })
}
