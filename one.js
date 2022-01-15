const fs = require('fs');

fs.readFile('test.txt', 'ascii', function (err, data){
    const newData = data.toUpperCase();
    fs.writeFile('test.txt', newData, function (err){
        if(err){
            console.log('no file written');
        }else{
            console.log('success');
        }
    });
});