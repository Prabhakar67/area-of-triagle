
let a = prompt("enter length of side a");
a = parseFloat(a);
document.getElementById('a').innerHTML = `Side a is ${a}`;

let b = prompt("enter length of side b");
b = parseFloat(b);
document.getElementById('b').innerHTML = `Side a is ${b}`;

let c = prompt("enter length of side c");
c = parseFloat(c);
document.getElementById('c').innerHTML = `Side a is ${c}`;

let s = (a + b + c) / 2,
    area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
document.getElementById('area').innerHTML = `Area of triangle is ${area.toFixed(2)}`;