const fs=require('fs');


const filePath='sample.json';


const data=readJSONFile(filePath);
console.log(data);



function readJSONFile(filePath)
{
    try{
        const fileData=fs.readFileSync(filePath,'utf8');

        const jsonData=JSON.parse(fileData);
        
        return jsonData;
    }
    catch(error)
    {
        console.error('Error reading JSON file:',error);
        return null;
    }
}