/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    if (options.method == 'GET') {
        let mess = options.url + '?';
        for (let key in options.data) {
            mess += key + '=' + options.data[key] + '&';
        }
        mess = mess.slice(0, -1);
        //xhr.open('GET', `${options.url}?mail=${options.data.mail}&password=${options.data.password}`);
        xhr.open('GET', mess);
        xhr.send();
    }
    else {
        let formData = new FormData;
        for (let key in options.data) {
            formData.append(key, options.data[key]);
        }

        xhr.open(options.method, options.url);
        xhr.send(formData);
    }

    try {
        xhr.addEventListener('readystatechange', () => {
            if (this.readyState == xhr.DONE && xhr.status === 200) {
                options.callback(xhr.response.error, xhr.response);
              }
        })
    }
    catch (error) {
        options.callback(error);
    }
    
};

