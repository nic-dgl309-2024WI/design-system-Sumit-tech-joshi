
// An event listener for toggling the sidebar menu in design system
function handleToggleClick () {
  document.getElementById('hamburger-icon').classList.toggle("is-show-icon");
  document.getElementById('close-icon').classList.toggle("is-show-icon");
  document.getElementById('sidebar-wrapper') && document.getElementById('sidebar-wrapper').classList.toggle("hide-sidebar-menu");
  document.getElementById('nav-link-wrapper') && document.getElementById('nav-link-wrapper').classList.toggle("hide-sidebar-menu");
}

// An event listener for toggling the home menu
function handleToggleHomeClick () {
  document.getElementById('hamburger-icon').classList.toggle("is-show-icon");
  document.getElementById('close-icon').classList.toggle("is-show-icon");
  document.getElementById('nav-link-wrapper') && document.getElementById('nav-link-wrapper').classList.toggle("hide-top-menu");
}


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