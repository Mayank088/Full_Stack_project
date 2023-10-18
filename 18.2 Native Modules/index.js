const fs1 = require("fs");

// syntext =>  fs1.writeFile(file , data , callback)
fs1.writeFile("message1.txt" , "hello mayank", (err) => {
    if (err)
        throw err;
    console.log("The file has been saved!");
  });


// fs1.readFile(file path , callback)           utf8 ti encode thay msg atle te emanam laki nakvu
fs1.readFile("./message1.txt" , 'utf-8' , (err , data) => {
    if (err)
        throw err;
    console.log(data);
  });