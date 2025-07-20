
# PSC Impact Stories

## Overview
This is a microsite showcasing featured impact stories from the Pittsburgh Supercomputing Center (PSC). Users can filter stories by tags and submit their own stories through a form.

## Setup Instructions

### Clone the repository
git clone https://github.com/your-username/psc-impact-stories.git
cd psc-impact-stories

### Open in browser (no dependencies required)
open index.html

### Or serve locally
python3 -m http.server 8000
visit http://localhost:8000

## Dependencies

This project uses [Bootstrap 5](https://getbootstrap.com/) and vanilla JavaScript, so no local dependencies are required.


## Data

Stories are loaded dynamically from the `data/stories.json` file using the Fetch API. 


## Design and Technical Choices

### Technology
- HTML5, CSS3 (with Bootstrap), and vanilla JavaScript.
- Lightweight, no build tools or frameworks.
- CDN delivery for external dependencies

### Accessibility
- Semantic HTML5 elements like `<main>`, `<section>`, and `<nav>` are used for screen reader compatibility.
- ARIA labels improve form accessibility.
- All elements are keyboard-navigable.
- High-contrast text over image overlays ensures readability.
- Images have short alt text

### Responsiveness
- Built with Bootstrap for responsive design
- Layout adapts to a variety of screen sizes (mobile, tablet, desktop).
- Form fields stack neatly on smaller screens.

### Interactivity
- Stories are dynamically rendered using JavaScript.
- Tags allow filtering stories by category.
- The submission form includes basic validation and logs to console.

### Visual Design
- The homepage uses a hero image with a semi-transparent overlay for contrast.
- Clean card-based layout for stories.
- Used colors and typography based on PSC Style Guide.

## Future Improvements
- Lazy loading (all images load immediately)
- Backend integration for form submission and story storage.
- Animation effects for a smoother experience.
- Full accessibility audit and enhancements. 
- Font size controls for users with vision impairments.
- Enhanced keyboard navigation such as arrow key navigation for filters.
- Focus states.
- Search feature for stories.
- Show when a tag is used for filtering.


