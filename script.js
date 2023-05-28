var user = +prompt("Enter the first number");
var i = +prompt("Enter the second number");
var data = +prompt("Enter the third number");
if (user < i && user > data || user > i && user < data  ) {
    console.log( user );
} else if (i <user && i > data || i > user && i < data){
    console.log(i );
} else if (data < user &&  data > i ||  data > user && data < i) {
    console.log(data);
}