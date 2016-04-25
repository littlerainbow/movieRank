/**
 * Created by Artsiom_Papou on 4/15/2016.
 */
/**
 * алгоритм для сравнения фильмов
 * 
 * @param r1 = obj1.userRating
 * @param r2 = obj1.userRating
 * vote number = 1 || 2;
 */
function ranking(r1, r2, vote) {
    const strongK = 16,
          weakK = 32,
          win = 1,
          lose = 0;

    let expectedScoreR1 = 1 / (1 + Math.pow(10, (r2.userRating - r1.userRating)/400)),
        expectedScoreR2 = 1 / (1 + Math.pow(10, (r1.userRating - r2.userRating)/400));

    if (vote == 1) {
        if (r1.userRating > r2.userRating) {
            r1.userRating = r1.userRating + weakK*(win - expectedScoreR1);
            r2.userRating = r2.userRating + strongK*(lose - expectedScoreR2);
        } else {
            r1.userRating = r1.userRating + strongK*(win - expectedScoreR1);
            r2.userRating = r2.userRating + weakK*(lose - expectedScoreR2);
        }
    } else {
        if (r1.userRating < r2.userRating) {
            r1.userRating = r1.userRating + strongK*(lose - expectedScoreR1);
            r2.userRating = r2.userRating + weakK*(win - expectedScoreR2);
        } else {
            r1.userRating = r1.userRating + weakK*(lose - expectedScoreR1);
            r2.userRating = r2.userRating + strongK*(win - expectedScoreR2);
        }
    }
}

module.exports = ranking;