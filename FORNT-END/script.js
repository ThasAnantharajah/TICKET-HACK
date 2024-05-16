
//HOME PAGE
const arrival = document.querySelector('.arrival');
const departure = document.querySelector('.departure');
const searchDate = document.querySelector('.date-picker');
const searcheBtn = document.querySelector('.searcheBtn');
const departureResult = document.querySelector('.departureResult').innerHTML;
const arrivalResult = document.querySelector('.arrivalResult').innerHTML;
const departureTime = document.querySelector('.departureTime').innerHTML;
const price = document.querySelector('.price').innerHTML;
const bookBtn = document.querySelector('.bookBtn');

//CART
const cartDeparture = document.querySelector('.cartDeparture').innerHTML;
const cartArrival = document.querySelector('.cartArrival').innerHTML;
const cartTime = document.querySelector('.cartTime').innerHTML;
const cartPrice = document.querySelector('.cartPrice').innerHTML;
const cartCloseBtn = document.querySelector('.cartCloseBtn');
const totalPrice = document.querySelector('.totalPrice').innerHTML;
const purchaseBtn = document.querySelector('.purchaseBtn');


//BOOKING
const bookingDeapartue = document.querySelector('.bookingDeapartue').innerHTML;
const bookingArrival = document.querySelector('.bookingArrival').innerHTML;
const bookingDeapartueTime = document.querySelector('.bookingDeapartueTime').innerHTML;
const bookingPrice = document.querySelector('.bookingPrice').innerHTML;
const bookingRemindTime = document.querySelector('.bookingRemindTime').innerHTML;



searcheBtn.addEventListener('click', function() {
    console.log('Arival', arrival.value)
    console.log('Departure', departure.value)
    console.log('Date', searchDate.value)
    console.log('departure result', departureResult)
    console.log('arrival result', arrivalResult)
    console.log('departure time', departureTime)
    console.log('Trip price', price)
    console.log(bookBtn)
})


