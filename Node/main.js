 // const INNInput = document.querySelector(".INNInput");
 // const INNCheck = document.getElementsByClassName("INNCheck");
 // const INNResult = document.querySelector(".INNResult");
 //  console.log(INNCheck[0],"INNCheck");
 //  console.log(INNInput ,"INNInput");
 // const INNRegExp = /0\d{13}$/;
 //
 // INNCheck[0].addEventListener("click", () => {
 //   if (INNRegExp.test(INNInput.value)) {
 //     INNResult.innerText = "ok";
 //     INNResult.style.color = "green";
 //   } else {
 //     INNResult.innerText = "not ok";
 //     INNResult.style.color = "red";
 //   }((
 // });
    const block = document.querySelector(".block")
    let  num = 0;
    const plus = function (leftBlock) {
        num++;
        block.style.left = `${num}px`
        if (num < 50){
            return plus();
        }else if (num > 449){
            num = 0;
        }else {
            num += 50;
        }
        leftBlock();
    }
    block.addEventListener("click", plus)
