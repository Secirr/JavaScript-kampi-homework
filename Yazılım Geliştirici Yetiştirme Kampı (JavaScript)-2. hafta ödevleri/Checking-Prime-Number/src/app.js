//Asal sayılar, sadece iki pozitif tam sayı böleni olan, kendisine ve 1 sayısına kalansız bölünebilen, 1'den büyük sayılardır.

    console.log("Asal Sayı Olabilme Kuralları:")
    console.log("1 - pozitif tam sayı olmalıdır.")
    console.log("2 - kendisine ve 1 sayısına kalansız bölünebilmeli.")
    console.log("###################################################")
    
    function findPrime(...numbers){ //rest kullanarak fonksiyona istediğimiz kadar parametre gönderebiliriz.

        for(let i = 0; i < numbers.length; i++){ 

            let sayac = 0

            if(numbers[i] <=1){ //aşağıdaki döngüde kontrolü sağlanmayan 1 ve eksili sayıların kontrolünü sağlar
                sayac++;  
            }
       
            for(let j = 2; j < numbers[i]; j++){ 
                if(numbers[i] % j == 0){   
                    sayac ++;                
                                           
                }
            
            }
            if(sayac == 0){
                console.log(numbers[i] + " sayısı asaldır.")
            }else{
                 console.log(numbers[i] + " sayısı asal değildir.")
                }
            
        }
    }
 
    findPrime(1,2,3,4,5,-1,-2,-3,90,89);

    
    //BU KODUN ÇIKTISI

//  Asal Sayı Olabilme Kuralları:
//  1 - pozitif tam sayı olmalıdır.
//  2 - kendisine ve 1 sayısına kalansız bölünebilmeli.
//  ###################################################
//  1 sayısı asal değildir.
//  2 sayısı asaldır.
//  3 sayısı asaldır.
//  4 sayısı asal değildir.
//  5 sayısı asaldır.
//  -1 sayısı asal değildir.
//  -2 sayısı asal değildir.
//  -3 sayısı asal değildir.
//  90 sayısı asal değildir.
//  89 sayısı asaldır.
  


     //BU KODUN ANLATIMI

// 1 - Dıştaki döngü for(let i = 0; i < numbers.length; i++) ile dizi içindeki her bir sayıyı sırayla ele alır. 

// 2 - İç döngü for(let j = 2; j < numbers[i]; j++) ile her bir sayının bölenlerini kontrol eder. 2'den başlayarak sayının kendisine kadar olan tüm sayıları deneyerek sayının bölenlerini sayar. Bu, bir sayının asal olup olmadığını kontrol eder.

// 3 - İç döngü içinde, eğer numbers[i] (şu anki sayı) bir böleni (j) bölüyorsa, sayac değişkeni artırılır. Eğer numbers[i] bir asal sayıysa, hiç böleni olmamalıdır, bu nedenle sayac 0 olarak kalır.

// 4 - İç döngü sona erdikten sonra, sayac değişkeninin değeri incelenir. Eğer sayac 0 ise, bu demektir ki hiç bölen bulunamamıştır ve bu sayı asal olarak kabul edilir. Aksi durumda, sayac'ın değeri 0'dan farklıdır ve bu sayı asal değildir.

// 5 - Sonuçlar console.log ile konsola yazdırılır. Eğer sayı asalsa, "sayısı asaldır.", aksi takdirde "sayısı asal değildir." yazdırılır.


// Sonuç olarak, bu kod bir dizi sayının her birini alır, her bir sayının asal olup olmadığını kontrol eder ve sonuçları konsola yazdırır.

