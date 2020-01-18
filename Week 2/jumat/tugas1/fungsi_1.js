function bandingkanAngka (angka1, angka2)
{
    var anuan = '';

    if(angka1 < angka2)
    {
        anuan = 'true';
    }
    else if(angka1 > angka2)
    {
        anuan = 'false';
    }
    else
    {
        anuan = '-1'
    }

    return anuan;
}

var angka1, angka2, hasilPerbandingan;

    angka1 = 4;
    angka2 = 4;

    hasilPerbandingan = bandingkanAngka(angka1, angka2);

    console.log(hasilPerbandingan);