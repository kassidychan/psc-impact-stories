document.addEventListener("DOMContentLoaded", function() {
  fetch('data/stories.json')
    .then(response => response.json())  // Convert the response to JSON
    .then(stories => {
      function showStories(storiesToShow) {
        const container = document.getElementById('story-container');
        container.innerHTML = '';

        // Loop through each story and create a card
        storiesToShow.forEach(story => {
          const card = document.createElement('div'); 
          card.classList.add('col-12'); 

          card.innerHTML = `
          <div class="card mb-5">
            <div class="row g-0">
              <div class="col-md-4 img-container">
                <img src="${story.image}" class="img-fluid img" alt="${story.alt}">
                 <div class="img-overlay"></div>
              </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="article-headline">${story.title}</h5>
                    <p class="article-body">${story.description}</p>
                    <p class="article-details">${story.researcher}</p>
                    <div class="article-tag">
                      ${story.tags.join(', ')}
                    </div>
                  </div>
                </div>
            </div>
          </div>
          `;

          // Add the card to the container
          container.appendChild(card);
        });
      }

      showStories(stories);

      // Filter buttons and add event listeners
      const buttons = document.querySelectorAll('.tag');
      buttons.forEach(button => {
        button.addEventListener('click', function() {
          const tag = this.getAttribute('data-tag');

          if (tag === 'all') {
            showStories(stories);
          } else {
            // Filter stories by tag
            const filteredStories = stories.filter(story => story.tags.includes(tag));
            showStories(filteredStories);
          }
        });
      });
    })
    .catch(error => {
      console.error('Error loading stories:', error);
    });
});

// Fade in
const options = {
  threshold: 0.3 
};
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
    }
  });
};
const observer = new IntersectionObserver(callback, options);
const animatedElements = document.querySelectorAll(".fade-in");
animatedElements.forEach(element => observer.observe(element));



// Form submission
document.getElementById('submitForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const storyTitle = document.getElementById('storyTitle').value;
  const description = document.getElementById('description').value;

  if (!name || !email || !storyTitle || !description) {
    alert('Please fill out all the fields.');
    return;
  }

  const isEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!isEmail.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  console.log('Form submitted!');
  console.log({
    name,
    email,
    storyTitle,
    description
  });

  document.getElementById('submitForm').reset();

  alert('Your story has been submitted!');
});
