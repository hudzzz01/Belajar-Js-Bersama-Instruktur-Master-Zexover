var string = "invoker";
console.log (string);

var temp = "";

for(var i= string.length - 1; i >= 0; i--)
{
    temp += string[i];


    console.log (temp);
}
string = temp

console.log (string);