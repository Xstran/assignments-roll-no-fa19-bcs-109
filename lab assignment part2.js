

    function kthDigitFromLast(n, k)
{
     
    // If k is less than equal to 0
    if (k <= 0)
    {
      console.log(-1);
        return;
    }
    var temp = String(n);
     
    // If k is greater than length of the
    // string temp
    if (k > temp.length)
    {
      console.log(-1);
    }
     
    // Print the k digit from last
    else
    {
        var req = temp.charAt(temp.length - k)
         
        // Convert to number again
        console.log(Number(req));
    }
}
var n = 23617;
var k = 4;
 

kthDigitFromLast(n, k);



var a = "23618";
let arr = [];
for (let aa of a) {
  arr.push(parseInt(aa));

  console.log(arr);

  var result = arr.reduce((prev, curr) => {
      return prev + curr;
  })
  console.log(`total result=${result}`);


const numbers = [65, 44, 12, 4];


function myFunction(numbers) {
   let  sum=0;
    for(let i = 0; i <= numbers.length; i++){
        if(i % 2 == 0){
            sum = sum + numbers[i];
        }
        
    } 
    console.log(sum);
    }  
 
 

const newArr = numbers.map(myFunction) 
 function sqcu(){
   for(let i=0; i<=10; i++){
    console.log("the square of 0 to 10 number is  is",i*i);
    console.log("the cube of 1 to 10 ",i**i);

   }

}
console.log(sqcu())
 
 function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("comsats")); 
 function first_last_1(nums)
{
  var end_pos = nums.length - 1;
  return nums[0] == 10 || nums[end_pos] == 10;
}


console.log(first_last_1([10, 3, 5]));
console.log(first_last_1([1, 3, 5, 10]));
console.log(first_last_1([2, 4, 6]));



 

let numStr = [2,3,6,1,7];

function getSum(total, num) {
  return total + (num%2===0?num:0);
}
var my_sum = numStr.reduce(getSum, 0);

console.log(my_sum)

//guessgame

 const ps = require('prompt-sync');
  const prompt = ps();
  var randomGuesser = () => {
      var randomNumber = Math.floor((Math.random() * 10 + 1));// 1 to 10
      console.log(randomNumber);
      var guessNumber = prompt("Enter You guess::");// package is installed prompt-sync
      if (guessNumber == randomNumber) {
          console.log("You WIN");
      }
      else {
          console.log("Not Matched")
      }

  }




// wovel


function str_vowel()
{
	var str=prompt("Enter the string\n", " ");
	for(var i = 0; i<str.length; i++)
	{
		if (str.charAt(i) =='a' || str.charAt(i) == 'e' || str.charAt(i) =='i'
		|| str.charAt(i) == 'o' || str.charAt(i) == 'u' || str.charAt(i) == 'A' ||
		str.charAt(i) == 'E' || str.charAt(i) =='I' || str.charAt(i) =='O' || str.charAt(i) == 'U')
		{
			console.log("The entered string is:" +str);
			console.log("The leftmost vowel is :"+str.charAt(i));
			var pos = i+1;
			console.log("The position of the leftmost vowel " +str.charAt(i)+ " is:" +pos+"\n");
			exit;
		}
	}
	console.log("The entered string is:" +str);
	console.log("The entered string has no vowels");}
  console.log(str_vowel()); 

  var str=prompt("Enter the numbers");

  function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log((reverse_a_number(str)));
