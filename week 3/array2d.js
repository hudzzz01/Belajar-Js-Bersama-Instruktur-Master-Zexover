var syahid = [

    ["*", "", "*", "", "*"],
    ["*", "*", "", "*", "*"],
    ["", "*", "*", "*", ""]


]

var count = 0;

for (var i =0; i < syahid.length; i++)
{
    for (var j=0; j < syahid[i].length; j++ )
    {
        if (syahid[i][j] == "*")
        {
            count ++;
        }      
    }


}

console.log(count);