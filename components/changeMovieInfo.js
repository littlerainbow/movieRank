/**
 * Created by Artsiom_Papou on 4/20/2016.
 */

/*Устанавливает постер и тайтл фильма*/

const $ = require('jquery');

function setPosterTitle(movieSection, obj) {
    let movieTitle = $( movieSection + ' h2'),
        poster = $(movieSection + ' .poster');
    movieTitle.text('');
    movieTitle.text(obj.title);
    poster.css({
        background: 'url(' + obj.poster + ') no-repeat center center',
        backgroundSize: 'cover'
    });
}

module.exports = setPosterTitle;