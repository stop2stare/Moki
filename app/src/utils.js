/**
 * check if something has been stored in localStorage by key
 * 
 * @param  {String} key 
 * @return {Boolean} 
 */
export const searchLocalCache = (key) => {
  return Object.keys(localStorage).indexOf(`moki-${key}`) > -1;
}

/**
 * get cache in localStorage by key
 * 
 * @param  {String} key 
 * @return {*}
 */
export const getLocalCache = (key) => {
  return JSON.parse(window.localStorage.getItem(`moki-${key}`));
}

/**
 * set cache in localStorage with key
 * 
 * @param  {String} key   
 * @param  {*} value 
 */
export const setLocalCache = (key, value) => {
  window.localStorage.setItem(`moki-${key}`, JSON.stringify(value));
}

/**
 * find the checked one in city list
 *
 * @return {Object}
 */
export const findCheckedCity = (HEkey) => {
  let localCities = getLocalCache(`${HEkey}-cities`);
  for (let i = 0; i < localCities.length; i++) {
    if (localCities[i]['meta']['checked']) {
      return {
        name: localCities[i]['name'],
        index: i
      };
    }
  }
}

/**
 * update checked city
 * this method checks the selected city and unchecks the checked city
 *
 * @param {String} HEkey  heweather key
 * @param {String} cur  current city
 */
export const updateCheckedCity = (HEkey, cur) => {
  let localCities = getLocalCache(`${HEkey}-cities`);
  for (let i = 0; i < localCities.length; i++) {
    if (localCities[i]['meta']['checked']) {
      localCities[i]['meta']['checked'] = false;
    }
    if (localCities[i]['name'] === cur) {
      localCities[i]['meta']['checked'] = true;
    }
  }
  setLocalCache(`${HEkey}-cities`, localCities);
}

/**
 * uncheck the checked city
 * 
 * @param  {String} HEkey       
 * @param  {Array} localCities 
 * @return {Array}  new city array with the former checked city unchecked       
 */
export const uncheckCity = (HEkey, localCities) => {
  for (let i = 0; i < localCities.length; i++) {
    if (localCities[i]['meta']['checked']) {
      localCities[i]['meta']['checked'] = false;
    }
  }
  return localCities;
}

/**
 * check the currently selected city
 * 
 * @param  {String} HEkey       
 * @param  {Array} localCities 
 * @param  {String} cur 
 * @return {Array}  new city array with the former checked city unchecked       
 */
export const checkCity = (HEkey, localCities, cur) => {
  for (let i = 0; i < localCities.length; i++) {
    if (localCities[i]['name'] === cur) {
      localCities[i]['meta']['checked'] = true;
    }
  }
  return localCities;
}

/**
 * push city into the localStorage and upate checked city
 * 
 * @param  {String} HEkey 
 * @param  {Object} city  
 * @return {Array} new city array
 */
export const addCity = (HEkey, city) => {
  let updatedCities = uncheckCity(HEkey, getLocalCache(`${HEkey}-cities`));
  updatedCities.push(city);
  setLocalCache(`${HEkey}-cities`, updatedCities);
  return updatedCities;
}
