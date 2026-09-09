//1
var a = parseFloat(prompt("Wprowadz wartość a"));
var b = parseFloat(prompt("Wprowadz wartość b"));
var c = parseFloat(prompt("Wprowadz wartość c"));
document.write('<h1>zadanie 1</h1>')
suma = a + b + c
document.write('Suma = ',+ suma);
//2
srednia = (a+b+c)/3
document.write('<br><h1>zadanie 2</h1>')
document.write('<br>średnia trzech liczb ', + srednia)
document.write('<br><h1>zadanie 3</h1>')
//3
suma2 = a + c
ilor = a/c
róż = a*c
document.write('<br>Suma dwóch liczb (a i c) = ' + suma2)
document.write('<br>Iloraz dwóch liczb (a i c) = ' + ilor)
document.write('<br>Różnica dwóch liczb (a i c) = ' + róż)
//4
document.write('<br><h1>zadanie 4</h1>');
let liczba = 64
let pierwiastek = Math.sqrt(liczba);
document.write(pierwiastek);
//5
document.write('<br><h1>zadanie 5</h1>');
poleKwad = b*b
document.write('Pole kwadratu o boku długości b = ' + poleKwad);
//6
document.write('<br><h1>zadanie 6</h1>');
poleProstoP = 2*(a*b) + 2*(b*c) + 2*(a*c);
document.write('Pole prostopadłościanu o boku długości a i b, wysokości c = ' + poleProstoP);
//7
document.write('<br><h1>zadanie 7</h1>');
poleK = b*3.14
document.write('pole koła i obwód = '+ poleK);
//8
document.write('<br><h1>zadanie 8</h1>');
benzyna = 8.01
droga = 360
pali = 8/100
var zurzycie = droga * pali;
var koszt = zurzycie * benzyna;
document.write('Koszt przejazdu z Gdańska do Szczecina wynosi: ' + koszt + ' zł');
//9
document.write('<br><h1>zadanie 9</h1>');
var benzyna2 = parseFloat(prompt("Wprowadz cenę benzyny"));
var droga2 = parseFloat(prompt("Wprowadz długość trasy"));
var pali2 = parseFloat(prompt("Wprowadz spalania"));
var zurzycie2 = droga2 * pali2;
var koszt2 = zurzycie2 * benzyna2;
document.write('Koszt przejazdu z Gdańska do Szczecina wynosi: ' + koszt2 + ' zł');
//10
document.write('<br><h1>zadanie 10</h1>');
var lokata = parseFloat(prompt("Wprowadz ile wpłacasz na lokate"));
zysk = lokata * 0.08
zysk2 = zysk * 0.19
zyskcały = zysk - zysk2
document.write('twój zystk z lokaty wynosi ' + zyskcały + ' zł ');
