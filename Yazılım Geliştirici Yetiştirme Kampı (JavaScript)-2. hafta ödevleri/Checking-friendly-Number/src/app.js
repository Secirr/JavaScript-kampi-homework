// İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir. 


function friendlyNumbers(a,b){

    let friendlyBolenA = 0; //Birinci parametrenin bölenlerini tutacağımız değişken
    let friendlyBolenB = 0; //Birinci parametrenin bölenlerini tutacağımız değişken

    for(let i = 1; i < a; i++){ //birinci parametrenin bölenlerini buluyoruz

        if(a % i == 0){ // birinci parametreyi sorguluyoruz
            friendlyBolenA += i // bölenleri tutmak istediğiniz değişkene atıyoruz
        }
    }
    for(let i = 1; i < b; i++){ //ikinci parametrenin bölenlerini buluyoruz
        if(b % i == 0){ // ikinci parametreyi sorguluyoruz
            friendlyBolenB += i // bölenleri tutmak istediğiniz değişkene atıyoruz
        }
    }

    if(a == friendlyBolenB && b == friendlyBolenA){
        console.log(a + " ve " + b + " arkadaş sayılardır.")
    }else{console.log(a + " ve " + b + " sayıları arkadaş sayı değildir.")}
}


friendlyNumbers(20,25)
friendlyNumbers(220,284)
friendlyNumbers(22,212)

    //BU KODUN ÇIKTISI

// 20 ve 25 sayıları arkadaş sayı değildir.
// 26 220 ve 284 arkadaş sayılardır.
// 22 ve 212 sayıları arkadaş sayı değildir.

    //BU KODUN ANLATIMI

// 1 - İki parametre alır: a ve b. Bu parametreler, karşılaştırmak istediğiniz iki sayıdır.

// 2 - friendlyBolenA ve friendlyBolenB adında iki değişken tanımlanır. Bu değişkenler, a ve b sayılarının bölenlerini toplamak için kullanılacaktır. İlk başta her iki değişken de sıfır olarak başlatılır.
    
// 3 - İlk for döngüsü, a sayısının bölenlerini hesaplamak için kullanılır. Bu döngü i değişkenini 1'den başlatır ve i sayısı a'ya eşit olana kadar çalışır.
    
// 4 - Her bir döngü adımında, if koşulu kullanılarak a % i == 0 kontrol edilir. Bu koşul, i'nin a'nın bir böleni olup olmadığını kontrol eder.
    
// 5 - Eğer i a'nın bir böleniyse, friendlyBolenA değişkenine i eklenir. Bu, a sayısının bölenlerinin toplamını hesaplar.
    
// 6 - İkinci for döngüsü, aynı mantığı kullanarak b sayısının bölenlerini hesaplar.
    
// 7 - Ardından, if koşulu ile a ve b sayılarının bölenlerinin toplamının birbirine eşit olup olmadığı kontrol edilir. Eğer eşitlerse, bu iki sayı "arkadaş sayılar" olarak kabul edilir ve bir mesaj yazdırılır. Aksi halde, bu sayılar "arkadaş sayılar değildir" mesajı yazdırılır.