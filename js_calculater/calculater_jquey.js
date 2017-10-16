var result_section = $("#result_section");
var plus = $("#plus");
var minus = $("#minus");
var division = $("#division");
var multiple = $("#multiple");
var equal = $("#equal");
var clear = $("#clear");
var $number = $(".number");;

var operand_r = 0; 
var operand_l = 0;
var operater = 0;
var isOnOperater = false;

$number.on("click",function(){
    if(isOnOperater === false){
        if(operand_r === 0){
            operand_r = $(this).html();
        }else{
             operand_r += $(this).html();
        }
            result_section.html(operand_r);
            console.log(operand_r);
        }else if(isOnOperater === true){  
            if(operand_l === 0){
                operand_l = $(this).html();
            }else{
                operand_l += $(this).html();
            }
            result_section.html(operand_l);
        }
    });


function decideOperand(){
    if(isOnOperater === false){
        result_section.html($(this).html()); // 화면에 그리기 
        operater = $(this).html();
        isOnOperater = true;
    }else{
        var resu = calculate(parseInt(operand_r),parseInt(operand_l),operater);
        result_section.html(resu);
        operand_r = resu;
        operater = $(this).html();
        operand_l = 0;
    }
}

function calculate(r,l,op){
    if(op === "+"){ return r + l;}
    else if(op === "-"){return r - l;}
    else if(op === "*"){return r * l;}
    else if(op === "/"){return r / l;}
 }


equal.click(function(){
    if(operand_r!==0 && operand_l!==0 && operater!==0){   
        var re = calculate(parseInt(operand_r),parseInt(operand_l),operater);
        result_section.html(re);
        operand_r = re;
        operand_l = 0;
        operater = 0;
        isOnOperater = false;
    }
});

clear.click(function(){
    operand_r =0;
    operand_l = 0;
    result_section.html(0);
    isOnOperater = false;
});


plus.click(decideOperand);
minus.click(decideOperand);
multiple.click(decideOperand);
division.click(decideOperand);

 









