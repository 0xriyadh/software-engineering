/* 
    To create a promise, we use the Promise constructor "new Promise". Which takes a callback function with two parameters, "resolve" and "reject". We can write anything else instead of "resolve" and "reject", but it is a convention to use these names.  
    If the promise is successful or fulfilled, the "resolve" function is called. If the promise is unsuccessful or rejected, the "reject" function is called.
    And we will do something inside the promise, and then we will call the "resolve" or "reject" function.
*/
const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
    // We will do something here
    if (!hasMeeting) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10:00 PM",
        };
        resolve(meetingDetails);
    } else {
        reject(new Error("Meeting already scheduled!"));
    }
});

/* 
    const addToCalendar = (meetingDetails) => {
        // We will do something here
        return new Promise((resolve, reject) => {
            const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
            resolve(calendar);
        });
    }; 
*/
// As in the above code we are not using the reject callback. We are sure, our promise will be resolved. We can simplify the code further.
const addToCalendar = (meetingDetails) => {
    const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calendar);
};

const sendEmail = (calendar) => { 
    const email = `Your meeting has been scheduled!!! \n\nMeeting Details:\n${calendar}`;
    return Promise.resolve(email);
}

meeting
    .then(addToCalendar)
    .then(sendEmail)
    .then((res) => {
        // resolved data
        // console.log(JSON.stringify(res));
        console.log(res);
    })
    .catch((err) => {
        // rejected data
        console.log(err.message);
    });

console.log("Hello World! \n\n"); // This will be printed first, because the promise is asynchronous.
