const init = require("./Routes");

init((error)=>{
    if(error) console.error("Something is wrong...!", {error});
    else console.log("Ready...!");
})