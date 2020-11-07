export const getArticles = (keyword, pastDate, currDate) => {
  return fetch(`https://newsapi.org/v2/everything?country=ru&q=${keyword}&from=${pastDate}&to=${currDate}&pageSize=100`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": 'Bearer fd59b3e2c05a4cf99251be8b08a136ed'
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
