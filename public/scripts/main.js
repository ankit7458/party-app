// public/scripts/main.js


async function getRandomEmployees() {
    try {
        const response = await fetch('/api/random');
        const data = await response.json();
        alert(`Random employees selected for the party: ${data.map(e => e.name).join(', ')}`);
        // const name = `${data.map(e => e.name).join(', ')}`
    } catch (err) {
        console.error(err);
        alert('Failed to get random employees');
    }
}

//for delete all data 

async function resetDatabase() {
    try {
      const response = await fetch('/api/reset', { method: 'POST' });
      if (!response.ok) {
        throw new Error('Failed to reset database');
      }
      const result = await response.json();
    //   alert(result.message);
      location.reload(); // Reload the page to fetch updated data
    } catch (error) {
      console.error('Error resetting database:', error);
    //   alert('An error occurred while resetting database');
    }
  }