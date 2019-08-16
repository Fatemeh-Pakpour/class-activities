winnerList = document.querySelector("#winner_list");
function getJson(){
    fetch("http://api.nobelprize.org/v1/prize.json")
    .then(response => response.json())
    .then(json => {
        //  console.log(json)
        displyInfoInSelectOption(json)
        console.log(displaySearchInfo(json));
       });
}
function getProfile(firstname , surename){
 fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${firstname}_${surename}`)
 .then(res => res.json())
 .then(json=>console.log(json))
}
getJson();

function filterByYear(array) {
  return array.filter(item =>{
  item.year});
}
 

function displyInfoInSelectOption(data){
    const allYearsFormData = data.prizes.map(item => item.year);
    const years = allYearsFormData.filter((item, index) => allYearsFormData.indexOf(item) === index);
    const selectYear = document.querySelector("#year");
    years.forEach(year => {
        const optionYear = document.createElement("option");
        optionYear.innerHTML = `
        <option>${year}</option>`
        selectYear.appendChild(optionYear); 
});
const allCategoryFromData =data.prizes.map(item =>item.category);
const categories = allCategoryFromData.filter((item ,index)=>allCategoryFromData.indexOf(item)===index);
const selectCategory =document.querySelector("#category");
categories.forEach(category =>{
    const optionCategory = document.createElement("option");
    optionCategory.innerHTML = `
    <option>${category}</option>`
    selectCategory.appendChild(optionCategory);
});
}
function displaySearchInfo(data){
  const laureates = data.prizes.map(item => item.laureates
    );
    const firstName = laureates.map(item => item.map(name => {return name.firstname}));
    return firstName;

    // console.log(laureates);
    // x= laureates[1].id;
    //  console.log(x);
  
    // return laureates.map(item => { return item.firstname});
   
     

    /* const surenameArray = [] ;
    laureates.forEach(item => {
      const surname = item.map(name => name.surname);
      return  surenameArray.push(surname);
     // console.log(changes);
     }); */
   /*  laureates.forEach(item =>{
      console.log(item.filter(el => el.surname));
    }); */
      
 /*  const j = filterByYear(data.prizes);
  console.log(j);
  } 
 */
    // console.log(laureates[0].map(item=>item.firstname)) ;


}
 

/* onst a =["s","a","b"];
const c= ["f", "w", "z"];
const x = a.join("");
console.log(x); */

/* const a = ['a', 'b', 'c', 'd'];
const b = ['1', '2', '3', '4'];
var c = a.map(function (d, i) {
  return d + String(b[i])
})
console.log(c)
 */

 /* t= [[{year:50, id:25}], [{year:3, id:5}]];
for (const item of t){
const i =item.map(ele => ele.id);
console.log(i); 
  */


 const t= [[{year:50, id:25}], [{year:3, id:5}]];
 function show(){
   const o = t.map(item => item.map(el => {return el.id}));
   return o;
 }
 var array = [[1, 2], [3, 4]];
 var doubledArray = array.map(function (nested) {
  return nested.map(function (element) {
      return element * 2;
  });
});
 
console.log(show());

 