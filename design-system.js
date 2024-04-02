
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