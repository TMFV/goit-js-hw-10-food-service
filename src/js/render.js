import templ from "../temp.hbs";
import dishes from '../menu.json';


const renderList = document.querySelector('.js-menu');
const rend = templ(dishes);


renderList.insertAdjacentHTML('beforeend', rend);
