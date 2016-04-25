/**
 * Created by Artsiom_Papou on 4/21/2016.
 */

/*Анимация после нажатия на Vote*/

const $ = require('jquery');
let firstAwards = $('.first-film .awards-wrap'),
    secondAwards = $('.second-film .awards-wrap'),
    firstActors = $('.first-film .actors-wrap'),
    secondActors = $('.second-film .actors-wrap'),
    firstMovieInfo = firstAwards.add(firstActors),
    secondMovieInfo = secondAwards.add(secondActors),
    v = $('.versus-v'),
    s = $('.versus-s'),
    posters = $('.first-film .poster,.second-film .poster'),
    titles = $('.first-film h2').add('.second-film h2'),
    votes = $('.vote');

function endVote() {

    firstMovieInfo
        .add(secondMovieInfo)
        .add(posters)
        .add(v)
        .add(s)
        .add(titles)
        .add(votes).removeAttr('style');
}

module.exports = endVote;