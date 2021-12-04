const userImage = document.querySelectorAll('.userImage');
const userName = document.querySelectorAll('.userName');

// Initilizing the AOS Animate scrolling
 AOS.init({
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 2000, // values from 0 to 3000, with step 50ms
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
 });


// Getting dummy user data from https://randomuser.me/
async function getDummyUser() {
    const apiURL = 'https://randomuser.me/api/?results=4';
    const request = await fetch(apiURL);
    const data = await request.json();

    insertUserData(data);
}


getDummyUser()


function insertUserData(data) {
    // For each of the 4 api results we assign user's details
    data.results.forEach((user, idx) => {
        const image = user.picture.medium;
        const name = `${user.name.first} ${user.name.last}`;
        
        // For each of the HTML user box (4) we assign based on the api result array index [0,1,2,3]
        userImage[idx].setAttribute('src',image)
        userName[idx].textContent = name;
    });
}