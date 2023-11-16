const dns = require('dns') //get the lib first;
const domain = 'www.miu.edu' //set the domain used in the task;

//use the resolve4 function to find it.
dns.resolve4(domain,(err,address) => {
    if(err){
        console.error(`Error when trying to resolve the ${domain}:`, err)
    }else{
        console.log(`IP addresses for ${domain}:`, address)}
    });