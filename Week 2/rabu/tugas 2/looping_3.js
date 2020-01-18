console.log("GANJIL GENAP")
for(var i = 1; i<100; i++)
{
 

console.log( "sekarang counter ke " + i + "\n");

    if(i%2 == 0)
    {
        console.log("GENAP");
    }
    else if(i%2 != 0)
    {
        console.log("GANJIL");
    }
}

console.log("PERULANGAN KE 2 KELIPATAN 3")
for(var i = 1; i<100; i+=2)
{

    if(i%3 == 0)
    {
    console.log(i + " kelipatan 3");
    }
    else
    {
        console.log (i + "");
    }
}

console.log("\nPERULANGAN KE 5 KELIPATAN 6")
for(var i = 1; i<100; i+=5)
{

    if(i%6 == 0)
    {
    console.log(i + " kelipatan 6");
    }
    else
    {
        console.log (i + "");
    }
}

console.log("\nPERULANGAN KE 9 KELIPATAN 10")
for(var i = 1; i<100; i+=9)
{

    if(i%10 == 0)
    {
    console.log(i + " kelipatan 10");
    }
    else
    {
        console.log (i + "");
    }
}