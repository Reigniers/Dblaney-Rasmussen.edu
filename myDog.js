//We're going with the best dog ever.
//Seymour from Futurama. Aka Fry's dog or Fry's best friend or Fry's only friend. 
//Also known as Seymour A**es.
//Let's get started.

//About Seymour
let myDog = {
    name: "Seymour",
    breed: "Border Terrier",
    from: "Futurama",
    about: "Fry's 20th century dog.",
    firstAppearance: "Season 4, Episode 7: Jurassic Bark",
    mySound: "*woofs in lowercase*",
}


//Constructor 
function Dog(name, breed, about, firstAppearance, mySound){
    this.name = name; //Initialize name
    this.breed = breed;// Initialize breed
    this.about = about;// Initialize about
    this.firstAppearance = firstAppearance;// Initialize firstAppearance
    this.mySound = mySound;// Initialize mySound

    this.greeting = function(){
        return "Sup? Names " + this.name + ". I'm " + this.about + "a " + this.breed + ".  I first appeared in " + this.firstAppearance + "." + this.mySound;
    }
}

let myDogConst = new Dog("Seymour", "Border Terrier", "Fry's 20th century dog. ", "Season 4, Episode 7: Jurassic Bark", "*woofs in lowercase*");

alert(myDogConst.greeting());
