  function get_calc(btn) {
      if(btn.value == "=") {
        document.calc.display.value = eval(document.calc.display.value);
      } else if (btn.value == "AC") {
        document.calc.display.value = "";
      } else {
        document.calc.display.value += btn.value;
        document.calc.add_btn.value = "*";
        document.calc.div_btn.value = "/";
      }
    }
    
    
  // javascript動作確認用
  function test1(){
	  console.log("test1"); //test1と表示
  }