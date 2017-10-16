var result_section = document.getElementById("result_section");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var division = document.getElementById("division");
var multiple = document.getElementById("multiple");
var equal = document.getElementById("equal");
var clear = document.getElementById("clear");
var number = document.getElementsByClassName("number");

var operand_r = 0; 
var operand_l = 0;
var operater = 0;
var isOnOperater = false;

for (var a = 0; a <number.length ;a++){
    number[a].addEventListener("click", function(){
        if(isOnOperater === false){
            if(operand_r === 0){
                operand_r = this.innerHTML;
            }else{
                operand_r += this.innerHTML;
            }
            result_section.innerHTML = operand_r;
        }else if(isOnOperater === true){  
            if(operand_l === 0){
                operand_l = this.innerHTML;
            }else{
                operand_l += this.innerHTML;
            }
            result_section.innerHTML = operand_l;
        }
    });
}

function decideOperand(){
    if(isOnOperater === false){
        result_section.innerHTML = this.innerHTML; // 화면에 그리기 
        operater = this.innerHTML;
        isOnOperater = true;
    }else{
        var resu = calculate(parseInt(operand_r),parseInt(operand_l),operater);
        result_section.innerHTML = resu;
        operand_r = resu;
        operater = this.innerHTML;
        operand_l = 0;
    }
}

function calculate(r,l,op){
    if(op === "+"){ return r + l;}
    else if(op === "-"){return r - l;}
    else if(op === "*"){return r * l;}
    else if(op === "/"){return r / l;}
 }

equal.addEventListener("click", function(){
    if(operand_r!==0 && operand_l!==0 && operater!==0){   
        var re = calculate(parseInt(operand_r),parseInt(operand_l),operater);
        result_section.innerHTML = re;
        operand_r = re;
        operand_l = 0;
        operater = 0;
        isOnOperater = false;
    }
});

clear.addEventListener("click", function(){
    operand_r =0;
    operand_l = 0;
    result_section.innerHTML =0;
    isOnOperater = false;
});


plus.addEventListener("click", decideOperand);
minus.addEventListener("click",decideOperand);
multiple.addEventListener("click",decideOperand);
division.addEventListener("click",decideOperand);


// 연속해서 연산 할수 있게!! 
// isOnOperater == false 일때 --> right에 저장, 
// isOnOperater == false 일때 --> 입력한 연산자 화면에 그리기 그리고 연산자 저장
//                               isOnOperater == true 가 된다. 
// isOnOperater == true  일때 : left에 저장. 

// if(right != 0 && left!=0 && operater!=0) 
//      if ( = 을 누르는 경우 ) 
//          계산하기  
//          화면에 결과 보여주기 
//          *** 연속된 연산을 위하여 결과를 right에 넣어주기             화면에 그리고 
//                      right값에 넣어주고 
//                      isOnOperater == false이 되고 
//                      left 값도  == 0 이되고 

// 만약에 right left가 0이 아니고  isOnOperater == true에서 또다른 연산자가 다시 눌린다면 
// 계산해서 결과값을 화면에 그리고 right 값에 넣고 
// left는 0만들고 
// 2번째로 누른 연산자가 어떤건지 저장. 

// clear  ==  right , left , 화면 , isOnOperater 전부 = 0, 









