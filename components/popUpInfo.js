/**
 * Created by Artsiom_Papou on 4/20/2016.
 */
const $ = require('jquery');

/*Записывает информацию о награда и составе актеров в попап*/

function setPopUpInfo(popUpName, info) {
    let popUp = $(popUpName),
        list = $('<ul />');
    popUpName.text('');
    for(let i = 0; i < info.length; i++) {
        let listItem = $('<li/>');
        listItem.text(info[i]);
        list.append(listItem);
    }
    popUp.append(list)

}

module.exports = setPopUpInfo;