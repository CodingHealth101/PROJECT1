//Synchronous and asynchronous programming

// console.log('Task 1: Starting synchronous operation...');
// function chopVegetables() 
// {
//     console.log('Task 2..Chopping vegetables...');
//     let startime = new Date().getTime();
//     while (new Date().getTime() < startime + 2000)
//         {
            
//             // Simulating a time-consuming task
//         }
    
//         console.log('Task 3: Vegetables chopped.');
    

// }
// chopVegetables();

// console.log('Task 4: Continue with other operations...');


// // Asynchronous programming 
// console.log('Task 1: Start Task...');

// setTimeout(() => {
//     console.log('Task 2: Setting the pause...');
// }, 5000);

// console.log('Task 3, should execute first');
// for (let i = 0; i < 10; i++) 
// {
//     console.log(i);
// }

// //Callback function
// function greetUser(name, callback) 
// {
//     console.log('Hello ' + name);
//     setTimeout( () => {
//         let message = 'Welcome ' + name + 'your greeting is done!'
//         callback(message);
//     }, 5000);
// }

// function callBackNotification(msg)
// {
//     console.log(msg);
// }

// console.log('Task 1. Started');
// console.log('Lets Greet');

// greetUser('Isaac',  callBackNotification);

// console.log('Continue the task');

//Synchronous:
//1. code runs line by line
//2. next line waits until current one finishes.

//Asynchronous:
//1. code does not wait.
//2. it is useful when working with time-consuming tasks, eg: loading data

/* console.log('Start chopping...');

function chop() {
    let startTime = new Date().getTime();
    while (new Date().getTime() < startTime + 4000) {
        // This loop blocks the code for 4 seconds
    }
    console.log('Chopping done!');
}

chop();

console.log('Now, start cooking...');

//=============================

console.log('Start chopping...');

setTimeout(() => {
    console.log('Chopping done!');
}, 4000);

console.log('Now, start cooking...');


//=============================
//Callback example (greet with notification)

function showMessage(message) {
    console.log(message);
}

function greet(name, callback) {
    console.log('Hello ' + name);
    
    setTimeout(() => {
        let msg = 'Welcome ' + name + ', your greeting is complete!';
        callback(msg);
    }, 3000);
}

console.log('Task 1: Start');
greet('Usman', showMessage);
console.log('Task 2: You can do other things while greeting...');


//Async operation with promises
console.log('Starting Async operation')
function fetchData() {
    return new Promise((resolve, reject) => {
        let success = true; 
        setTimeout(() => {
            if (success == true) 
                {
                let data = { id: 1, name: 'Masood' }
                
                ;
                console.log('Data fetched...')
                resolve(data)
                }
                else
                {
                    console.log('Failed to fetch')
                    reject('Error in the operation')
                }
        }
    , 3000);
    })
}

console.log('Start Fetching data...');

fetchData()
.then( (data) => {
    console.log(data);
})
.catch( (error) => {
console.log(error)
})
.finally( () => {
    console.log('Promise operation done');
});


 */

//==========================

/* console.log("step 1: prepatting to get user info");

function getUserInfo(){
    console.log("step 2: getting user data...");

    return new Promise((resolve, reject) => {
        let success = true; 

        setTimeout(() => {
            if (success) {
                let user = { id: 101, 
                            name: "Usman", 
                            email: "usman@example.com"
                };
                console.log("Step 3: Data retrieved");
                resolve(user);

            } else {

                console.log("Step 3: Failed to retrieve user data");
                reject("Error: Unable to retrieve user info");

            }
        }, 3000);
    }
    );
}
console.log("step 4: Calling getUserinfo()...");
getUserInfo()
.then((userData) => {
    console.log("UserInfo", userData);
}
)
.catch((error) => {
    console.log("something went wrong", error);
}
)
.finally(() => {
    console.log("Step 5: operation complete");
}
);


 */
/* console.log("step 1: prepatting to get Vehicle info");

function getVehicleInfo(){
    console.log("step 2: getting Vehicle data...");

    return new Promise((resolve, reject) => {
        let success = true; 

        setTimeout(() => {
            if (success) {
                let vehicle = { id: 101456, 
                            name: "Toyota", 
                            make: "Civic"
                         };
                console.log("Step 3: Data retrieved");
                resolve(vehicle);

            } else {

                console.log("Step 3: Failed to retrieve user data");
                reject("Error: Unable to retrieve user info");

            }
        }, 3000);
    }
    );
}
console.log("step 4: Calling getVehicleinfo()...");
getVehicleInfo()
.then((VehicleData) => {
    console.log("VehicleInfo", VehicleData);
}
)
.catch((error) => {
    console.log("something went wrong", error);
}
)
.finally(() => {
    console.log("Step 5: operation complete");
}
); */

//========================
//JSON
/* let jsonData = 
[
    {
        "name": "Usman",
        "age" : 23,
        "enrolled": true,
},

{
        "name": "Jean",
        "age": 23,
        "enrolled": true

}

];


console.log("raw Json data",);
console.log(jsonData);

let studentList = jsonData;

console.log("converted to javascript array: ");
console.log(studentList);

studentList.forEach(student => {
    console.log("Student Name: " + student.name);
    console.log("--------------------");
})
 */
//API

fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
        let img = document.createElement('img');
        img.src = data.message;
        img.alt = 'Random Dog'
        img.style.width = '300px';
        document.body.appendChild(img);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
