async function testapi(){
    try {
        let result =  Promise.reject("503 Service Unavailable");
    }
    catch(error){
        console.log("error:"+ error);
    }
}
testapi();