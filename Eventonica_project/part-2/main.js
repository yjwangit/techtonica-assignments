/**
 * Add all your DOM event handlers and other UI code in this file.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Use this to call all the logic we already created
  const app = new Eventonica();

  // Builds HTML list for all event. You must call this function after you
  // change, add, or remove any events.
  const refreshEventsList = () => {
    document.querySelector("#events-list").innerHTML = Event.all.map((arrElement) => `<li>${arrElement.name}</li>`).join("\n");
  };

  //loop through all users in User.all and display them in the element with users-list on your HTML page. 
  const userList = () => {
    document.querySelector("#users-list").innerHTML = User.all.map((users)=> `<li>${users.name}</li>`).join("\n");
  } 

  const addUserForm = document.querySelector("#add-user");
  addUserForm.addEventListener("Submit", (submitUser) => {
    submitUser.preventDefault();
    const name = document.querySelector("#add-user-name").value;
    const email = document.querySelector("#add-user-email").value;
    const place = document.querySelector("#add-user-place").value;
    const user = app.addUser(name,email,place);
    console.log("Added user", user);
    refreshUSersList();
    addUserForm.reset();
  }); 


  const addEventForm = document.querySelector("#add-event");

  // Handle add event form submit by calling our instance of Eventonica, `app`
  addEventForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const name = document.querySelector("#add-event-name").value;
    const event = app.addEvent(name);
    console.log("Added event", event);
    refreshEventsList();
    addEventForm.reset();
  });


  const deleteUserForm = document.querySelector("#delete-user");
  deleteUserForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const user_id = document.querySelector("#delete-user-id").value;
    app.deleteUser(user_id);
    refreshUSersList();
    deleteUserForm.reset();
  });

  refreshEventsList();
  userList();
});



//new Event("Tea party","03-18-2021","parties","zoom");



