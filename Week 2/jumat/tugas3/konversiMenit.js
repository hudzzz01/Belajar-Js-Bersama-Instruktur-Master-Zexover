function konversiMenit(menit)
{
    var z = parseInt(menit/60), s = 0;

    for (var i=0; i<z; i++)
    {

        if (menit >= 60 && menit % 60 != 0)
        {
           s = parseInt(menit/60);
           menit %=60;

           

      

        }
        
        else if (menit >= 60 && menit % 60 == 0)
        {
            s = parseInt(menit/60);
            menit = '00';
        }
       
    
    }

    if (menit < 60 && s == 0)
        {
            s = '00';
        }

  
    else if (menit < 10 && s != 0)
        {
            menit = '0' + menit
        }



    return "hasilnya adalah " + s + ":" + menit ;


}


console.log (konversiMenit(3050));


