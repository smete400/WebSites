let random = Math.ceil(Math.random()*10);
let health = 3;
let i = 0;
let puan_sist;

while(i < health){

    i++;
    let sorusr = prompt("Lütfen Bir Tahminde Bulunuz");

    if (random < sorusr){
        console.log("Aşağı");
        console.log(`Kalan Tahmin Hakkı: ${health - i}`);
        continue;
    }

    else if (random > sorusr){
        console.log("Yukarı");
        console.log(`Kalan Tahmin Hakkı: ${health - i}`);
        continue;
    }

    else {
        alert('Tebrikler');
        console.log(`Kalan Tahmin Hakkı: ${health - i}`);
        console.log(`Toplam puan (${i*33.333}))`)
        break;
    }

    if (i < health){
        console.log("Tahmın hakkı bitti");
    }
}
