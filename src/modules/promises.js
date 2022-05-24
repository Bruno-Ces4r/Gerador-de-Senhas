import { async } from "regenerator-runtime";

function p() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Hey,Brother");
            resolve();
        }, 2000);
    });
}

export default async function( ) {
    await p();
    console.log("Terminou aqui");
}