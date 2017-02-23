function getFirstSelector(selector){
  return document.body.querySelector(selector);
}

function nestedTarget() {
  return getFirstSelector("#nested .target");
}

function increaseRankBy(n) {
  const ranks = document.body.querySelectorAll('ul.ranked-list li');
  for(let i = 0; i < ranks.length; i++){
    ranks[i].innerHTML =parseInt(ranks[i].innerHTML) + n;
  }
}

function deepestChild() {
  return find(document.body.querySelector("div#grand-node").children, ele => ele.children==null)[0];
}

function find(array, criteriaFn) {
  let current = array
  let next = []
 
  while (current) {
    if (criteriaFn(current)) {
      return current
    }

    if (Array.isArray(current)) {
      for (let i = 0, l = current.length; i < l; i++) {
        next.push(current[i])
      }
    }

    current = next.shift()
  }
  return null
}