class Event {
  constructor(name, description){
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }
   
  addAvailableTickets(tickettype,tickeprice){

  }
}
    
allTickets(){
        return `All tickets: 1.`
  }



  // allTickets that returns a string representing all ticket types and prices, like: All tickets: 1. Orchestra ($300) 2. Mezzanine ($200) 3. Balcony ($100)
  

// The below statement creates an object.
const eventObj1 = new Event(
  'KLOS Golden Gala',
  'An evening with hollywood vampires'
);


  
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

const eventArray = new Array();

// pushing single object to an array
eventArray.push(eventObj1);
// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

// in order to check whether the elements are pushed, use console.log
//console.log(eventArray);

$(document).ready(function () {
  let html = '';
  $.each(eventArray, function (index, item) {
    html += `<li>${item.name} - ${item.description}</li>`;
  });
  // insert final html into #event...
  $('#event').html(html);
});


class TicketType{
  constructor(ticketname, ticketprice){
    this.ticketname = ticketname;
    this.price = price;
  }
}







// eventObj1.addAvailableTickets("human", 299);
// eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)