async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const users = await response.json();
        
        // Clear loading message
        dataContainer.innerHTML = '';

        // Create and append user list
        const userList = document.createElement('ul');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append userList to dataContainer
        dataContainer.appendChild(userList);
    } catch (error) {
        console.error('Error fetching data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    fetchUserData();
});
