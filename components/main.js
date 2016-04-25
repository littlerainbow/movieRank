/**
 * Created by Artsiom_Papou on 4/13/2016.
 */
const $ = require('jquery'),
    setPosterTitle = require('./changeMovieInfo'),
    setPopUpInfo = require('./popUpInfo'),
    twoRandomItems = require('./randomItems'),
    startVote = require('./startVotePage'),
    endVote = require('./endVote'),
    ranking = require('./rankingFunc'),
    saveToLocalStorage = require('./saveToLocalStorage'),
    displayResults = require('./displayResults');

let top10 = require('./data');

$(document).ready(()=>{
    
    let ItemsForCompare = twoRandomItems(top10),
        infoButtons = $('.awards-wrap, .actors-wrap'),
        mp1 = $('.mp1'),
        mp2 = $('.mp2'),
        popUpInfo1 = $('.mp1 .popup-info'),
        popUpInfo2 = $('.mp2 .popup-info'),
        close1 = $('.first-film .close'),
        close2 = $('.second-film .close'),
        votes = $('.vote'),
        winner = $('.winner-wrap'),
        winnerPoster = $('.winner-wrap .poster'),
        playAgain = $('.once-more'),
        results = $('.results'),
        nextRound = $('.next-round'),
        userMovieList = localStorage.getItem('userList')  ? JSON.parse(localStorage.userList) : JSON.parse(JSON.stringify(top10)),
        gamesCount = 3; // Кол-во раундов игры

    localStorage.setItem('userList', JSON.stringify(userMovieList));
    setMovies();

    $('.start').on('click',() =>{
        $('.main-page').animate({top: '-200vh'},700, () => {
            $(this).css('dispaly', 'none');
            startVote();
        });
    });

    setEvents();

    playAgain.on('click', e => {
        gamesCount = 3;
        endVote();
        startVote();
        setMovies();
    });


/**
 *setMovies выбирает 2 кино из списка, устанавливает постеры
 */
    function setMovies() {
        ItemsForCompare = twoRandomItems(userMovieList);
        twoRandomItems(userMovieList);
        setPosterTitle('.first-film', userMovieList[ItemsForCompare[0]]);
        setPosterTitle('.second-film', userMovieList[ItemsForCompare[1]]);
    }
/**
 * Проверяет сколько раундов сыграно, начинает новый раунд или выводит результат
 */
    function checkGamesCount() {
        if(gamesCount > 0) {
            nextRound.on('click', e => {
                startVote();
                setMovies();
            });
        } else {
            displayResults(top10,userMovieList );
            results.css({transform: 'translateY(0)'});
        }
    }
/**
 * Отправляет в попап информацию о фильме
 */
    function showinfo() {
        infoButtons.on('click', (e) => {
            let target = e.target;
            if ($(target).hasClass('awards1')){
                setPopUpInfo(popUpInfo1, userMovieList[ItemsForCompare[0]].awards);

                mp1.css({
                    transform: 'translateX(0)'
                });
            }
            if ($(target).hasClass('awards2')){
                setPopUpInfo(popUpInfo2, userMovieList[ItemsForCompare[1]].awards);
                mp2.css({
                    transform: 'translateX(0)'
                });
            }
            if ($(target).hasClass('actors1')){
                setPopUpInfo(popUpInfo1, userMovieList[ItemsForCompare[0]].actors);
                mp1.css({
                    transform: 'translateX(0)'
                });
            }
            if ($(target).hasClass('actors2')){
                setPopUpInfo(popUpInfo2, userMovieList[ItemsForCompare[1]].actors);
                mp2.css({
                    transform: 'translateX(0)'
                });
            }

        });
    }
/**
 * по клику начинает сравнивать результаты и вызывает доп-ую инфо о победителе
 */
    function voitAndRanking() {
        votes.on('click', e => {
            let target = e.target,
            parent = $(target).parent();

            if(parent.hasClass('first-film')){
                ranking(userMovieList[ItemsForCompare[0]], userMovieList[ItemsForCompare[1]], 1);
                saveToLocalStorage('userList', userMovieList);
                winner.find('.poster').css({
                    background: 'url(' + userMovieList[ItemsForCompare[0]].poster + ') no-repeat center center',
                    backgroundSize: 'cover'
                });

                winner.find('.title').text(userMovieList[ItemsForCompare[0]].title);
                winner.find('.storyLine').text(userMovieList[ItemsForCompare[0]].storyLine);
                winner.css({
                    transform: 'translateX(0)'
                });
                endVote();
            } else {
                ranking(userMovieList[ItemsForCompare[0]], userMovieList[ItemsForCompare[1]], 2);
                saveToLocalStorage('userList', userMovieList);
                winner.find('.title').text(userMovieList[ItemsForCompare[1]].title);
                console.log(userMovieList[ItemsForCompare[1]].storyLine)
                winner.find('.storyLine').text(userMovieList[ItemsForCompare[1]].storyLine);
                winner.find('.poster').css({
                    background: 'url(' + userMovieList[ItemsForCompare[1]].poster + ') no-repeat center center',
                    backgroundSize: 'cover'
                });
                winner.css({
                    transform: 'translateX(0)'
                });
                endVote();
            }
            gamesCount--;
            checkGamesCount();
        });
    }
/**
 * все ивенты в одном месте
 */
    function setEvents() {
        showinfo();
        voitAndRanking()
        close1.on('click', ()=>{
                mp1.css({
                transform: 'translateX(-100%)'
            });
        });
            close2.on('click', ()=>{
                mp2.css({
                transform: 'translateX(200%)'
            });
        });
    }

});


