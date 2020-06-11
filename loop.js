// Exercise 1
let maxUser = 100;

for (let index = 0; index < maxUser; index++){
   document.write(`<p>User ke-${index+1}</p>`)
}

// Exercise 2
let initValue = 0;

for (let index = 0; index < 10; index++) {
    initValue += 2;
    console.log(initValue)
}

// Exercise 3
for (let i = 0; i < 20; i++) {
    if (i % 2 === 1) {
        console.log(`${i} adalah bilangan ganjil`)
    } else {
        console.log(`${i} adalah bilangan genap`)
    }
}

// Exercise 4
let popUp;
let jumlahClick=0;
do {
    popUp = confirm("Apakah Anda mau mengulang?");
    jumlahClick++;
}
while (popUp == true);

console.log(`Perulangan sudah dilakukan sebanyak ${jumlahClick-1} kali`)

// Exercise 5
let userAnswer;

do {
    userAnswer = prompt("Sebutkan kepanjangan dari nama IB! (PERINGATAN: Jawaban case sensitive)");
}   while(userAnswer !== "Impact Byte"); 

alert("Selamat jawaban kamu benar!")