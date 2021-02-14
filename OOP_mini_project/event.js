class Event {
  constructor(name, description){
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }
   
   addAvailableTickets(type,price){
    let ticket = new TicketType(type,price);
    this.availableTickets.push(ticket);
  }

   allTickets(){
     let ticketface = "All tickets:";
     for(let i=0; i<this.availableTickets.length; i++){
        ticketface += `${i+1}. ${ticket.type} ($${ticket.price}`;
      }
      return ticketface;
   }

    searchTickets(low,upper){
      let search = "Eligible tickets";
      for(let i=0; i<ticket.price; i++){
        if(ticket.price >= low && ticket.price <= upper){
            search += `${i+1}. ${ticket.type} ($${ticket.price}`
        } else { 
            search = "No tickets available" 
        }
      }
         return search 
    }
  }
  

// The below statement creates an object.
const eventObj1 = new Event(
  'KLOS Golden Gala',
  'An evening with hollywood vampires'
);
  
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

const eventArray = new Array();

// pushing single object to an array
//eventArray.push(eventObj1);
// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

// in order to check whether the elements are pushed, use console.log
//console.log(eventArray);

class TicketType {
  constructor(type,price){
    this.type = type;
    this.price = price;
  }
}


$(document).ready(function () {
  let html = '';
  $.each(eventArray, function (index, item) {
    html += `<li>${item.name} - ${item.description - ${item.searchTickets(100,200)}</li>`;
  });
  //insert final html into #event...
  $('#event').html(html);
});





eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)