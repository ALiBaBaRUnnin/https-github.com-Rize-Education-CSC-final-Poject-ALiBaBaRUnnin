document.getElementById('find-volunteers-btn').addEventListener('click', fetchOpportunities);

function fetchOpportunities() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => displayOpportunities(data.results))
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('opportunities-container').innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
        });
}

function displayOpportunities(volunteers) {
    const container = document.getElementById('opportunities-container');
    container.innerHTML = ''; // Clear previous results

    volunteers.forEach(volunteer => {
        const card = document.createElement('div');
        card.className = 'opportunity-card';
        card.innerHTML = `
            <h3>${volunteer.name.first} ${volunteer.name.last}</h3>
            <p><strong>Location:</strong> ${volunteer.location.city}, ${volunteer.location.state}</p>
            <p><strong>Skills:</strong> Community Outreach, Event Assistance</p>
            <p><strong>Commitment:</strong> Flexible Hours</p>
        `;
        container.appendChild(card);
    });
}
