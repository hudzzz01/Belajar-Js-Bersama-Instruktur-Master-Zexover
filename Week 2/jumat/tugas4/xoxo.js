function hudz(uwwu,)
{
 
    var x =0, o =0, hasil = false;

    for (var i = 0; i < uwwu.length ; i++)
    {
        if( uwwu[i] == 'x' )
        {
            x++;
        }
        else if (uwwu[i] == 'o')
        {
            o++;
        }

    }

    if (x == o)
    {
        hasil = true;
    }
    else if (x != o)
    {
        hasil = false;
    }

    return hasil;

}

console.log(hudz('xoxo'));

console.log(hudz('xoxox'));

console.log(hudz('xoxoxoxoxxxoooox'));