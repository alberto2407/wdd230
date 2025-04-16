const baseURL = 'https://alberto2407.github.io/wdd230/';
const linksURL = `https://alberto2407.github.io/wdd230/data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data.weeks);
        } else {
            throw new Error('Links data not available');
        }
    } catch (error) {
        console.error('Error fetching links data:', error);
    }
}

function displayLinks(weeks) {
    const activitiesContainer = document.getElementById('week-activities');

    weeks.forEach(week => {
        const weekli = document.createElement('li');
        weekli.textContent = week.week;
        const linksList = document.createElement('ul');
        week.links.forEach(link => {
            const listItem = document.createElement('a');
            listItem.setAttribute('href', baseURL + link.url);
            listItem.textContent = link.title;
            linksList.appendChild(listItem);
        });

        weekli.appendChild(linksList);
        weekli.className = 'week';
        activitiesContainer.appendChild(weekli);
    });
}
getLinks();