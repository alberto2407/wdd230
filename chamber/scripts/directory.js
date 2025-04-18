
/* *********************************************************************************************************************
                                            Directory of Members
********************************************************************************************************************* */
// This script fetches the members data from a JSON file and displays it on the webpage. It creates a card for each member
const linksURL = `./data/members.json`;
const cards = document.querySelector('#cards');

async function getBusinessData() {
  const response = await fetch(linksURL);
  const data = await response.json();
  // console.table(data.members);
  displayMembers(data.members);
}

function displayMembers(members) {
  members.forEach((member) => {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let logo = document.createElement('img');
    let phone = document.createElement('p');
    let address = document.createElement('p');
    let website = document.createElement('a');
    let membershipType = document.createElement('h4');

    logo.setAttribute('src', member.logo);
    logo.setAttribute('alt', `${member.name} Logo`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '100%');
    logo.setAttribute('height', 'auto');

    name.textContent = member.name;
    address.textContent = member.address;
    phone.textContent = member.phone;
    website.setAttribute('href', member.website);
    website.textContent = "Visit Website";
    website.setAttribute('target', '_blank');
    membershipType.textContent = `${member.membershipType} Member`;

    
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(logo);
    card.appendChild(membershipType);

    cards.appendChild(card);
    card.classList.add('member-card');
  });
};
getBusinessData();

const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");
const display = document.querySelector("article");

gridBtn.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listBtn.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

// Spothlight
function displaySpotlightMembers(members) {
  // console.log(members);

  let topMembers = members.filter((member) => member.membership === "Silver" || member.membership === "Gold");

  let randomMembers = topMembers.sort(() => 0.5 - Math.random()).slice(0, 4);

  const spotlights = document.querySelector(".cards");

  randomMembers.forEach((member) => {
      const spotlight = document.createElement("article");
      spotlight.classList.add("card");
  
     let status = member.membership === "Silver" ? "silver" : "gold";
      spotlight.classList.add(status);
  
      let logo = document.createElement("img");
      logo.setAttribute("src", member.logo);
      logo.setAttribute("alt", `${member.name} Logo`);
      logo.setAttribute("loading", "lazy");
      logo.setAttribute("width", "100%");
      logo.setAttribute("height", "auto");
  
      let name = document.createElement("h3");
      name.textContent = member.name;
  
      let website = document.createElement("a");
      website.setAttribute("href", member.website);
      website.textContent = "Visit Website";
      website.setAttribute("target", "_blank");
  
      spotlight.appendChild(logo);
      spotlight.appendChild(name);
      spotlight.appendChild(website);
      spotlights.appendChild(spotlight);
  });
}