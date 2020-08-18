// **************** VERY EASY ***************************
// ****************** Question 1 ************************

// function seconds(m){
//     console.log(m*60);
// }

// seconds(5);
// seconds(3);
// seconds(2);

//*******************************************************

//****************Question 2*****************************/

// function evenly(a,b){
//     if(a>b){
//         a%b===0?console.log(true):console.log(false)
//     }else{
//         console.log("A should be greater than B");
//     }
// }
// evenly(98,7);
// evenly(85,4);

// *****************************************************
//********************** EASY ************************** */
//****************** Question 1 *************************/

// function count(a,b){
//     let con=0;
//     for(let i=0;i<b.length;i++){
//         if(a===b[i]){
//             con++;
//         }
//     }
//     console.log("count is = ",con);
// }
// count("a","edabita");
// count("c","Chamber of secrets");

//***************************************************** */
// ******************* Question 2 ***********************

// function addUp(n) {
//   let s = 0;
//   if (n >= 1 && n <= 1000) {
//     for (let i = 1; i <= n; i++) {
//       s = s + i;
//     }
//     console.log("addUp = ", s);
//   } else {
//     console.log("Number should be between 1 and 1000");
//   }
// }
// addUp(4);
// addUp(600);
// addUp(2000);

//********************************************************** */
// ************************** Question 3 *********************
// function replace(s){
//     let str=s.split('');
//     for(let i=0;i<str.length;i++){
//         if(str[i]==='a'){
//             str[i]='1';
//         }else if(str[i]==='e'){
//             str[i]='2';
//         }else if(str[i]==='i'){
//             str[i]='3';
//         }else if(str[i]==='o'){
//             str[i]='4';
//         }else if(str[i]==='u'){
//             str[i]='5';
//         }
//     }
    
//     console.log(str.join(''));
// }

// replace("karachi");
// replace("chembur")

// ***************************************************
// *************** MEDIUM ****************************
// **************** Question 1 ***********************

// function reversing(str,s){
//     let user=str.split(' ').map(e => e.trim());
//     for(let i=0;i<user.length;i++){
//         let word=user[i].split('');
//         if(word[0]===s){
//             user[i]=word.reverse().join('');
//         }

//     }
//     user=user.join(' ');
//     console.log(user);
// }
// reversing("word searches are super fun","s");
// reversing("first man to walk on the moon","m");

// ******************************************************
// ******************** Question 2 ********************
// function jackpot(str){
//     let ans=str.every(a=>a===str[0])
//     console.log(ans);
// }
// jackpot(["@","@","#","@"]);
// jackpot(["@","@","@","@"]);
// jackpot(["@","$","$","$"]);

// *****************************************************
// ****************** Question 3 **********************
// function removeDup(array){

//     var uniqueArray = [];
//         for(i=0; i < array.length; i++){
//         if(uniqueArray.indexOf(array[i]) === -1) {
//             uniqueArray.push(array[i]);
//         }
//     }
//     console.log(uniqueArray);
// }
// removeDup([1,0,1,0]);
// removeDup(["john","Taylor","john"]);

// *********************** HARD ************************
// // ***************** QUestion 1 ************************
// function realType(a)
// {
// var types = [Function, RegExp, Number, String, Boolean, Array], x, len;
    
// if (typeof a === "object" || typeof a === "function") 
//     {
//      for (x = 0, len = types.length; x < len; x++) 
//      {
//             if (a instanceof types[x])
//             {
//                 return types[x];
//             }
//       }
//     }
    
//     return typeof a;
// }

// console.log(realType(12));
// console.log(realType("a"));
// console.log(realType(true));
// console.log(realType([]));
// console.log(realType(null));
//***************************************************** */
// ********************* Question 2 ********************

// function numinStr(str){
//     var re = /^[A-Za-z]+$/;
//     var arr=new Array();
//     str.map(item=>{
//         if(!re.test(item)){
//             arr.push(item);
//         }
//     })

//     console.log(arr);
// }
// numinStr(["1a","a","2b","b"])
// numinStr(["abc","abc10","bcd"]);
// numinStr(["gaurav"]);