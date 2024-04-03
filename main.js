// An event listener for toggling the home menu at index page
function handleToggleIndexClick () {
  document.getElementById('hamburger-icon-index').classList.toggle("is-show-icon-index");
  document.getElementById('close-icon-index').classList.toggle("is-show-icon-index");
  document.getElementById('nav-link-wrapper-index') && document.getElementById('nav-link-wrapper-index').classList.toggle("hide-top-menu");
}

// Function for pagination
function handlePagination (pageNumber) {
  debugger
    let currentElement, pastElement;
    if(pageNumber === 1) {
      currentElement = document.getElementById(`c-our-people__section_page-${pageNumber}`);
      pastElement = document.getElementById(`c-our-people__section_page-2`);
    }
    else {
      currentElement = document.getElementById(`c-our-people__section_page-${pageNumber}`);
      pastElement = document.getElementById(`c-our-people__section_page-1`);
    }
  
    pastElement.style.display = "none";
    currentElement.style.display = "flex";
  }
  
//  Function for pagination in Testimonials
  function handleTestimonialPagination (pageNumber) {
    let currentElement, pastElement;
    if(pageNumber === 1) {
      currentElement = document.getElementById(`c-our-testimonial__section_page-${pageNumber}`);
      pastElement = document.getElementById(`c-our-testimonial__section_page-2`);
    }
    else {
      currentElement = document.getElementById(`c-our-testimonial__section_page-${pageNumber}`);
      pastElement = document.getElementById(`c-our-testimonial__section_page-1`);
    }
  
    pastElement.style.display = "none";
    currentElement.style.display = "flex";
  }

  function handleStepVisibility (step) {
    document.getElementById(`gift-step-${step}-plus`).classList.toggle(`hide-step-${step}`);
    document.getElementById(`gift-step-${step}-minus`).classList.toggle(`hide-step-${step}`);
    document.getElementById(`step-des-${step}`).classList.toggle(`hide-step-${step}`);
  }