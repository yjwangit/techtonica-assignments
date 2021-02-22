class Event {
  static all = [];
  static _nextId = 100;

  constructor(name, date, category, location) {
    this.id = Event._nextId++;
    // decide what properties are required
    this.name = name;
    this.date = date;
    this.category = category;
    this.location = location;

    Event.all.push(this); // keep track of all created instances
  }

  /**
   * Search all Events for those with the given `date` property.
   */
  static findByDate(date) {
    let dateArr = [];
    for(let i=0; i<this.all.length; i++){ //why this here?
        if(this.all[i].date === date){
          dateArr.push(this.all[i]);
        }
    }
    return dateArr;
  }

  static findByCategory(category) {
    let cateArr = [];
    for(let i=0; i<this.all.length; i++){ //which this here?
        if(this.all[i].category === category){
          cateArr.push(this.all[i])
        }
    }
    return cateArr;
  }
}

class User {
  static all = [];
  static _nextId = 200;

  constructor(name,email,place) {
    this.id = User._nextId+1; //User._nextId=Uswer._nextId+1;
    // decide what properties are required on an instance
    this.name = name;
    this.email = email;
    this. place = place;
    User.all.push(this); // keep track of all created instances
  }
}
//User.nextId+1

class Eventonica {

  addEvent(name,date,category,location) { /*arguments u decide*/
    new Event(name,date,category,location);
  }

  updateEvent(name,property,change) { //update existing Event
    let indexEvent = Event.all.map(update => update.name).indexOf(name);
    Event.all[indexEvent][property] = change;// Update existing Event
  }

  deleteEvent(name) {
  let indexDel = Event.all.map(x => x.name).indexOf(name); //or find the event with .id === id and remove it from the Event.all
   if (indexDel>=0){
      //console.log("This event is not found.");
    Event.all.splice(indexDel,1);
    //console.log("This event has been removed.");
   }
 }
  // for(let i=0; i<Event.all.length; i++){
  //       if(Event.all[i].id === id){
  //         Event.all.splice(i,1);
  //      }
  //   }

    
  findEventsByDate(date) {
    // Return items in Event.all with a specified date
    return Event.findByDate(date);
  }

  findEventsbyCategory(category){
    // Return items in Event.all with a specified category
    return Event.findByCategory(category);
  }

  addUser(name,email,place) { //???
    //let newUser = [];
    //newUser.push()// Adds a new User
    new User(name,email,place);
  }

  updateUser(name,property,change){
    let indexU=User.all.map(x => x.name).indexOf(name);
    User.all[indexU][property]=change;
    // Update existing User
  }

  deleteUser(name) {
    let indexDel = User.all.map(x => x.name).indexOf(name)
    if(indexDel <0){
      console.log("This User is currently not in Eventonica.");
    }else{
      Event.all.splice(indexRem,1);
      //console.log("Your User has been removed from Eventonica.");
    }
  }
}

var app = new Eventonica();
app.addEvent("Tea party","03-18-2021","tea parties","zoom");
console.log(Event.all);


if (typeof module !== "undefined") {
  module.exports = { Eventonica, User, Event };
}


new Event('Example event');
new User('Alex');
new User('Jenna');
new User('Bella');
new User('Tom');
