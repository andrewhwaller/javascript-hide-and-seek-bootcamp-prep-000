function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('ranked-list');

  for (let i = 0; l = rankedLists.length; i < l; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString;
  }

}

function deepestChild() {

}
