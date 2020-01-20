let i = 1;
let niz = [];
let suma = 0;
let brojac = 0;
let fuj = [function1, function2, function3, function4, function5, function6, function7, function8, function9, function10, function11, function12, function13, function14, function15];
let zadatak = ['Ispisati prirodne brojeve od 1 do 5.', 'Ispisati prirodne brojeve od 4 do 8.', 'Ispisati prirodne brojeve od 8 do 16.', 'Ispisati trostruke vrednosti prirodnih brojeva od k do n , k i n zahtevati od korisnika kao unos sa tastature.', 'Ispisati prirodne brojeve od 3 do 8 unazad.', 'Ispisati prirodne brojeve od 10 do 6 unazad.', 'Izračunati sumu prvih 5 prirodnih brojeva , i zatim ispisati kolika je suma.', 'Izračunati sumu dvostruke vrednosti prvih 5 prirodnih brojeva , i zatim ispisati sumu.', 'Zahtevati od korisnika unos broja n , i zatim izračunati i ispisatu sumu prirodnih brojeva do tog broja.', 'Izračunati sumu prvih 20 prirodnih brojeva koji su parni i zatim ispisati vrednost sume.', 'Potrebno je prebrojati sve parne brojeve do broja 50 i ispisati koliko tih brojeva ima.', 'Zahtevati unos broja n i k od korisnika i prebrojati sve neparne brojeve od n do k i ispisati taj broj.', 'Izračunati aritmetičku sredinu prvih 50 brojeva i zatim ispisati tu vrednost.', 'Zahtevati unos dva broja od korisnika i izračunati aritmetičku sredinu brojeva između dva uneta broja.', 'Zahtevati unos dva broja od korisnika i izračunati aritmetičku sredinu samo parnih brojeva između dva uneta broja.'];
for (let i = 1; i <= 15; i++) {
    document.getElementById('test').innerHTML +=
        `<div class="zadatak">
            <h3>Zadatak ${i}:</h3>
            <p>${zadatak[i-1]}</p>
            <button id="btn">rezultat</button>
            <span id="resenje${i}"> </span>
            <button class="codebtn">prikazi kod</button>
        </div>
        <div class="kodbox">
            <pre id='pre${i}'></pre>
        </div>`
    document.getElementById(`pre${i}`).innerHTML = fuj[i - 1]
}

let btn = document.querySelectorAll('#btn');
let codebtn = document.getElementsByClassName('codebtn');
let kodbox = document.getElementsByClassName('kodbox');

for (let i = 0; i <= 14; i++) {
    codebtn[i].addEventListener('click', function toggle() {
        kodbox[i].classList.toggle('active');
    });
}

function function1() {
    document.getElementsByTagName('span')[0].style.display = 'inline';
    this.disabled = true;
    while (i <= 5) {
        document.getElementById('resenje1').innerHTML += `${i} `
        i++;
    }
};

function function2() {
    this.disabled = true;
    document.getElementsByTagName('span')[1].style.display = 'inline';
    i = 4;
    while (i <= 8) {
        document.getElementById('resenje2').innerHTML += `${i} `;
        i++;
    }
};

function function3() {
    btn[2].disabled = true;
    document.getElementsByTagName('span')[2].style.display = 'inline';
    i = 8;
    while (i <= 16) {
        document.getElementById('resenje3').innerHTML += `${i} `;
        i++;
    }
}

function function4() {
    btn[3].disabled = true;
    document.getElementsByTagName('span')[3].style.display = 'inline';
    let prvi = +(prompt('unesite vrednost za broj k'));
    let drugi = +(prompt('unesite vrednost za broj n'));
    document.getElementById('resenje4').innerHTML += `Trostruke vrednosti prirodnih brojeva od k=${prvi} do n=${drugi} su: `;
    if (drugi > prvi) {
        i = prvi;
        while (i <= drugi) {
            document.getElementById('resenje4').innerHTML += `${i*3} `;
            i++;
        }
    } else if (drugi < prvi) {
        i = drugi;
        while (i <= prvi) {
            document.getElementById('resenje4').innerHTML += `${i*3} `;
            i++;
        }
    } else {
        document.getElementById('resenje4').innerHTML += `Brojevi ${prvi} i ${drugi} su jednaki`
    }
}

function function5() {
    btn[4].disabled = true;
    document.getElementsByTagName('span')[4].style.display = 'inline';
    i = 8;
    while (i >= 3) {
        document.getElementById('resenje5').innerHTML += `${i} `;
        i--;
    }
}

function function6() {
    btn[5].disabled = true;
    document.getElementsByTagName('span')[5].style.display = 'inline';
    i = 10;
    while (i >= 6) {
        document.getElementById('resenje6').innerHTML += `${i} `;
        i--;
    }
}

function function7() {
    btn[6].disabled = true;
    document.getElementsByTagName('span')[6].style.display = 'inline';
    i = 1;
    suma = 0;
    while (i <= 5) {
        suma += i;
        i++;
    }
    document.getElementById('resenje7').innerHTML += `Sumu prvih 5 prirodnih brojeva je ${suma}`
};

function function8() {
    btn[7].disabled = true;
    document.getElementsByTagName('span')[7].style.display = 'inline';
    i = 1;
    suma = 0;
    while (i <= 5) {
        suma += i * 2;
        i++;
    }
    document.getElementById('resenje8').innerHTML += `sumu dvostruke vrednosti prvih 5 prirodnih brojeva je ${suma}`
};

function function9() {
    btn[8].disabled = true;
    document.getElementsByTagName('span')[8].style.display = 'inline';
    let n = +(prompt('unesi vrednost za n'));
    i = 0;
    suma = 0
    while (i <= n) {
        suma += i
        i++;
    }
    document.getElementById('resenje9').innerHTML += `Sumu prirodnih brojeva do n=${n} je ${suma}`;
};

function function10() {
    btn[9].disabled = true;
    document.getElementsByTagName('span')[9].style.display = 'inline';
    i = 1;
    suma = 0;
    while (i <= 20) {
        if (i % 2 == 0) {
            suma += i
        }
        i++
    }
    document.getElementById('resenje10').innerHTML += `sumu prvih 20 prirodnih brojeva koji su parni je ${suma}`
};

function function11() {
    btn[10].disabled = true;
    document.getElementsByTagName('span')[10].style.display = 'inline';
    i = 1;
    while (i < 50) {
        if (i % 2 == 0) {
            brojac++;
        }
        i++;
    }
    document.getElementById('resenje11').innerHTML += `Parnih brojeva ukupno ina ${brojac} do broja 50`
};

function function12() {
    btn[11].disabled = true;
    document.getElementsByTagName('span')[11].style.display = 'inline';
    let newN = +(prompt('Unesi novu vrednost za n'));
    let newK = +(prompt('Unesi unesi novu vrednost za k'));
    if (newN < newK) {
        i = newN
        while (i <= newK) {
            if (i % 2 != 0) {
                brojac++
            }
            i++;
        }
    }
    document.getElementById('resenje12').innerHTML += `od broja ${newN} pa do broja ${newK} ima neparnih brojeva ukupno ${brojac}.`
};

function function13() {
    btn[12].disabled = true;
    document.getElementsByTagName('span')[12].style.display = 'inline';
    i = 1;
    suma = 0;
    let arsr = 0;
    while (i <= 50) {
        suma += i;
        i++;
        arsr = suma / 50;
    }
    document.getElementById('resenje13').innerHTML += `Aritmetičku sredinu prvih 50 brojeva je ${arsr}`
};

function function14() {
    btn[13].disabled = true;
    document.getElementsByTagName('span')[13].style.display = 'inline';
    let newN = +(prompt('Unesi novu vrednost za n'));
    let newK = +(prompt('Unesi unesi novu vrednost za k'));
    i = +(newN);
    suma = 0;
    let sredina = 0;
    if (newK > newN) {
        while (i <= newK) {
            niz.push(i)
            suma += i;
            i++;
            brojac++;
        }
        sredina = suma / brojac;
        document.getElementById('resenje14').innerHTML += `Aritmetičku sredinu brojeva između dva uneta broja ${newN} i ${newK}
je ${sredina}`
    } else if (newK < newN) {
        while (i <= newN) {
            suma += i;
            i++;
            brojac++
        }
        sredina = suma / brojac;
        document.getElementById('resenje14').innerHTML += `Aritmetičku sredinu brojeva između dva uneta broja ${newN} i ${newK}
je ${sredina}`
    } else {
        document.getElementById('resenje14').innerHTML += `Brojevi su jednaki`

    }
};

function function15() {
    document.getElementsByTagName('span')[14].style.display = 'inline';
    btn[14].disabled = true;
    let newN = +(prompt('Unesi novu vrednost za n'));
    let newK = +(prompt('Unesi unesi novu vrednost za k'));
    i = newN;
    suma = 0;
    niz = []
    sredina = 0;
    if (newK > newN) {
        while (i <= newK) {
            if (i % 2 == 0) {
                suma += i;
            }
            i++;
        }
        sredina = suma / niz.length;
        document.getElementById('resenje15').innerHTML += `Aritmetička sredina parnih brojeva između dva uneta broja ${newN} i ${newK} je ${sredina}`
    } else if (newK < newN) {
        i = newK;
        while (i < newN) {
            if (i % 2 == 0) {
                suma += i;
            }
            i++;
        }
        sredina = suma / niz.length;
        document.getElementById('resenje15').innerHTML += `Aritmetička sredina parnih brojeva između dva uneta broja ${newN} i ${newK} je ${sredina}`
    } else { document.getElementById('resenje15').innerHTML += `Brojevi su jednaki` }
};
btn[0].addEventListener('click', function1);
btn[1].addEventListener('click', function2);
btn[2].addEventListener('click', function3);
btn[3].addEventListener('click', function4);
btn[4].addEventListener('click', function5);
btn[5].addEventListener('click', function6);
btn[6].addEventListener('click', function7);
btn[7].addEventListener('click', function8);
btn[8].addEventListener('click', function9);
btn[9].addEventListener('click', function10);
btn[10].addEventListener('click', function11);
btn[11].addEventListener('click', function12);
btn[12].addEventListener('click', function13);
btn[13].addEventListener('click', function14);
btn[14].addEventListener('click', function15);