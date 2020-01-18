//menghitung tahun kabisar
//hudzzz01 16 januari 2020
var tahun = 2000;

if ((tahun % 4 == 0 && tahun % 100 != 0) || (tahun % 4 == 0 && tahun % 100 == 0 && tahun % 400 == 0))
{


    console.log(tahun + " tahun kabisat");
}
else
{

    console.log(tahun + " bukan tahun kabisat")
}