alert("CTN Banka ATMsine Hoşgeldiniz.")
var f_name = 'Ali';
var s_name = "ÇETİN";
var passwd = 2053;
var i = 0;
var toplam = 5000;
var ek_top = 500;

while(i < 3){
    i++;
    
    let ask = prompt('Lütfen Kart Şifrenizi Giriniz.');

    if (passwd == ask)
    {
        
        alert('Tebrikler Başarıyla Giriş Yaptınız');
        
        let money = prompt("Lütfen Para miktarınızı Giriniz(Min:10TL-Max:5500TL)");
        
        if ( toplam > money )
            {
        
            function darkLight(a, b)
                {
                let l_money = a - b;
                console.log(`Hesabınızda Kalan Para ${l_money}`);
                return l_money;
                }
                   darkLight(toplam,money);
                    break;
            }
        else if(toplam < money)
            {
                let quest = prompt('Hesabınıda bu kadar para yok ek hesabı kullanmak için "Y" kullanma(mak) için ise "N" tuşuna basınız');

                if(quest == 'Y')
                { 
                    let all_mon = toplam + ek_top;
                    alert(`Ek Hesapla Birleşip Toplamda Olan toplam para ${all_mon}`);
                    function  apocrfy(x, y)
                    {
                        var t = x - y;
                        console.log(`Hesapta Kalan Toplam Para: ${t}`);
                        return t;
                    }
                    apocrfy(all_mon,money);
                    break;
                }
                else if(quest == 'N'){
                    console.log('Sistemden Çıkılıyor...');
                    break;
                }
            }
        
    }    

    else if(passwd !== ask){
            alert("Şifreniz hatalı lütfen tekrar deneyiniz");

            if (i == 3){
                alert("Şifrenizi 3 defa yanlış girdiniz lütfen mobil uygulamadan veya en yakın bankamıza uğrayarak yeni bir şifre alınız.");
                break;
            }
            continue;
        }

}
