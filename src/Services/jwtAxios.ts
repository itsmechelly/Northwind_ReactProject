// import axios from 'axios';
// import { request } from 'node:http';
// import store from '../Redux/Store';

// const jwtAxios = axios.create();

// //Request interceptors - מה אנו רוצים לבצע בכל שליחת בקשה לשרת
// jwtAxios.interceptors.request.use(request => {
//     request.headers = {
//         "authorization": "Bearer " + store.getState().AuthState.user?.token
//     };
// });

// export default jwtAxios;

// whichhhhhhhhhh oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee is good? A or a??????????????????

import axios from 'axios';
import store from '../Redux/Store';

const jwtAxios = axios.create();

// Request interceptor - מה אנו רוצים לבצע בכל שליחת בקשה לשרת
jwtAxios.interceptors.request.use(request => {

    request.headers = {
        "authorization": "Bearer " + store.getState().AuthState.user?.token
    };

    return request;
});

export default jwtAxios;
