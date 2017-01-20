/**
 * the key in localStorage is set with prefix 'moki-' by default
 */

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
