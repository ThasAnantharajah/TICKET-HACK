
console.log(moment(new Date()).format('HH:mm'));
//HOME PAGE
const arrival = document.querySelector('.arrival');
const departure = document.querySelector('.departure');
const searchDate = document.querySelector('.date-picker');
const searcheBtn = document.querySelector('.searcheBtn');
const resultTrips = document.querySelector('.result-trip');
// const departureResult = document.querySelector('.departureResult');
// const arrivalResult = document.querySelector('.arrivalResult').innerHTML;
// const departureTime = document.querySelector('.departureTime').innerHTML;
// const price = document.querySelector('.price').innerHTML;
// const bookBtn = document.querySelector('.bookBtn');

//CART
// const cartDeparture = document.querySelector('.cartDeparture').innerHTML;
// const cartArrival = document.querySelector('.cartArrival').innerHTML;
// const cartTime = document.querySelector('.cartTime').innerHTML;
// const cartPrice = document.querySelector('.cartPrice').innerHTML;
// const cartCloseBtn = document.querySelector('.cartCloseBtn');
// const totalPrice = document.querySelector('.totalPrice').innerHTML;
// const purchaseBtn = document.querySelector('.purchaseBtn');

//BOOKING
// const bookingDeapartue = document.querySelector('.bookingDeapartue').innerHTML;
// const bookingArrival = document.querySelector('.bookingArrival').innerHTML;
// const bookingDeapartueTime = document.querySelector('.bookingDeapartueTime').innerHTML;
// const bookingPrice = document.querySelector('.bookingPrice').innerHTML;
// const bookingRemindTime = document.querySelector('.bookingRemindTime').innerHTML;


searcheBtn.addEventListener('click', function() {
    console.log('Arival', arrival.value)
    console.log('Departure', departure.value)
    console.log('Date', searchDate.value)
    // console.log('departure result', departureResult)
    // console.log('arrival result', arrivalResult)
    // console.log('departure time', departureTime)
    // console.log('Trip price', price)
    // console.log(bookBtn)
    fetch(`http://localhost:3000/trips?departure=${departure.value}&arrival=${arrival.value}&date=${searchDate.value}`)
.then(response => response.json())
.then(data =>{
    console.log(data.trips)
    let tripsArray = data.trips;

    tripsArray.forEach(element => {
        console.log(element.date)
        let dateTime = moment(element.date).format("HH:mm")
    
        

        console.log(dateTime);

//         let date = moment("2022-12-22");
// console.log(date.format("DD/MM/YYYY")); 
        resultTrips.innerHTML += `<div class="trip bg-[#EFF1F1] flex justify-between content-center items-center h-12 w-full rounded-md px-4 py-4">
        <p class=" departure font-semibold">${element.departure}</p>
        <p>></p>
        <p class="arrival font-semibold">${element.arrival}</p>
        <p class="time mr-8 font-semibold">${dateTime}</p>
        <p class="price mr-8 font-semibold">${element.price}€</p>
        <button class="bg-[#459E85] flex justify-center items-center rounded-md font-normal text-l text-white px-2 py-1 ">Book</button>
    </div>`
    });

   
  
})
})







