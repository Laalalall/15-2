function f1() {
    function f2() {
        function f3() {
            function f4() {

            }
        }
    }
}
function Getfullname(user,age) {
    console.log(user)
}
const user ={
    fitst_name: "Jonn",
    last_name: "Barboro"
}
Getfullname(user,age)
const anonym = function () {

}
function numbers(number1,number2) {
    if(number1 > number2){
        console.log("Первое больше второго")
    }else if(number2<number1){
        console.log( "Второе больше первого")
    }else {
        console.log("Они равны")
    }
}
const number ={
    number1: 4,
    number2: 9
}
function Twomass(arr1,arr2) {
    if(arr1.length<arr2.length){
        console.log("Перрвое меньше второго")
    }else if(arr1.length>arr2.length){
        console.log("Первое больше второго")
    }else {
        console.log("Они равны")
    }
}

// const arr1 = [223,4432,3322222,2,75,4]
// const arr2 = [6, 43,325,22]
// Twomass(arr1,arr2)
// const imput = document,getElementByld("input")
// const button = document,getElemntByld()