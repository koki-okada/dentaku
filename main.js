  function get_calc(btn) {
      if(btn.value == "=") {
        document.calc.display.value = eval(document.calc.display.value);
      } else if (btn.value == "AC") {
        document.calc.display.value = "";
      } else {
        document.calc.display.value += btn.value;
        input_check();
        input_check2();
      }
    }
    
    
// 入力チェックの関数(先頭の値が0か演算子だったら、初期化)
function input_check(){
  if(document.calc.display.value.slice( 0, 1 ) == "0"){
      document.calc.display.value = "";
    }else if(document.calc.display.value.slice( 0, 1 ) == "+"){
      document.calc.display.value = "";
    }else if(document.calc.display.value.slice( 0, 1 ) == "-"){
      document.calc.display.value = "";
    }else if(document.calc.display.value.slice( 0, 1 ) == "*"){
      document.calc.display.value = "";
    }else if(document.calc.display.value.slice( 0, 1 ) == "/"){
      document.calc.display.value = "";
    }
}

// 入力チェックの関数(末尾２桁が演算子だったら、演算子を上書き)
function input_check2(){
  let operator = new Array('+', '-', '*', '/');
  let operator_check = document.calc.display.value.slice( -2 );
  let display_operator = document.calc.display.value.slice( -1 );
  
  // 末尾２桁(operator_check)に演算子(operator)が含まれる場合、末尾２桁を削除して、末尾の演算子(display_operator)を入力する
  if(document.calc.display.value.slice( -2 ) == operator.inclueds(operator_check)){
      document.calc.display.value.slice( -2 ).val("");
      document.calc.display.value.slice( -1 ).val(display_operator);
    }
}
