function balik (a)
{
    var b = '';

    for (var i=a.length - 1; i>=0; i--)
    {
        b += a[i];
    }

    return b;
}

a = 'syahid';

balik(a);

console.log (balik(a));
