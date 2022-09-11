const products = [
    {name: 'Hp Laptop', price: 65000, brand: 'Hp', color: 'Silver'},
    {name: 'Lenovo Laptop', price: 60000, brand: 'Lenovo', color: 'Black'},
    {name: 'Apple Laptop', price: 150000, brand: 'Apple', color: 'Silver'},
    {name: 'Dell Laptop', price: 69000, brand: 'Dell', color: 'Gray'}
];

/* 
    1. map()
        kono akta array of object theke property gula niye akta array banaite chay tahole map() babohar korbo [map() hocche kicho akta return kore]
*/
const brands = products.map(product => product.brand);

/* 
    2. forEach()
        [forEach() kicho return kore na kinto loop kore sob info ui te display kore]
*/
products.forEach(product => console.log(product));
products.forEach(product => {
    console.log(product.color);
});

/* 
    3. filter()
        [filter() er maddome condition use kore jey gula match korbe sey gula akta array te paben]
*/
const cheap = products.filter(product => product.price <= 65000);
const specificName = products.filter(product => product.name.includes('e'));

/* 
    4. find()
        [find() and filter() same kinto fine() just protom jeyta match korbe seytar full object take return dibe]
*/
const specialName = products.find(product => product.name.includes('e'));


