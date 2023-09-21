function BellBoy(name , age , hasWorkPermit , languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.clean = function(){
        alert("Cleaning in progress..")
    }
}

var bellboy1 = new BellBoy("tommy" , 21 , true , ["Hindi" , "English"]);

//console.log(bellboy1)
//BellBoy {name: 'tommy', age: 21, hasWorkPermit: true, languages: Array(2)}

//console.log(bellboy1.name)
//tommy

bellboy1.clean();
//Cleaning in progress..


var bellboy2 = new BellBoy("jeck" , 27 , false , ["gujarati" , "Hindi"]);


