import { rest } from './rest';

const getInfo = () => rest.get('shop_info');
const getAllProducts = () => rest.get('public/products');


export { getInfo, getAllProducts };
