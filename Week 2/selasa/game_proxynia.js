//game proxinia
//hudzzz01 17 januari 2020

var kosong = "",nama,peran;

nama = "syahid"
peran = ""

if (nama == kosong || nama == kosong && peran != kosong)
{
    console.log("Nama wajib di isi")
}
else if (nama != kosong && peran == kosong)
{
    console.log("Silahkan pilih peran mu untuk memulai game")
}
else if (nama == kosong && peran == kosong)
{
    console.log("Nama dan peran wajib di isi")
}
else
{
 if(peran == "ksatria")
 {
     console.log("selamat datang di dunia proxynia " + nama + " ksatria memiliki pedang dan dapat menyerang");

 }
 else if (peran == "tabib")
 {
     console.log("selamat datang di dunia proxynia " + nama + " Kamu akan membantu teman kamu yang terluka")

 }
 else if (peran == "penyihir")
 {
     console.log("selamat datang di dunia proxynia " + nama + " ciptakan keajaiban untuk membantu kemenangan mu")
 }

 else
 {
     console.log(" isi peran harus 'kesatria,tabib atau penyihir'")
 }

}