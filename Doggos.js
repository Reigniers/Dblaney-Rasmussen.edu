// Constructor
function Dog(name, breed, about, firstAppearance, mySound, canTalk) {
    this.name = name; // Initialize name
    this.breed = breed; // Initialize breed
    this.about = about; // Initialize about
    this.firstAppearance = firstAppearance; // Initialize firstAppearance
    this.mySound = mySound; // Initialize mySound
    this.canTalk = canTalk; // Initialize canTalk

    // Add greeting method to Dog object
    this.greeting = function() {
        // Conditional for canTalk
        let talkMessage = this.canTalk? "I can talk." : "I can't talk.";
        return "Sup? Names " + this.name + ". I'm " + this.about + "a " + this.breed + ".  I first appeared in " + this.firstAppearance + "." + this.mySound + talkMessage;
    }
}

// Create instances of dog objects
let Seymour = new Dog("Seymour", "Border Terrier", "Fry's 20th century dog. ", "Season 4, Episode 7: Jurassic Bark", "*woofs in lowercase*", false);
let Scooby = new Dog("Scooby", "Great Dane", "Shaggy's best friend. ", "1969", "*Scooby Snacks*", true);


//for ... in a loop to display all properties of the object
for (let prop in dog) {
    if (dog.hasOwnProperty(prop)) && typeof dog[prop] !== "function") {
        alert(prop + ": " + dog[prop]);
    }
}


//array for dog objects
let dogArray = [Seymour, Scooby];

//prompt user to select a dog
let dogChoice = prompt("Please select a dog: Seymour or Scooby");

let dogSelected = dogArray.find(dog => dog.name === dogChoice);

//if dog is found, display dog info 
let dogInfoParagraph = document.getElementById("dogInfo");
if (dogSelected) {
    dogInfoParagraph.textContent = dogSelected.greeting();
} else {
    dogInfoParagraph.textContent = "Dog not found.";
}