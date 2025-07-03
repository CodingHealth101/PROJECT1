// json - Java script object notations


/* let jsonData = `
[ 
   {
   "productName": "Laptop",
   "price": 5000.00,
   "inStock": true,
   "features": ["lightweight", "fast", "Memory efficient"]
    },

    {
    "productName": "Mobile",
    "price": 5000.00,
    "inStock": true,
    "features": ["lightweight", "fast", "Memory efficient"]
},
    {
    "productName": "LED",
    "price": 5000.00,
    "inStock": true,
    "features": ["lightweight", "fast", "Memory efficient"]


}
 */
    /* 
]`

console.log(jsonData);


let convertedList = JSON.parse(jsonData);

console.log(convertedList);

console.log('convertedObject.productName');
console.log('convertedObject.price');
 */

let API_url = 'https://jsonplaceholder.typicode.com/todos';


console.log('Started fetching task data');

fetch(API_url)
.then( (data ) => {
    if(data.ok != true) 
        {
        
        }
        return data.json()
})
.then ( data => {
    console.log(data);

    data.forEach(task => {
        let li = document.createElement('li');
        li.innerText = task.title;
        document.getElementById('tasks').appendChild(li);
    });
})
.catch ( error => {

})

console.log('Data fetched...');