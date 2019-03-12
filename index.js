function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ranked-list');

  for (let i = 1; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + 3).toString;
  }

}

function deepestChild() {

}
