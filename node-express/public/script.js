document.getElementById('fetchMessage').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/hello');
        const message = await response.text();
        document.getElementById('backendMessage').innerText = `Backend says: "${message}"`;
    } catch (error) {
        document.getElementById('backendMessage').innerText = 'Error fetching message from backend.';
        console.error('Error:', error);
    }
});