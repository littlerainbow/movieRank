/**
 * Created by Artsiom_Papou on 4/25/2016.
 */
/**
 *  запись в  локал стор
 * @param key
 * @param val
 */
function saveToLocalStorage(key, val) {
    localStorage.setItem(key,  JSON.stringify(val));
}

module.exports = saveToLocalStorage;