const BASE_URL = 'https://29.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: ''
};

const Method = {
  GET: 'GET',
  POST: 'POST'
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз'
};

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${ BASE_URL }${ route }`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw Error();
      }
      return response.json();
    })
    .catch(() => {
      throw Error(errorText);
    });

const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA);

const postData = (body) => load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body);

export { getData, postData };
