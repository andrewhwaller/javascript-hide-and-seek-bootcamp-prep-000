function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ranked-list');

  for (let i = 0; 1 = list.length; i++) {
    list[i].innerHTML = (i + parseInt(n));
  }
}

function deepestChild() {

}
