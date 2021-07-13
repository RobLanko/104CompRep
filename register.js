var salon={
    name:"Mountain Pet Salon",
    address:{
        street:"University at Larchmont",
        number:"605"
    },
    hour:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}

var c=0;
class Pet{
    constructor(name,age,gender,breed,service,ownerName,ownerEmail,contactPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.ownerName=ownerName;
        this.ownerEmail=ownerEmail;
        this.contactPhone=contactPhone;
        this.id=c++;
    }
}

function displayPet(){
    var tmp="";
    document.getElementById("info").innerHTML=`<p>Amount of pets: ${salon.pets.length}<p>`;
    for(var i=0;i<salon.pets.length;i++){
        tmp+=`
        <div id="${salon.pets[i].id}" class="pet">
            <div class="pet-title">
                <p> Name: ${salon.pets[i].name}</p>
                    <button onclick="deletePet(${salon.pets[i].id});">🗑️</button>
            </div>
            <p> Age: ${salon.pets[i].age}</p>
            <p> Gender: ${salon.pets[i].gender}</p>
            <p> Breed: ${salon.pets[i].breed}</p>
            <p> Service: ${salon.pets[i].service}</p>
            <p> Owner: ${salon.pets[i].ownerName}</p>
            <p> Email: ${salon.pets[i].ownerEmail}</p>
            <p> Contact Phone: ${salon.pets[i].contactPhone}</p>
        </div>`;
    }
    document.getElementById("pets").innerHTML=tmp;
}

function deletePet(id){
    var div=document.getElementById(id);
    for(var i=0;i<salon.pets.length;i++){
        var aPet=salon.pets[i];
        if(aPet.id==id){
            deleteIndex=i;
        }
    }
    salon.pets.splice(deleteIndex,1);
    div.remove();
    displayPet();
}
function validation(i1,i2,i3,i4,i5,i6,i7){
    if(i1!=""&&
        i2!=""&&
        i3!=""&&
        i4!=""&&
        i5!=""&&
        i6!=""&&
        i7!=""){
            var flag=true;
    }
    return flag;
}
function registerPet(){
 //get and store the values
 var inputName=document.getElementById("petName").value;
 var inputAge=document.getElementById("petAge").value;
 var inputGender=document.getElementById("petGender").value;
 var inputBreed=document.getElementById("petBreed").value;
 var inputService=document.getElementById("petService").value;
 var inputOwnerName=document.getElementById("ownerName").value;
 var inputPhone=document.getElementById("ownerPhone").value;
 var inputEmail=document.getElementById("ownerEmail").value;
 // console.log(inputName,inputAge,inputGender,inputBreed,inputService,inputOwnerName,inputPhone);
 //create the generic object
    if(validation(inputName.inputAge,inputGender,inputBreed,inputService,inputOwnerName,inputPhone,inputEmail)){
        var thePet=new Pet(inputName,Number(inputAge),inputGender,inputBreed,inputService,inputOwnerName,inputPhone,inputEmail);
        //push object into the array
        salon.pets.push(thePet);
        //clear the inputs
        clearInputs();
        displayPet();
        var element=document.getElementById(`alert`);
        element.classList.remove("hide");
        setTimeout(function(){
            element.classList.add("hide");
        },3000);   
    }else{
        var fail=document.getElementById(`fail`);
        fail.classList.remove("hide");
        setTimeout(function(){
            fail.classList.add("hide");
        },3000)
    }
}

function clearInputs(){
    document.getElementById("petName").value="";
    document.getElementById("petAge").value="";
    document.getElementById("petGender").value="";
    document.getElementById("petBreed").value="";
    document.getElementById("ownerName").value="";
    document.getElementById("ownerPhone").value="";
    document.getElementById("ownerEmail").value="";
} //clearInputs();, then displayPet();
function searchPet(){
    //getting the search string
    var searchString=document.getElementById('searchPet').value;
    //travel the array to search the string
    salon.pets.forEach(pet => {
        var petBox=document.getElementById(pet.id);
        console.log(petBox)
        //compare the search string with all the names
        if(pet.name.toLowerCase().includes(searchString.toLowerCase()) ||
            pet.service.toLowerCase().includes(searchString.toLowerCase())){
        //highlight the element in the DOM "document object model"
            petBox.classList.add(`show`);
        }else{
            console.log('Not here! :P');
            petBox.classList.remove(`show`);
            petBox.classList.add(`hide`);
        }
    });
}
function init(){
    console.log("init")
    var scooby=new Pet("Scooby",50,"Male","Great Dane", "Shower","Shaggy","Shaggy@gmail.com","555-555-5555");
    var scrappy=new Pet("Scrappy",40,"Male","Great Dane","Nails cut","Shaggy","Shaggy@gmail.com","555-555-5555");
    var flux=new Pet("Flux",3,"Male","Black Cat","Grooming","Carrie","Carrie@gmail.com","111-111-1111");
    var vex=new Pet("Vex",2,"Female","Black Cat","Nails cut","Carrie","Carrie@gmail.com","111-111-1111");
    var luna=new Pet("Luna",4,"Female","Boxer","Nails cut","Robbie","Robbie@gmail.com","222-222-2222");
    salon.pets.push(scooby);
    salon.pets.push(scrappy);
    salon.pets.push(flux);
    salon.pets.push(vex);
    salon.pets.push(luna);
    displayPet();
    //hook events
    document.querySelector('#btn-register').addEventListener("click", registerPet);
    document.querySelector('#btn-search').addEventListener("keyup",searchPet);

}
window.onload=init;