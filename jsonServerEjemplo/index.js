// price_gte=100&price_lte=499
//q=mouse   q=query -> consulta

async function fetchData(){
    try{
        let data= await fetch('http://localhost:3000/db.json');
        console.log(data);
    }catch(e){
        console.error("Failed to fetch data" + e)
    }
}



