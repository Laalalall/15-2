// class Dog {
//     constructor(weight, height, color) {
//         this.weight = weight;
//         this.height = height;
//         this.color = color;
//     }
// }
//
// const rex = new Dog(
//     10,
//     45,
//     'pink'
// )
//
// // console.log(rex)
//
// const sharik = new Dog(
//     69,
//     70,
//     'black'
// )
// // console.log(sharik)
//
//
// class Animal  {
//     constructor(type, gender, color, voiceText) {
//         this.type = type;
//         this.gender = gender;
//         this.color = color;
//         this.voiceText = voiceText;
//     }
// }
//
// class bear extends Animal {
//     constructor(type, gender, color, voiceText, height, weight) {
//         super(type, gender, color, voiceText);
//         this.height = height;
//         this.weight = weight
//     }
//
// }
//
// const Misha = new bear(
//     "wild",
//     "male",
//     "серо-беро-малиновый",
//     "ААААААААААА",
//     170,
//     270
// )
//
// // console.log(Misha)
//
// class rabbit extends Animal{
//     constructor(type, gender, color, voiceText, earLength, speed, weight) {
//         super(type, gender, color, voiceText);
//         this.earLength = earLength;
//         this.speed = speed;
//         this.weight = weight;
//     }
//     purpose(){
//         console.log(Я не Таласский но очень похож потому что ${this.voiceText}\мой цвет ${this.color}\nпотому что я ${this.gender})
//     }
// }
//
// const Nurgazy = new rabbit(
//     'pet',
//     'female',
//     'violet',
//     "Я Я Я Я Я Я Я Я",
//     9,
//     2
// )
//
// Nurgazy.purpose()
//
//
// function Animal1(type, gender, color, voiceText, name) {
//     console.log(type, gender, color, voiceText)
// }
//
// Animal1('pet', 'male', "black", "aaar", "Daler")

class Building {
    constructor(type, style , color, square,outside) {
        this.type = type;
        this.style = style;
        this.color = color;
        this.square = square;
        this.outside = outside;
    }
}
class Room extends Building {
    constructor(type, style, color, square, outside, fitness, dining, cafe, lounge, elevator) {
        super(type, style, color, square, outside);
        this.fitness = fitness;
        this.dining = dining;
        this.cafe = cafe;
        this.lounge = lounge;
        this.elevator = elevator;
    }
}
class architecture extends Room{
    constructor(type, style, color, square, outside, fitness, dining, cafe, lounge, elevator,storey,ladder,doors,cladding,windows,benches,materials,tables,equipment,flowers) {
        super(type, style, color, square, outside, fitness, dining, cafe, lounge, elevator);
        this.storey = storey;
        this.ladder = ladder;
        this.doors = doors;
        this.cladding = cladding;
        this.windows = windows;
        this.benches = benches;
        this.materials = materials;
        this.tables = tables;
        this.equipment = equipment;
        this.flowers = flowers;
    }
}
const Shaltay = new architecture (
    "school",
    "modern",
    "cinnabar",
    452,
    21,
    1,
    4,
    1,
    10,
    2,
    5,
    "marble",
    "oak",
    "tile",
    "glass",
    40,
    "brick",
    20,
    "computers",
    "daisies"
)
console.log(Shaltay)


