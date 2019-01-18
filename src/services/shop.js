import { rest } from './rest';

const getInfo = () => rest.get('shop_info');
const getProductsByCategory = () => rest.get('public/categories/1');


export { getInfo, getProductsByCategory };
