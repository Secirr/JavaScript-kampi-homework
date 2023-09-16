
//1 ile 1000 arasındaki her sayının asal olup olmadığını belirler ve sonuçları ekrana yazdırır.

let sayiDizisi = [];

for (let i = 1; i <= 1000; i++) {
    sayiDizisi.push(i);
}

sayilar(...sayiDizisi)

function sayilar(...sayiDizisi){

    for(let i = 0; i < sayiDizisi.length; i++){

        let sayac = 0;

        if(sayiDizisi[i] <= 1){
            console.log(sayiDizisi[i] + " sayısı asal değildir")
            continue;
        }
        for(let j = 2; j < sayiDizisi[i]; j++){
            if(sayiDizisi[i] % j == 0){
                sayac++
            }
        }
        if(sayac == 0){
            console.log(sayiDizisi[i] + " sayısı asaldır.")
        }else{
            console.log(sayiDizisi[i] + " sayısı asal değildir.")
        }
    }
}

sayilar()



     //BU KODUN ÇIKTISI

//  1 sayısı asal değildir
//  2 sayısı asaldır.
//  3 sayısı asaldır.
//  4 sayısı asal değildir.
//  5 sayısı asaldır.
//  6 sayısı asal değildir.
//  7 sayısı asaldır.
//  8 sayısı asal değildir.
//  9 sayısı asal değildir.
//  10 sayısı asal değildir.
//  11 sayısı asaldır.
//  12 sayısı asal değildir.
//  13 sayısı asaldır.
//     .
//     .
//     .
//  1000 e kadar devam eder



     //BU KODUN ANLATIMI

// 1 - sayiDizisi adında boş bir dizi oluşturulur. Bu dizi, 1'den 1000'e kadar olan sayıları içerecek.

// 2 - Bir for döngüsü kullanarak, 1'den 1000'e kadar olan sayıları sayiDizisi dizisine ekler.

// 3 - sayilar fonksiyonu tanımlanır ve bu fonksiyon, bir veya daha fazla sayıyı alabilen rest parametresi ...sayiDizisi ile çağrılır.

// 4 - sayilar fonksiyonu içinde bir döngü kullanılır, bu döngü ile dizi içindeki her sayı kontrol edilir.

// 5 - sayac adında bir değişken oluşturulur ve her sayının asal olup olmadığını kontrol etmek için kullanılır. Başlangıçta sayac sıfırdır.

// 6 - İlk if koşulu, sayının 1 veya daha küçük olduğunu kontrol eder. Eğer sayı 1 veya daha küçükse, bu sayı asal değildir ve ekrana "sayısı asal değildir" mesajı yazdırılır. Bu durumda, döngü continue ifadesi ile geçer ve bir sonraki sayıya geçer.

// 7 - İç içe bir başka for döngüsü kullanılır. Bu iç döngü, sayının 2'den başlayarak kendisine kadar olan tüm sayıları kontrol eder.

// 8 - İç döngüdeki if koşulu, sayının mevcut döngüdeki değeri (j) ile bölündüğünde kalanın sıfır olup olmadığını kontrol eder. Eğer kalan sıfırsa, bu sayının asal olmadığı anlamına gelir ve sayac artırılır.

// 9 - İç döngü tamamlandığında, sayac değeri kontrol edilir. Eğer sayac hala sıfırsa, bu sayı asal olarak kabul edilir ve ekrana "sayısı asaldır" mesajı yazdırılır. Aksi takdirde, sayı asal değildir ve "sayısı asal değildir" mesajı yazdırılır.

// 10 - sayilar fonksiyonu çağrıldığında, dizideki her sayının asal olup olmadığı kontrol edilir.


