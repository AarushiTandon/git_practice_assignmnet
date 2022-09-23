
let str = "naman";
let palindromic_str = "";

for(let i=str.length-1;i>=0;i--)
{
	palindromic_str+=str[i];
}
if(palindromic_str===str)
{
	console.log(str, "is Palindromic String");
}
else
{
	console.log(str, "is not Palindromic String");
}