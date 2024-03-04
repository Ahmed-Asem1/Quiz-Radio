let quiz = [
    {id:"Num_1",
     question:"What are the following letters HTML?",
     answer:["HyperText Markup Language","Hadya Ghaleb Mohamed","Hend Talia Mai Lora","Cascading Style Sheets"],
     correctAnswer:"HyperText Markup Language",
    },
    {
     id:"Num_2",
     question:"What are the following letters CSS?",
     answer:["Cyrine Sami Sadeq","Cascading Style Sheets","Cadyo Mani ","Cika Sika"],
     correctAnswer:"Cascading Style Sheets",
    },
    {
     id:"Num_3",
     question:"Who Is Amr Diab?",
     answer:["Arabian Singer","Soudi Arabian Singer","Egyptian singer","Emirati Singer"],
     correctAnswer:"Egyptian singer",
    },
    {
     id:"Num_4",
     question:"Any of these are famous statements by Amr Diab?",
     answer:["The length of what we have in our pocket keeps working for us","We prefer her heroes to somewhat invalidate her","In people that cohabit and people that throw from the tenth.","Who has a substitute has no cost"],
     correctAnswer:"Who has a substitute has no cost",
    },
];

let divQuestion = document.getElementById("question");
let buttonResult = document.getElementById("result");
let divShowResult = document.getElementById("showResult");


let answer = 0;
let finalAnswer = 20; 

function drawQuestion (arr){
    for(let i=0; i<arr.length; i++){
        let h2Quiz = document.createElement("h2");
        h2Quiz.innerText = arr[i].question;
        divQuestion.append(h2Quiz);
        let formInsideDiv = document.createElement("form")
        formInsideDiv.id = arr[i].id;

        for(let j=0; j<arr[i].answer.length; j++){
            let box = document.createElement("div");
            box.id = arr[i].id;
            box.innerHTML = `
            <input value="${arr[i].answer[j]}" type="radio" name="Group+${i+1}" id="${i+10*j}">
            <label for="${i+10*j}">${arr[i].answer[j]}</label>
            `
            formInsideDiv.append(box);
            divQuestion.append(formInsideDiv)
            // box.querySelector("label").addEventListener("click",function(e){
            //     console.log(e.target);
            //     if(e.target.innerHTML == arr[i].correctAnswer){
            //         answer+= 5;
            //         console.log(answer);
            //     }else{
            //         answer-=5;
            //     }
            // })

        }
       }
}  

drawQuestion(quiz);




let ansResult = []

buttonResult.addEventListener("click",function(){
    let allInputs = document.querySelectorAll("input[type=radio]");
    allInputs.forEach(e =>{
        if(e.checked) {
            console.log(e.value);
            ansResult.push(e.value);
        }
    })

    for (let i = 0; i < quiz.length; i++) {
        if(quiz[i].correctAnswer === ansResult[i]) {
            answer +=5;
        }
    }
    divShowResult.innerText = ` The result is ${answer} / ${ quiz.length * 5 }`
    buttonResult.setAttribute("disabled",true);
})


// function getTupeOf(a,b,c,d,e,f){

//     return ((a+b-c)*d/e)**f;
// }
// console.log(getTupeOf(6,5,4,3,2,1)); //10.5
// console.log(getTupeOf(6,2,1,4,2,3)); //2744
// console.log(getTupeOf(2,3,6,4,2,3));  //-8



// function concatenate(a,b){
//     console.log(a.indexOf(b));
//     return console.log(a.indexOf(b) == -1 ? a+b : b+a );
// }
// console.log(concatenate('chees', 'cake')); //'cheesecake'
// console.log(concatenate('lips', 's')); //'lips', 's'
// console.log(concatenate('Java', 'script'));  //'Javascript'
// console.log(concatenate(' think, therefore I am', 'I'));//'I think, therefore I am'




// function checkNumberIsEven(a){

//     return a%2 == 0 ? true : false;
// }
// console.log(checkNumberIsEven(10)); //true
// console.log(checkNumberIsEven(-4)); //true
// console.log(checkNumberIsEven(5));  //false
// console.log(checkNumberIsEven(-111));  //flase



// function characterAccur (a,b) {

//     return b.split(a).length - 1
// }


// console.log(characterAccur('m','how many times does the character occur in this sentence?'));//2
// console.log(characterAccur('h','how many times does the character occur in this sentence?'));//4
// console.log(characterAccur('?','how many times does the character occur in this sentence?'));//1
// console.log(characterAccur('z','how many times does the character occur in this sentence?'));//0




// function rightNumber (a){

//     return Number.isInteger(a);
//         //anthor Solution
// //    return a - Math.floor(a) === 0;
// }

// console.log(rightNumber(4)); //true
// console.log(rightNumber(1.123)); //flase
// console.log(rightNumber(1048)); //true
// console.log(rightNumber(10.48)); //false



// function splitNumber (a){
//     let arrys = [];
//     let numbersConvert = a.toString(); //Convert Number To String Number
//     for(let i=0; i<numbersConvert.length; i++){
//         console.log(typeof numbersConvert);
//         let arr = parseInt(numbersConvert[i]); //Convert String Number to Number
//         arrys.push(arr);
//     }
//     return arrys;


//     // Anthor Solution
//     // const string = a + '';
//     // const strings = string.split('');
//     // return strings.map(digit => Number(digit))
// }

// console.log(splitNumber(10)); //[1,0]
// console.log(splitNumber(931)); //[9,3,1]
// console.log(splitNumber(193278));//[1,9,3,2,7,8]



// function takeNumberInArr (a,b) {
//     // let answer = 0;
//     console.log(a[b-1]);
//     // return answer;
// }

// console.log(takeNumberInArr([1,2,3,4,5],3)); // 3
// console.log(takeNumberInArr([10,9,8,7,6],5)); // 6
// console.log(takeNumberInArr([7,2,1,6,3],1)); // 7





// function removeFirstThreeElement (a){
//     let x = a.slice(3)
//     console.log(x);
//     return ;
// }

// console.log(removeFirstThreeElement([1,2,3,4])); //4
// console.log(removeFirstThreeElement([5,4,3,2,1,0])); // [2,1,0]
// console.log(removeFirstThreeElement([99,1,1])); // []



// function filterArray (a,b){
//     let x = a.filter(e=>{
//         return   e !== b;
//     })
//     return x;
// }

// console.log(filterArray([1,2,3], 2));//[1, 3]
// console.log(filterArray([1,2,'2'], '2')); // [1, 2]
// console.log(filterArray([false,'2',1], false));// ['2', 1]
// console.log(filterArray([1,2,'2',1], 1));// [2, '2']



// let x = [1,-2,2,-4];

// let y = x.filter(e =>{return e<0});
// console.log(y.length);



// function myFunction(arr) {
//     return arr.every(el => el === arr[0])
// }


// console.log(myFunction([true, true, true, true]));

// console.log(myFunction(['test', 'test', 'test']));
 
// console.log(myFunction([1,1,1,2]));
 
// console.log(myFunction(['10',10,10,10]));




// function merge (...array){
//     // let x =[].concat(...array);
//     // console.log(x);
//     console.log(array);
//      console.log(...array);
//     //another Solution
//     return array.flat();
// }

// console.log(merge([1, 2, 3], [4, 5, 6])); //[1, 2, 3, 4, 5, 6]
// console.log(merge(['a', 'b', 'c'], [4, 5, 6]));//['a', 'b', 'c', 4, 5, 6]
// console.log(merge([true,true][1,2]['a','b']));//[true,true,1,2,'a','b']





// function sort (arr){
//     if(arr[0].b > arr[1].b) {
//         arr.reverse()
//     }
//     return arr ;

//     // anthor Solution
//     // const sort = (x, y) => x.b - y.b;
//     // return arr.sort(sort);
// }
// console.log(sort([{a:1,b:2},{a:5,b:4}])); // [{a:1,b:2},{a:5,b:4}]
// console.log(sort([{a:2,b:10},{a:5,b:4}])); //[{a:5,b:4},{a:2,b:10}]
// console.log(sort([{a:1,b:7},{a:2,b:1}])); //[{a:2,b:1},{a:1,b:7}]



// function mergeArray (a,b) {
//     let x = a.concat(b);
//     x.sort((a,b) => a-b)
//     let y = new Set(x);
//     let z = [...y]
//  return z;   
// }

// console.log(mergeArray([1, 2, 3], [3, 4, 5])); //[ 1, 2, 3, 4, 5 ]
// console.log(mergeArray([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); // [ -11, -10, 5, 22, 41,  42, 333]



// function printProperty (obj) {
//     return obj['prop-2'];
// }

// console.log(printProperty({  one: 1,  'prop-2': 2})); //2
// console.log(printProperty({  'prop-2': 'two',  prop: 'test'})); //'two'



// function printPropertyOfKey (obj,key) {
    
//     return  obj[key];
// }

// console.log(printPropertyOfKey({  continent: 'Asia',  country: 'Japan'}, 'continent'));//'Asia'
// console.log(printPropertyOfKey({  country: 'Sweden',  continent: 'Europe'}, 'country')); //Sweden



// function print (a,b){
//   return b in a  
// }
// console.log(print({a:1,b:2,c:3},'b')); // true
// console.log(print({x:'a',y:'b',z:'c'},'a')); // false
// console.log(print({x:'a',y:'b',z:undefined},'z')); // true



// function print (a,b){

//   return !!a[b]
// }
// console.log(print({a:1,b:2,c:3},'b')); // true
// console.log(print({x:'a',y:null,z:'c'},'y')); // false
// console.log(print({x:'a',y:'b',z:undefined},'z')); // false




// function createObjectTwo (a,b) {
//     let item = {};
//     item[a] = b;
//     return item;

//     // anthor Solution
//     // { [a]: b }
// }

// console.log(createObject('a','b'));//{a:'b'}
// console.log(createObject('z','x'));// {z:'x'}
// console.log(createObject('b','w'));// {b:'w'}



// function createObjectThree (a,b){
//     let item = {};
//     for(let i = 0; i<a.length; i++) {
//         item[a[i]] = b[i]
//     }
//     return item;

//     // anthor Solution
//     // return a.reduce((acc, cur, i) => {
//     //     console.log(acc, cur);
//     //     console.log({[cur]: b[i]});
//     //     return {...acc, [cur]: b[i]}
//     // }, {});
// }

// console.log(createObjectThree(['a','b','c'],[1,2,3])); //{a:1,b:2,c:3}
// console.log(createObjectThree(['w','x','y','z'],[10,9,5,2])); // {w:10,x:9,y:5,z:2}
// console.log(createObjectThree([1,'b'],['a',2])); // {1:'a',b:2}

 

// function extractkeys (a) {

//     return Object.keys(a);
// }

// console.log(extractkeys({a:1,b:2,c:3})); // ['a','b','c']
// console.log(extractkeys({j:9,i:2,x:3,z:4})); //['j','i','x','z']
// console.log(extractkeys({w:15,x:22,y:13})); //['w','x','y']




// function returnNestedObject (obj) {
//     return typeof obj['a'] === 'object' ? obj['a']['b'] : undefined;

        //anthor Solution
//     // return  obj?.a?.b;
// }

// console.log(returnNestedObject({a:1})); // undefined
// console.log(returnNestedObject({a:{b:{c:3}}})); // {c:3}
// console.log(returnNestedObject({b:{a:1}})); // undefined 
// console.log(returnNestedObject({a:{b:2}})); // 2




// function sumObjectValues (a){
//     let sum = 0;
//     let value = Object.values(a)
//     value.forEach(e=>{sum+=e});
//     return sum;

//     //anthor Solution
//     // return Object.values(a).reduce((sum, cur) => sum + cur, 0);
// }

// console.log(sumObjectValues({a:1,b:2,c:3}));// 6 
// console.log(sumObjectValues({j:9,i:2,x:3,z:4}));//18
// console.log(sumObjectValues({w:15,x:22,y:13}));// 50



// function removeProperty (obj) {
//     delete obj.b;
//     return obj;

//     // anthor Solution
//     // const { b, ...rest } = obj;
//     // return rest;
// }

// console.log(removeProperty({ a: 1, b: 7, c: 3 })); //{ a: 1, c: 3 }
// console.log(removeProperty({ b: 0, a: 7, d: 8 })); //{ a: 7, d: 8 }
// console.log(removeProperty({ e: 6, f: 4, b: 5, a: 3 })); //{ e: 6, f: 4, a: 3 }



// function mergeTwoObjects (x,y){
//     y['d'] = y['b'];
//     delete y['b'];
//     let x = {...x,...y}
//     return x;

//     // anthor Solution
//     // const { b, ...rest } = y;
//     // return { ...x, ...rest, d: b };
// }
// console.log(mergeTwoObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })); //{ a: 1, b: 2, c: 3, e: 5, d: 4}
// console.log(mergeTwoObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })); //{ a: 5, b: 4, c: 3, e: 2, d: 1}




// function multiplyValue (a,b) {
//     let obj = {}
//     for(let key in a) {
//         obj[key] = a[key] * b
//     }
//     return obj;

//     // anthor Solution
//     // return Object.entries(a).reduce((acc, [key, val]) => {
//     //     return { ...acc, [key]: val * b };
//     // }, {});
// } 

// console.log(multiplyValue({a:1,b:2,c:3},3)); //{a:3,b:6,c:9}
// console.log(multiplyValue({j:9,i:2,x:3,z:4},10)); //{j:90,i:20,x:30,z:40}
// console.log(multiplyValue({w:15,x:22,y:13},6)); //{w:90,x:132,y:78}




// function checkDateEqual (a,b){
//     let aDate = new Date (a);
//     let bDate = new Date (b);
//     return  aDate.getTime() == bDate.getTime() ?true : false;

//     // anthor Solution 
//     // return a.getTime() === b.getTime()
// }
// console.log(checkDateEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));//false
// console.log(checkDateEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));// true
// console.log(checkDateEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));//false





// function getNumberBetweenDate (a,b) {
//     let sum = 0;

//     let x = Date.parse(a);
//     let dayX = (x/1000/60/60/24);

//     let y = Date.parse(b);
//     let dayY = (y/1000/60/60/24);

//     if(dayX > dayY){
//         sum = dayX - dayY;
//     }else{
//         sum = dayY - dayX;
//     }
//     return sum;

//     //anthor Solution 
//     // const dif = Math.abs(a - b);
//     // return dif / 1000 / 60 / 60 / 24
// }
// console.log(getNumberBetweenDate(new Date('2020-06-11'), new Date('2020-06-01')));// 10
// console.log(getNumberBetweenDate(new Date('2000-01-01'), new Date('2020-06-01')));//7457



// function checkDateSame(a,b){

//     return a.getTime() == b.getTime() ? true : false;

//     //anthor Solution
//     // return a.getFullYear() === b.getFullYear() &&
//     // a.getMonth() === b.getMonth() &&
//     // a.getDate()=== b.getDate()
// }
// console.log(checkDateSame(new Date('2000/01/01'), new Date('2000/01/01')));//true
// console.log(checkDateSame(new Date('2000/01/01'), new Date('2000/01/02')));//false
// console.log(checkDateSame(new Date('2001/01/01'), new Date('2000/01/01')));//false
// console.log(checkDateSame(new Date('2000/11/01'), new Date('2000/01/01')));//false






// function checkDateWithinOneHour (a,b){
//     let x = a.getTime();
//     let y = b.getTime();
//     let diference = x - y;
//     let hours = 1000*60*60;
//     if(Math.abs(diference) <=hours){
//         return true;
//     }else{
//         return false;
//     }

//     //anthor Solution
//     // return Math.abs(a - b) / 1000 / 60 <= 60
// }
// console.log(checkDateWithinOneHour(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))); //true
// console.log(checkDateWithinOneHour(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00'))); //true
// console.log(checkDateWithinOneHour(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00'))); //false
// console.log(checkDateWithinOneHour(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00'))); //true


// function checkDateEarlierAnthor (a,b){
//     let x = a.getMinutes();
//     let y = b.getMinutes();
//     return x <y ? true : false;

//     // anthor Solution
//     // return a.getMinutes() < b.getMinutes() ? true : false ;

//     //anthor Solution 
//     // return a<b;
// }
// console.log(checkDateEarlierAnthor(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));//true
// console.log(checkDateEarlierAnthor(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00')));//false
// console.log(checkDateEarlierAnthor(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));//false



// function positiveNumber (arr){
//     let positive = arr.filter(e => e >= 0)
//     return positive;
// }
// console.log(positiveNumber([2]));


// function checkNumberPrime(params){
//     if(params >1 && params %2 !=0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(checkNumberPrime(23));

// let nums = 12;

// console.log(nums.toString().split(""));
// let sum = 0;
// let x = nums.toString().split("").reduce((acc, curr) => {
//     console.log(+acc, +curr);
//     return +acc + +curr
// })
// console.log(x);




// Coding challenge #19: Create a function that will return in an array the first
// "nPrimes" prime numbers greater than a number "startAt"

// function getFirstPrime (num,start){
//     let arr=[];
//     let i = start;
//     while (arr.length < num) {
//         if([i]>1 && [i]&2 !=0){
//             arr.push(i)
//         }
//         i++;
//     }
//     return arr;

// }
// console.log(getFirstPrime(10,100));


// let arr1 = [1,2,3,4,5,6];
// let arr2 = [1,3,4,5]
// let newArr = [];
// for(let i = 0; i<arr1.length; i++){
//     if(!arr2.includes(arr1[i])){
//         newArr.push(arr1[i]);
//     }
// }
// console.log(newArr);

// let x = [1,2,[15,[23], [5,12]], [100]];
// let y = x.toString().split(",");
// let sum = [];
//  y.forEach(e => sum.push(+e));

// let final = sum.reduce((acc,cur) =>{
//     return acc > cur ? acc: cur ; 
// },)

// console.log(y);
// console.log(sum);
// console.log(final);