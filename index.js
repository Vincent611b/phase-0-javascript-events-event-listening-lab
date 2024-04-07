function addingEventListener() {
    // Select the element you want to add the event listener to
    const event = document.getElementById('button');

    // Add the event listener
    event.addEventListener('click', function() {
        // Your event handling code goes here
        alert('Element clicked!');
    });
}

// Call the function to add the event listener
addingEventListener();
