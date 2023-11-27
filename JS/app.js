// 1. Soru: Verilen bir dizi içindeki tek sayıları bulup yeni bir diziye ekleyin.

let numbers1 = [5, 2, 6, 4, 5, 6, 7, 8, 9];
let tekSayilar = [];
for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 2 === 1) {
    tekSayilar.push(numbers1[i]);
  }
}

console.log(tekSayilar);
// 2. Soru: Bir dizi içindeki sayıları büyükten küçüğe sıralamak için hangi dizi yöntemini kullanırsınız ve nasıl yaparsınız?
let numbers2 = [8, 4, 6, 12, 9, 5, 7, 11, 13];
let buyuktenKucuge = numbers2.sort((a, b) => a - b);
console.log(buyuktenKucuge);
// 3. Soru: Bir dizi içindeki metin öğelerini birleştirerek tek bir metin oluşturmak için hangi dizi yöntemini ve diziyi nasıl kullanırsınız?
let words = ["Merhaba", "dünya", "bu", "bir", "örnektir"];

let metin = words.join("!");
console.log(metin);
//! 4. Soru: Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.
let sentence = "JavaScript harika bir dil";
let newSentence = sentence.split(" ").reverse().join(" ");
console.log(newSentence);
let sentence2 = [];
for (let i = sentence.split(" ").length - 1; i >= 0; i--) {
  sentence2.push(sentence.split(" ")[i]);
}
console.log(sentence2.join(" "));
let yeni= sentence2.join(" ")
console.log(yeni);

//! 5. Soru: Bir metinde "u" harfini içeren kaç kelime olduğunu bulmak için hangi dizi yöntemini kullanırsınız ve nasıl yaparsınız?

let text =
  'There are many shorthand techniques in JavaScript that can shorten the code length, reduce redundancy, and improve the readability and maintainability of the code. This article will introduce 20 JS abbreviation techniques to improve efficiency, helping you say goodbye to the shit mountain and write elegant code easily!'
let sayac=0
for(let i =0; i<text.length; i++ ){
  if(text[i].includes("u")===true){

    sayac++

  }
}
console.log(sayac);

//! 7. Bir isim listesindeki isimlerden ilk 10 ve son 10 ismi çıkartarak yeni bir sıralı liste oluşturun.

let isimListesi = ["Ali", "Ayşe", "Mehmet", "Fatma", "Hasan", "Zeynep", "Emre", "Selin", "Mustafa", "Elif", "Baran", "Gamze", "Eren", "Dilara", "Burak", "Pınar", "İsmail", "Sibel", "Murat", "Gülşah", "Ahmet", "Hatice", "Kemal", "Sevgi", "Yusuf", "Aslı", "Can", "Zehra", "Onur", "Ebru", "Serkan", "Nazlı", "Cemal", "Gonca", "Ercan", "Esra", "Hakan", "Nur"];
console.log(isimListesi.length);
let yeniListe= isimListesi.slice(10,-10)
console.log(yeniListe);
// 6. Soru: İki dizi içindeki ortak elemanları bulup yeni bir dizi oluşturun?

 let arr1 = [1, 2, 3, 4, 5];
 let arr2 = [3, 4, 5, 6, 7];

 let arr3=[]
 for(let i=0; i<arr1.length;i++){
  for(let j=0; j<arr2.length; j++){
    if(arr1[i]===arr2[j]){
      arr3.push(arr1[i])
    }
  }
 }
 console.log(arr3);

for(let i=1; i<11; i++){
  for(let j=1; j<11; j++){
    console.log(`${i}x${j}=${i*j}`);
  }
  console.log("***************");
}

let factorial= (n)=>{
  if(n===0){
    return 1
  }else{
    return n* factorial(n-1)
  }
 
}
console.log(factorial(3));


