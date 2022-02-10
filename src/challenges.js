// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(names) {
  return ((names [names.length - 1 ]) + ', ' + names[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = numeros[0];
  let vezesApareceu = 0;

  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];
    }
  }
  for (let cont = 0; cont < numeros.length; cont += 1) {
    if (maiorNumero == numeros[cont]) {
      vezesApareceu += 1;
    }
  }
  return vezesApareceu;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let aparecerMensagem;
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;

  if (distanciaCat1 < 0) {
    distanciaCat1 = distanciaCat1 * (-1);

  }else if (distanciaCat2 < 0) {
    distanciaCat2 = distanciaCat2 * (-1);
}

if (distanciaCat1 > distanciaCat2) {
  aparecerMensagem = 'cat2';
} else if (distanciaCat2 > distanciaCat1){
  aparecerMensagem = 'cat1';
} else {
  aparecerMensagem = 'os gatos trombam e o rato foge';
}
return aparecerMensagem;

}

// Desafio 8
function fizzBuzz(numeros) {
  let arrResultado = []

  for (let i = 0; i < numeros.length; i +=1) {
    if (numeros[i] % 3 == 0) {
      arrResultado[i] = 'fizz';
    }
    if (numeros[i] % 5 == 0) {
      arrResultado[i] = 'buzz';
    }
    if (numeros[i] % 3 == 0 && numeros[i] % 5 == 0) {
      arrResultado[i] = 'fizzBuzz';
    }
    if (!(numeros[i] % 3 == 0) && !(numeros[i] % 5 == 0)) {
      arrResultado[i] = 'bug!';
    }
  }
  return arrResultado;
}

// Desafio 9
function encode(vog) {
  let vocals = ['a', 'e', 'i', 'o', 'u'];
  for (let index of vog) {
    if (vocals.includes(index)) {
      vog = vog.replace(index, vocals.indexOf(index) + 1);
    }
  } return vog;
}
encode('hello');
function decode(phrase) {
  let vocals = ['a', 'e', 'i', 'o', 'u'];
  let Numbers = ['1', '2', '3', '4', '5'];
  for (let index of phrase) {
    if (Numbers.includes(index)) {
      phrase = phrase.replace(index, vocals[index - 1]);
    }  
}return phrase;
} 

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
