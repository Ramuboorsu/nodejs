
//hello world
//hi bhavuuu
//hi bhavanaaa
var fs = require('fs');
var chalk = require('chalk');
// function add(a,b)
// {
//     var c = a+b;
//     console.log(c);
// }

// module.exports = {add};

// to add to file of alll
function add(title)
{

    var load = dataLoad();

    var checkload = load.filter(function (note){
        // console.log("hhhh" +note.title);
       return note.title === title; 
    });
    if(checkload.length === 0)
    {
    load.push({
        title : title
    })
//save to load
    saveload(load);
    console.log(chalk.green.inverse("title inserted"));
}
else{
    console.log(chalk.red.inverse("title already taken"));
}

}


/* function to removeall */
function removeAll(title)
{
var dupp = dataLoad();
var checkdup = dupp.filter(function(note){
return note.title !== title;
});

console.log(checkdup.length);
console.log(dupp.length );
if(dupp.length > checkdup.length){
    saveload(checkdup);
    console.log("duplicate removed");
}
else
{
  
    console.log("nothing to remove");
}
}

//function to save to json file
const saveload = function (load)
{
    var d = JSON.stringify(load);
    fs.writeFileSync('note.json',d);
}

//function to check data in jsonfile
function dataLoad()
{
    try{
         var writ = fs.readFileSync('note.json')
         var buff = writ.toString();
         return JSON.parse(buff);
    }
    catch(e)
    {
       return [];
    }
}

module.exports = {add,removeAll};



