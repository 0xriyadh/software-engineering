function friendlyFunction() {
  return 'Hello World';
}

console.log(friendlyFunction()); // Hello World

// Now we will make this function asynchronous. This will return a promise.
async function asyncFriendlyFunction() { 
  return 'Hello World';
}
console.log(asyncFriendlyFunction()); // Promise { 'Hello World' }


// Converting the Promise Example to Async/Await
const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
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

const addToCalendar = (meetingDetails) => {
    const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calendar);
};

const sendEmail = (calendar) => {
    const email = `Your meeting has been scheduled!!! \n\nMeeting Details:\n${calendar}`;
    return Promise.resolve(email);
};

// meeting
//     .then(addToCalendar)
//     .then(sendEmail)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });


async function myMeeting() { 
  const meetingDetails = await meeting;
  const calendar = await addToCalendar(meetingDetails);
  const email = await sendEmail(calendar);
  console.log(email);
}

myMeeting();
console.log("Hello World! \n\n"); // This will be printed first, because the promise is asynchronous. 