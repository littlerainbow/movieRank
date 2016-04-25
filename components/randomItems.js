/**
 * Created by Artsiom_Papou on 4/15/2016.
 */

/**
 * Выбирает 2 индекса для массива фильмов
 *  return array of indexes
 * @param arr
 * @returns {*[]}
 */
function twoRandomItems(arr) {
    let length = arr.length;
    let a = parseInt(Math.random()*length);
    let b = parseInt(Math.random()*length);

    while (a === b) {
        b = parseInt(Math.random()*length);
    }

    return [a, b];
}

module.exports = twoRandomItems;