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
    
    
// 入力チェックの関数(一番先頭の値が0か演算子だったら、初期化)
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

// 入力チェックの関数(一番末尾が演算子だったら、演算子を上書き)
function input_check2(){
  if(document.calc.display.value.slice( -1 ) == "+"){
      document.calc.display.value.slice( -1 ).val("");
      document.calc.display.value.slice( -1 ).val("+");
    }else if(document.calc.display.value.slice( -1 ) == "-"){
      document.calc.display.value.slice( -1 ).val("");
      document.calc.display.value.slice( -1 ).val("-");
    }else if(document.calc.display.value.slice( -1 ) == "*"){
      document.calc.display.value.slice( -1 ).val("");
      document.calc.display.value.slice( -1 ).val("*");
    }else if(document.calc.display.value.slice( -1 ) == "/"){
      document.calc.display.value.slice( -1 ).val("");
      document.calc.display.value.slice( -1 ).val("/");
    }
}
