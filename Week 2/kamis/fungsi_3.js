function processSentence(nama, umur, alamat, hobbi)
{

    return 'nama saya ' + nama + ' umur saya ' + umur + ' tinggal di ' + alamat + ' Hobby saya ' + hobbi; 
}

var nama,umur,alamat,hobi, unity;

nama = 'syahid';
umur = 17;
alamat = 'Pondok Petirr';
hobbi = 'nonton anime';

unity = processSentence(nama, umur, alamat, hobbi);

console.log(unity)