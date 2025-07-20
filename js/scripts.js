document.addEventListener("DOMContentLoaded", function() {

  let allStories = [];
  
  loadStories();
  
  function loadStories() {
      fetch('data/stories.json')
          .then(function(response) {
              return response.json();
          })
          .then(function(stories) {
              allStories = stories;
              displayStories(allStories);
              addFilterButtons();
          })
          .catch(function(error) {
              console.log('Error loading stories:', error);
          });
  }
  
  function displayStories(storiesToShow) {
      const container = document.getElementById('story-container');
      container.innerHTML = '';
    
      for (let i = 0; i < storiesToShow.length; i++) {
          const story = storiesToShow[i];
          const storyHTML = renderStory(story);
          container.innerHTML = container.innerHTML + storyHTML;
      }
  }
  
  function renderStory(story) {
      // Put tags in string
      let tagsText = '';
      for (let i = 0; i < story.tags.length; i++) {
          if (i > 0) {
              tagsText = tagsText + ', ';
          }
          tagsText = tagsText + story.tags[i];
      }
      
      const html = 
          '<div class="col-12">' +
              '<div class="card mb-5">' +
                  '<div class="row g-0">' +
                      '<div class="col-md-4 img-container">' +
                          '<img src="' + story.image + '" class="img-fluid img" alt="' + story.alt + '">' +
                          '<div class="img-overlay"></div>' +
                      '</div>' +
                      '<div class="col-md-8">' +
                          '<div class="card-body">' +
                              '<h3 class="article-headline">' + story.title + '</h3>' +
                              '<p class="article-body">' + story.description + '</p>' +
                              '<p class="article-details">' + story.researcher + '</p>' +
                              '<div class="article-tag">' + tagsText + '</div>' +
                          '</div>' +
                      '</div>' +
                  '</div>' +
              '</div>' +
          '</div>';
          
      return html;
  }
  
  function addFilterButtons() {
      const buttons = document.querySelectorAll('.tag');  
      for (let i = 0; i < buttons.length; i++) {
          const button = buttons[i];
          
          button.addEventListener('click', function() {
              filterClick(button);
          });
      }
  }
 
  function filterClick(clickedButton) {
      const selectedTag = clickedButton.getAttribute('data-tag');

      if (selectedTag === 'all') {
          displayStories(allStories);
      } else {
          const filteredStories = filterStoriesByTag(allStories, selectedTag);
          displayStories(filteredStories);
      }
  }
  
  function filterStoriesByTag(stories, tagToFind) {
      const matchingStories = [];
      for (let i = 0; i < stories.length; i++) {
          const story = stories[i];
          if (storyHasTag(story, tagToFind)) {
              matchingStories.push(story);
          }
      }
      
      return matchingStories;
  }
  
  function storyHasTag(story, tagToFind) {
      for (let i = 0; i < story.tags.length; i++) {
          if (story.tags[i] === tagToFind) {
              return true;
          }
      }
      return false;
  }
  
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