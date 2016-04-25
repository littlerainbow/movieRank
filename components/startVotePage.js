/**
 * Created by Artsiom_Papou on 4/21/2016.
 */

/*Запускает анимацию в начале раунда*/

const $ = require('jquery');

let firstAwards = $('.first-film .awards-wrap'),
    secondAwards = $('.second-film .awards-wrap'),
    firstActors = $('.first-film .actors-wrap'),
    secondActors = $('.second-film .actors-wrap'),
    firstMovieInfo = firstAwards.add(firstActors),
    secondMovieInfo = secondAwards.add(secondActors),
    v = $('.versus-v'),
    s = $('.versus-s'),
    posters = $('.poster'),
    titles = $('.first-film h2').add('.second-film h2'),
    votes = $('.vote'),
    winnerWrap = $('.winner-wrap'),
    results = $('.results');

function startVote() {
    winnerWrap.add(results).removeAttr('style');

    firstMovieInfo.toggleClass('open');
    secondMovieInfo.toggleClass('open');
    posters.css({
        transform: 'translate(0,0)'
    });
    setTimeout(() => {
        v.add(s).css({
            transform: 'translate(0,0)'
        });
    },400);

    setTimeout(() => {
        v.add(s).css({
            transform: 'translate(0,0)'
        });
    },400);
    setTimeout(()=>{
        titles.css({
            transform: 'translate(0,0)'
        });
    },800);

    setTimeout(()=>{
        votes.css({
            transform: 'translate(0,0)'
        });
    },800);

}

module.exports = startVote;
