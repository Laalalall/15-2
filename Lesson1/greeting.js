const users = [ 1 , 2, 324, 23, 22]
const men = [ 32 , 324 , 2343, 22,]
if (users.length>men.length){
    console.log('Первый массив больше второго')}
else if (users.length<men.length){
  console.log('Второй массив больше первого')
}
else {
  console.log('Они равны')
}
const name = prompt("Ваше Имя")
alert('Привет' + name)
swetofor = prompt("Какой цвет?")
switch (swetofor) {
    case "Зелёный":
        alert('Вперёд');
        break;
    case "Жёлтый":
        alert('Ожидание');
        break;
    case "Красный":
        alert("Стоп");
        break;
}