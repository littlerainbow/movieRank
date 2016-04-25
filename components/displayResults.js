/**
 * Created by Artsiom_Papou on 4/25/2016.
 */

/*Вывод результатов в таблицу*/

const $ = require('jquery');

function displayResults(worldList, userList) {
    let uList = $('.userList'),
        wlist = $('.worldList'),
        userItems = [],
        worldItems =[],
        length = worldList.length;

    uList.html('');
    userList.sort(compare);

    for (let i = 0; i < length; i++) {
        let liW = $('<li/>'),
            liU = $('<li/>'),
            spanTitleW = $('<span class="title">'),
            spanRankW = $('<span class="rank">'),
            spanTitleU = $('<span class="title">'),
            spanRankU = $('<span class="rank">');

        spanTitleW.text(worldList[i].title);
        spanRankW.text(worldList[i].worldRaiting);
        spanTitleU.text(userList[i].title);
        spanRankU.text(i+1/*userList[i].userRating*/);

        liW.append(spanTitleW).append(spanRankW);
        liU.append(spanTitleU).append(spanRankU);

        worldItems.push(liW);
        userItems.push(liU);
        console.log(userItems)

    }
    wlist.append(worldItems);
    uList.append(userItems);
}

function compare(a, b) {
    if (a.userRating > b.userRating) {
        return -1;
    } else if (a.userRating < b.userRating) {
        return 1;
    } else return 0;
}

module.exports = displayResults;
