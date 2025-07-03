// alert("change to java");
// console.log("document.getElementsByTagName('h1')", document.getElementsByTagName('h1'));

//  document.getElementById('heading1').innerText = "Hello World";

//  let p = document.createElement('p');
//     p.innerText = "This is a new paragraph.";
//     p.style.color = 'blue';

//     document.body.appendChild(p);
    
//     function displayMessage() 
//     {// This function will be called when the button is clicked
//       p.innerText = 'This paragraph has been updated by the displayMessage function.';
//       p.style.color = 'red';
//       console.log('Paragraph updated by displayMessage function.');
//     }
       
//     // getElementById

//     let h1 = document.getElementById('heading1');
//     h1.innerText = 'This is headingOne';
//     h1.style.color = 'green';
      
//     let h2 = document.getElementById('heading2');
//     h2.innerText = 'This is the counter';
//     h2.style.color = 'black';

//       let counter = document.getElementById('counter');
//       counter.innerText = 'Counter: 0';

//       let count = 0;
//       let counterH1 = document.getElementById('counter');
//       function Add() {
//             count++;
//             counterH1.innerHTML = 'Counter: ' + count;
//             counterH1.style.color = 'blue';
//             counterH1.style.fontSize = '20px';
//             counterH1.style.fontWeight = 'bold';
//             counterH1.style.textAlign = 'left';
//             counterH1.style.backgroundColor = 'lightgray';
//             counterH1.style.padding = '10px';
//             counterH1.style.border = '2px solid black';
//             console.log('Counter incremented to: ' + count);
//          }
//          function Subtract() {
//             count--;
//             counterH1.innerHTML = 'Counter: ' + count; 
//             counterH1.style.color = 'red';
//             counterH1.style.fontSize = '20px';
//             counterH1.style.fontWeight = 'bold';
//             counterH1.style.textAlign = 'right';
//             counterH1.style.backgroundColor = 'lightyellow';
//             counterH1.style.padding = '10px';
//             counterH1.style.border = '2px solid black';
//             console.log('Counter decremented to: ' + count);
//          } 

//          // getElementsByTagName
//          function addItem() {
            
//             let itemBoxElement = document.getElementById('item-box');
//             console.log(itemBoxElement.value);
            
//             document.getElementById('item').innerText = itemBoxElement.value;

//             document.getElementById('quantity-box').innerText = itemBoxElement.value;


            
      
//             object of image details and buttons

function changeImage() {
   let img = document.getElementById('Myimage');
   img.scr ="image2.jpg";
}
   
    