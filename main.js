fetch("https://randomuser.me/api/?results=50").then(function(event){
    const jsonObject= event.json();
    return jsonObject;
}).then(createBoxes);
let femalesOnly=false;
let malesOnly=false;
let sortAZ=false;
let sortZA=false;

const boxContainer= document.getElementById('boxes');
function createBoxes(object){
    const decision= document.getElementById("choice");
    for(i=0;i<50;i++){
    decision.addEventListener('click', sort(object,i));
    const box=document.createElement('div');
    box.className="box";
    getInfo(box,object,i);
    boxContainer.appendChild(box);


}
}
function sort(value,object){
    if(value==='Audi'){
    displayAudi();
    console.log("Audi");
    boxContainer.reload();
    }
    if(value==="Male"){
    guysOnly(object);
    console.log("Male");  
    boxContainer.reload();
    }
    if(value==="Female"){
    girlsOnly(object);
    console.log("Female");
    boxContainer.reload();
    }
    if(value==="A-Z"){
    Alphabetical(object,num);
    console.log("A-Z");
    boxContainer.reload();

    }
    if(value==="Z-A"){
    reverseAlphabet(object,num);
    console.log("Z-A");
    boxContainer.reload();
    }
}
function displayAudi(){
 const audi= document.createElement('img');
 const audiBox= document.getElementById('audi-holder');
 audi.src="https://st.motortrend.com/uploads/sites/10/2016/05/2016-audi-rs7-hatchback-angular-front-2.png";
 audi.id="audi"
audiBox.appendChild(audi);
}
function guysOnly(){
malesOnly=true;
}
function girlsOnly(){
femalesOnly=true;
}
function Alphabetical(){
  
}
function reverseAlphabet(){
   sortZA=true;
   sortAZ=false;
}
function getInfo(communism, obj,num){
    img(communism,obj,num)
    const textbox=  document.createElement('div');
    textbox.className='text';
    communism.appendChild(textbox);
    names(textbox,obj,num);
    usernames(textbox,obj,num);
    email(textbox,obj,num);
    gender(textbox,obj,num,communism);
    phoneNumber(textbox,obj,num);
    }
function img(communism,obj,num){
    const img= document.createElement("img");
    img.src=obj.results[num].picture.large;
    communism.appendChild(img);
}
function names(textbox,obj,num){
    const names= document.createElement('div');
    names.innerHTML=`${obj.results[num].name.title} ${obj.results[num].name.first} ${obj.results[num].name.last}`;
    textbox.appendChild(names);
}
function usernames(textbox,obj,num){
    const usernames= document.createElement('div');
    usernames.innerHTML=`${obj.results[num].login.username}`;
    textbox.appendChild(usernames);
}
function phoneNumber(textbox,obj,num){
    const phoneNumber= document.createElement('div');
    phoneNumber.innerHTML=`${obj.results[num].cell}`;
    textbox.appendChild(phoneNumber);
}
function email(textbox, obj, num){
    const email= document.createElement('div');
    email.innerHTML=`${obj.results[num].email}`;
    textbox.appendChild(email);
}
function gender(textbox, obj, num,box){
    
    const gender= document.createElement('div');
    gender.innerHTML=` I am ${obj.results[num].gender}.`;
    if(malesOnly===true&&obj.results[num].gender==='female'){
        gender.innerHTML=` I am male.`;
    }
    if(femalesOnly===true&&obj.results[num].gender==='male'){
        gender.innerHTML=` I am female.`;
    }
    textbox.appendChild(gender);
}
// .then(function (myJson) {
//     const email = myJson.results[0].email;
//     const div = document.createElement('div');
//     document.body.appendChild(div);
//     const text = document.createTextNode(email);
//     div.appendChild(text);
//     globalEmail = email;
//     console.log('Once the response comes back, globalEmail is: ' + globalEmail);
//   });
