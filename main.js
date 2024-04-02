
// Function for pagination
function handlePagination (pageNumber) {
    let currentElement, pastElement;
    if(pageNumber === 1) {
      currentElement = document.getElementById(`c-our-pepople__section_page-${pageNumber}`);
      pastElement = document.getElementById(`c-our-pepople__section_page-2`);
    }
    else {
      currentElement = document.getElementById(`c-our-pepople__section_page-${pageNumber}`);
      pastElement = document.getElementById(`c-our-pepople__section_page-1`);
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