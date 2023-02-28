const API_URL = 'https://fakestoreapi.com/products';

//  produktu paemimas i AllProducts

const getAllProducts = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log('ProductsSrvice, getAllProducts , data:', data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

// --------- kategoriju sarasas

const getNewCat = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log('ProductsSrvice, getNewCat, data:', data);


        let newCat = [];
        console.log('newCat', newCat);

        data.map((item, index) => {
            let prod = newCat.find(x => x.category === item.category)
            console.log('prod', prod);

            if (prod === undefined || prod.category !== item.category) {
                prod = {
                    ...item,
                }
                newCat.push(prod)
            } else {
                console.log('tokia kategorija yra');
            }
        })
        return newCat;
    }

    catch (error) {
        console.log('getFrom searc eror:', error);
    }
}

// ------------- atfiltruotu prekiu sarasas


const getNewList = async (prodcat) => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log('ProductsSrvice, getNewList, data:', data);

        let newList = data.filter((item) => item.category === prodcat.category);
        console.log('newList', newList);

        return newList;
    }

    catch (error) {
        console.log('getFrom searc eror:', error);
    }
}


export { getAllProducts, getNewCat, getNewList }









