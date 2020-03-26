
// arquivo responsável pela requisicao ao webservice;
const getProducts = async () => {
    //setLoading(true);

    const res = await fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1');
    const json = await res.json();

    return json.products;
    //console.log(json.products);
     //setLoading(false); 
    //console.log(json.products);
  }
 