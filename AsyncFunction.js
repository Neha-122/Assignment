function myFruits(){
	let Fruits= {name:'Mango', 'Apple', 'Peaches'}
	return Fruits
}

async function getFruits(){
	try{
		var Fruits= await myFruits();
		console.log(intro);

	}
	catch(e){
		console.log("Error:", error)

	}
}
getFruits();