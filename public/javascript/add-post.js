async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value;
    const author= document.querySelector('#post-author').value;
    const smallImageURL = document.querySelector('#post-image').value;
    const pricePerWeek= document.querySelector('#post-pricePerWeek').value;

    const response = await fetch(`/api/rent`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        author,
        smallImageURL,
        pricePerWeek
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);