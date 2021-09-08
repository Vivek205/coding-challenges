const mostValuable = (sentence) => {
  list = [];
  const valuea = sentence.split(" ");
  list.push(valuea);
  p = [];
  let txt = "";
  var points = 0,
    index = 0;
  for (let x in list) {
    txt += list[x] + "<br>";
    n = txt.length;
    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++) {
        points += txt.charAt(j).charCodeAt(0) - "a".charCodeAt(0) + 1;
      }
      index = i + 1;
    }
  }
  p.push(points);
  h = p.indexof(Math.max(...p));
  console.log("winner", list[h]);
  return list[h];
};

mostValuable("The quick brown fox jumps over the lazy dog"); // return 'jumps'
mostValuable("The quick jUmPs brown fox jumps over the lazy dog"); // return 'jUmPs'
mostValuable("Jackdaws love my big sphinx of quartz"); // return 'quartz'
mostValuable("You go tell that vapid existentialist quack Freddy Nietzsche that he can just bite me twice"); // return 'existentialist'
