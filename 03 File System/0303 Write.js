var fs = require("fs");


console.log("Going to write into existing file!");
fs.writeFile('input.txt', 'Simply Easy Learning!', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("data writtened succesfully!");
    console.log("let's read newly written data");

    fs.readFile('input.txt', function(err, data){
        if (err){
            return console.error(err);
        }
    
        console.log("Asynchronous read: " + data.toString());
    });
})