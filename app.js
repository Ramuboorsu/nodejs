var fs = require('fs');
const yargs = require('yargs');
var note = require('./notes.js')
// fs.writeFileSync('note.txt','hello');
// console.log(note);
// var sum =note.add(2,3);




yargs.command({
   
   command : 'add',
   describe : 'add two num',
   builder : {
       title : {
           describe : 'in title',
           demandOption : true,
           type: 'string',
       },
   },
   handler : function (argv)
   {
       var send =note.add(argv.title);
       console.log('entered to handle',send);
   }

})

yargs.command({
    command : 'remove',
    describe : 'to remove',
    handler : function (argv)
    {
        var dup = note.removeAll(argv.title);
    }
});
console.log(yargs.argv);