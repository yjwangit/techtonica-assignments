class Eventonica {
  addEvent(name,date,category,location) { /*arguments u decide*/
    let newEvent = [];
     newEvent.push()// Adds a new Event  ??newEvent(name,date,category,location)???
  }

  updateEvent() {
    // Update existing Event
  }

  deleteEvent(id) {
//   //find the event with .id === id and remove it from the Event.all
  for(let i=0; i<Event.all.length; i++){
        if(Event.all[i].id === id){
          Event.all.splice(i,1);
       }
    }
  }  //do we need to return event here?
    
  }

  findEventsByDate(date) {
    // Return items in Event.all with a specified date
    return Event.findByDate(date);
  }

  findEventsbyCategory(category) {
    // Return items in Event.all with a specified category
    return Event.findByCatgory(category);
  }

  addUser(name,email,place) { //???
    //let newUser = [];
    //newUser.push()// Adds a new User
    new User(name,email,place);
  }

  updateUser() {
    // Update existing User
  }

  deleteUser() {
    // Deletes User
  }


class Event {
  static all = [];
  static _nextId = 100;

  constructor(name,date,catogry,location) {
    this.id = Event._nextId++;
    // decide what properties are required
    this.name = name;
    this.date = date;
    this.category = category;
    this.location = location;

    Event.all.push(this); // keep track of all created instances
  }

  static findByDate(date) {
    let dateArr = [];
    for(let i=0; i<this.all.length; i++){ //why this here?
        if(this.all[i].date === date){
          dateArr.push(this.all[i];)
        }
    }
    return dateArr;
  }

  static findByCategory(category) {
    let cateArr = [];
    for(let i=0; i<this.all.length; i++){ //why this here?
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
    this.id = User._nextId++;
    // decide what properties are required on an instance
    this.name = name;
    this.email = email;
    this. place = place;
    User.all.push(this); // keep track of all created instances
  }
}