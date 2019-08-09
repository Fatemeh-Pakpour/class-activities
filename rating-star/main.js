const ratings = {
  Sony: 2.5,
  LG: 3,
  Sumsung: 4
};
// total star
const TOTAL_STAR = 5;

/**
 *get rating
 *
 */
function getRatings() {
  for (const rating in ratings) {
    // Get percentage
    const starPercentage = (ratings[rating] / TOTAL_STAR) * 100;

    // Round to the nearest 10
    const starPercentageRounded = `${Math.ceil(starPercentage / 10) * 10}%`;

    // Set width of stars-inners to percentage
    let stars = document.querySelector(`.${rating}`);
    stars.style.width = starPercentageRounded;
  }
}
document.addEventListener("DOMContentLoaded", getRatings);
