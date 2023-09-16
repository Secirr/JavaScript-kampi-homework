// kendisi hariç pozitif tam bölenlerinin toplamı kendisine eşit olan sayıya mükemmel sayı denir.

    let sayilar = []

    for(let i = 1; i <= 1000; i++){
        sayilar.push(i)  //oluşturduğum boş diziye döngüdeki elemanları ekliyorum.
    }

    checkPerfect(...sayilar)

    function checkPerfect(...sayilar){

        for(let i = 0; i < sayilar.length; i++){ //Dizinin tüm elemanlarını geziyorum

            let perfectBolen = 0

           for(let j = 1; j < sayilar[i]; j++){ //Elimdeki elemanın tüm bölenlerini kontrol ediyorum.
                if(sayilar[i] % j == 0){
                    perfectBolen += j
                }
           }

           if(perfectBolen == sayilar[i]){
            console.log(sayilar[i] + " sayısı bir mükemmel sayıdır.")
           }
           else{
            console.log(sayilar[i] + " sayısı mükemmel sayı değildir!")
            }
        }
    
    }

    checkPerfect()


    //BU KODUN ÇIKTISI

// 1 sayısı mükemmel sayı değildir!
// 2 sayısı mükemmel sayı değildir!
// 3 sayısı mükemmel sayı değildir!
// 4 sayısı mükemmel sayı değildir!
// 5 sayısı mükemmel sayı değildir!
// 6 sayısı bir mükemmel sayıdır.
// 7 sayısı mükemmel sayı değildir!
// 8 sayısı mükemmel sayı değildir!
// 9 sayısı mükemmel sayı değildir!
// 10 sayısı mükemmel sayı değildir!
// 11 sayısı mükemmel sayı değildir!
// 12 sayısı mükemmel sayı değildir!
// 13 sayısı mükemmel sayı değildir!
//     .
//     .
//     .
//  1000 e kadar devam eder



    //BU KODUN ANLATIMI

// 1 - sayilar adında bir boş dizi (array) oluşturulur.

// 2 - Bir for döngüsü kullanarak 1'den 1000'e kadar olan sayılar sayilar dizisine eklenir. 

// 3 - checkPerfect fonksiyonu tanımlanır ve bu fonksiyon ...sayilar ile bir veya daha fazla argüman alır. Ancak, bu fonksiyon çağrıldığında hiçbir argüman ile çağrılmamıştır (checkPerfect()), bu nedenle içerideki argümanları kullanmayacak.

// 4 - checkPerfect fonksiyonu içinde bir döngü oluşturulur, bu döngü sayilar dizisindeki her bir sayıyı kontrol eder.

// 5 - Her bir sayı için bir perfectBolen değişkeni oluşturulur ve sıfıra ayarlanır. Bu değişken, sayının mükemmel bir sayı olup olmadığını kontrol etmek için kullanılacaktır.

// 6 - İç içe döngü vardır. İçteki döngü, 1'den başlayarak sayının kendisine kadar olan sayıları kontrol eder (for (let j = 1; j < sayilar[i]; j++)).

// 7 - Her bir iç döngü adımında, sayının j'ye bölünüp bölünmediği kontrol edilir. Eğer bölünüyorsa, perfectBolen değişkenine j eklenir. Bu, sayının bölenlerinin toplamını hesaplar.

// 8 - İçteki döngü tamamlandığında, perfectBolen değişkeni, orijinal sayının bölenlerinin toplamını içerir.

// 9 - Şimdi, perfectBolen değişkeninin değeri, orijinal sayı ile karşılaştırılır. Eğer bu iki değer eşitse, o zaman sayı bir mükemmel sayıdır ve bu durumda console.log kullanılarak ekrana yazdırılır. Aksi takdirde, sayı bir mükemmel sayı değildir ve bu da console.log ile bildirilir.

// 10 - En sonunda, checkPerfect fonksiyonu çağrılır, ancak hiçbir argüman ile çağrılmadığı için sayilar dizisini kullanır ve bu dizideki her bir sayıyı kontrol eder. Sonuçlar console.log ile ekrana yazdırılır.