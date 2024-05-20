
console.log(moment(new Date()).format('HH:mm'));
//HOME PAGE
const arrival = document.querySelector('.arrival');
const departure = document.querySelector('.departure');
const searchDate = document.querySelector('.date-picker');
const searcheBtn = document.querySelector('.searcheBtn');
const resultTrips = document.querySelector('.result-trip');
// const departureResult = document.querySelector('.departureResult');
// const arrivalResult = document.querySelector('.arrivalResult');
// const departureTime = document.querySelector('.departureTime');
// const price = document.querySelector('.price');
// const bookBtn = document.querySelector('.bookBtn');





const purchaseBtn = document.querySelector('purchase');

// purchaseBtn.addEventListener('click', function(){
//     console.log(purchaseBtn)
// })


searcheBtn.addEventListener('click', function() {
      
    fetch(`http://localhost:3000/trips?departure=${departure.value}&arrival=${arrival.value}&date=${searchDate.value}`)
    .then(response => response.json())
    .then(data =>{
        let tripsArray = data.trips;
        
        tripsArray.forEach(element => {

            let dateTime = moment(element.date).format("HH:mm")
            resultTrips.innerHTML += `<div class="trip bg-[#EFF1F1] flex justify-between content-center items-center h-12 w-full rounded-md px-4 py-4">
                                        <p class="departureResult font-medium">${element.departure +" "+'>'}</p>
                                        <p class="arrivalResult mr-4 font-medium">${element.arrival}</p>
                                        <p class="departureTime mr-4 font-medium">${dateTime}</p>
                                        <p class="price mr-4 font-medium">${element.price}€</p>
                                        
                                        <button class="bookBtn bg-[#459E85] flex justify-center items-center rounded-md font-normal text-l text-white px-2 py-1 ">Book</button>
                                        
                                    </div>`
    });  
    booking ();
})
})

function booking (){
    
    const bookBtn = document.querySelectorAll('.bookBtn');
    
    const tripCart = document.querySelector('cart-list');
    
    
    for (let i = 0; i < bookBtn.length; i++) {
        bookBtn[i].addEventListener('click',
          function () {
           
            let div = this.parentNode
            const tripPrice = div.querySelector('.price').textContent;
            const numPrice = parseInt(tripPrice)
            const departureResult = div.querySelector('.departureResult').textContent;
            const arrivalResult = div.querySelector('.arrivalResult').textContent;
            const departureTime = div.querySelector('.departureTime').textContent;
                        console.log(numPrice, departureResult, arrivalResult, departureTime);
            
         
              
            //const tripBooking = {}

            fetch(`http://localhost:3000/cart`,
             {
                           method: 'POST',
                           headers: { 'Content-Type': 'application/json' },
                           body: JSON.stringify({
                            departure: departureResult,
                           arrival: arrivalResult,
                            hour: departureTime,
                          price: numPrice,
                           })
              
              })
              .then(response => response.json())
              .then(data => {
              console.log(data);
              window.location.assign("/cart");
              });

        //     tripCart.innerHTML += `  <div class="trip-cart bg-[#EFF1F1] flex justify-between content-center items-center text-xl h-12 w-full rounded-md px-10 py-10 ">
        //     <div class="tripDetail flex">
        //       <p class="font-semibold">${departureResult}</p>
        //       <p>></p>
        //       <p class="mr-8 font-semibold">${arrivalResult}</p>
        //     </div>
        //     <p class="mr-8 font-semibold">${departureTime}</p>
        //     <p class="mr-8 font-semibold">${numPrice+" "+"€"}</p>
        //     <button class="bg-[#459E85] flex justify-center items-center rounded-md font-normal text-l text-white px-4 py-2 ">X</button>
        //  </div> ` 
            
          }
          
        );
       
       }
}











