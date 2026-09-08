import fs from "node:fs/promises";
const filePath = "userData.txt";
async function createFile(content){
    try{
        await fs.writeFile(filePath, content,"utf-8");
    }
    catch(err){

    }
}


async function readFile(){
    try{
        const data= await fs.readFile(filePath,"utf8");
    }
    catch(err){

    }
}
async function append(){
    try{
        const data= await fs.readFile(filePath,"utf8");
    }
    catch(err){

    }
}
await createFile("Wellcome to backend programming");
await readFile();