import { rest } from './rest';

const login = (data) => rest.post('public/login', data);

export { login };
