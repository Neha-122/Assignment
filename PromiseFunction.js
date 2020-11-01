let myFruits =()=>{
    return new Promise((resolve,reject)=>{
        let Fruits = [{name:'Mango, Apple, Peaches'}]
        if (fruits.length>0){
            resolve(fruits)}
            else{
                reject ("It's an empty Array")
            }
})
} 
myFruits().then((result)=>
{
    console.log("RESULT", result);
}).catch((error)=>{
    console.log("ERROR", error)
}
)