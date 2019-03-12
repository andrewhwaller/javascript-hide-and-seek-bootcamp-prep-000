function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('ranked-list');
  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let listItems = rankedLists[i].listItems;
      for (let j = 0, k = listItems.length; j < k; j++) {
        listItems[j].innerHTML = parseInt(listItems[j].innerHTML) + n;
    }
  }
}

function deepestChild() {

}
