const read =() => {
    const fs = require("fs");
    fs.readFile("./data1.txt", "utf-8",(error, data) =>{
        if(error) {
            console.error("Error reading file", error);
        }
        else {
            console.log("data reading file", data);
        }
    })
}

module.exports=read;