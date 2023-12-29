const Products=async()=>{
    try{
    const response=await fetch("https://fakestoreapi.com/products")
    if(!response.ok){
        throw new Error("failed to fetch data check your InterNet")
    }
    const data=await response.json();
    return data;
    }catch(error){
    console.log(error)
    throw error
    }
    }
    export default Products;