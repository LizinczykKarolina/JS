/**
 * Created by Jacob on 2017-10-24.
 */
// Operations:
// var add =
// var subtract =
// var divide =
// var multiply =
// var modulus =
// clear output =
// var output

//buttons with numbers display in output

var output = "";
var num1 = null;
var num2 = null;
var operation = null;
var result = null;

$(document).ready(function(){
    $("[id^='oper']").click(function(){
         if (num2 == null && operation != null){
             get_num2 = output.split(operation);
             num2 = Number(get_num2[1]);

             result = operation_selector(num1, num2, operation);
             console.log("num1 = " + num1 + "; num2 = " + num2 + "; result= " + result);
             if (this.id == 'oper_equal') {
                output = result;
                operation = null;
                num1 = result;
                num2 = null;
             }
             else {
                output = result + this.value;
                operation = this.value;
                num1 = result;
                num2 = null;
             }
         }
         else{
             num1 = Number(output);
             operation = this.value;
             console.log("operation is:" + typeof (operation));
             output += operation;
         }


        console.log(this.value);
        console.log(output);
        document.getElementById("output").value = output;
    });
    $("[id^='num_']").click(function(){
        output += this.value;


        console.log(output);
        document.getElementById("output").value = output;
    });

    function operation_selector(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return arg1 + arg2;
        case "-":
            return arg1 - arg2;
        case "/":
            return arg1 / arg2;
        case "%":
            return arg1 % arg2;
        case "*":
            return arg1 * arg2;
    }
}
});

console.log("output");

var clear_output = function () {
    document.getElementById("output").value = "0";
    output = "";
    num1 = null;
    num2 = null;
    operation = null;
    result = null;
};


