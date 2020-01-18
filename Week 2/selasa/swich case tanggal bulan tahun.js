//program tanggal bulan tahun 
//syahid 17 januari 2020

var hari, bulan,tahun, sample = true;

hari = 31;
bulan = 0 ;
tahun = 2200;

if (hari <= 0 || hari > 31)
{
    console.log("Masukan hari dengan anka 1 sampai 31")
    sample = false;
}
else if (bulan <= 0 || bulan >12)
{
    console.log("masukan bulan dengan menyatakan 1 sampai 12")
    sample = false;
}
else if (tahun < 1900 || tahun > 2200)
{
    console.log("Masukan tahun antara 1900 samapi 2200")
    sample = false;
}

if (sample == true)
{

    switch (bulan)
    {
        case 1 :
            console.log( hari + " januari " + tahun);
        break;
        case 2 :
            console.log( hari + " febuari " + tahun);
        break;
        case 3 :
            console.log( hari + " maret " + tahun);
        break;
        case 4 :
            console.log( hari + " april " + tahun);
        break;
        case 5 :
            console.log( hari + " mei " + tahun);
        break;
        case 6 :
            console.log( hari + " juni " + tahun);
        break;
        case 7 :
            console.log( hari + " juli " + tahun);
        break;
        case 8 :
            console.log( hari + " agustus " + tahun);
        break;
        case 9 :
            console.log( hari + " september " + tahun);
        break;
        case 10 :
            console.log( hari + " oktober " + tahun);
        break;
        case 11 :
            console.log( hari + " november " + tahun);
        break;
        case 12 :
            console.log( hari + " desember " + tahun);
        break;
        default :
            console.log ("-99");
        break;
    
    }



}
