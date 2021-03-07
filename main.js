//Il programma stampa una lista di numeri da uno a mille. Quando un numero della lista è multiplo di 3 verrà sostituito dalla parola "Fuzz". Quando è multiplo di 5 "Buzz". Per entrambi "FuzzBuzz".


for (var i = 1; i < 1001; i++) {
  if (i % 3 == 0 && i % 5 != 0) {
    document.getElementById('lista').innerHTML += "<p>" + "Fizz" + "</p>";
  }
  else if (i % 5 == 0 && i % 3 != 0) {
    document.getElementById('lista').innerHTML += "<p>" + "Buzz" + "</p>";
  }
  else if (i % 3 == 0 && i % 5 == 0) {
    document.getElementById('lista').innerHTML += "<p>" + "Fizz Buzz" + "</p>";
  }
  else {
    document.getElementById('lista').innerHTML += "<p>" + i + "</p>";
  }
}


//if (!(i%15)) { //alternativa (!(i%3) && !(i%5))
    //document.getElementById('container').innerHTML += "<p>" + "FizzBuzz" + "</p>";
  //} else if (!(i%3)) {
    //document.getElementById('container').innerHTML += "<p>" + "Fizz" + "</p>";
  //} else if (!(i%5)) {
    //document.getElementById('container').innerHTML += "<p>" + "Buzz" + "</p>";
  //} else {
    //document.getElementById('container').innerHTML += "<p>" + i + "</p>";
  //}
//}
