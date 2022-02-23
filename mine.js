// конструкция while
// первоночальное значениее
// while(условие){
//     действие
// }


// let a = 0
// while(a < 8){
//     console.log(a)
//     a++
// }

//k! = 1*2*3...*k
//5! = 120
//5!= 1*2*3*4*5

// let a = 1
// let b = 1
// k = Number(prompt(''))
// while(a <=k){
//     b*+ a
//     a++
// }
// console.log(b)

//  for-цыкыл для или же ПЕРЕБОР   
// for(переменная ;услоаие;шаг){
//     инстркция
// }

// for(let a = 3; a<5; a++){
//     console.log(a)
// }

// for(let a = 0; a<101; a+=2){
//     if(a % 2 == 0) continue//условие пропускает а break наооборот
//     console.log(a)

// }


for(let i = 1; i<11; i++){
    console.log(`Таблица умножения ${i}`)
    for(let j = 1; j<10; j++){
        console.log(`${1}*${j} = ${i*j}`)
    }
    console.log("--------")
}

