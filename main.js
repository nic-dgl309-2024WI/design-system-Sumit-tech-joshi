// An event listener for toggling the home menu at index page
function handleToggleIndexClick () {
  document.getElementById('hamburger-icon-index').classList.toggle("is-show-icon-index");
  document.getElementById('close-icon-index').classList.toggle("is-show-icon-index");
  document.getElementById('nav-link-wrapper-index') && document.getElementById('nav-link-wrapper-index').classList.toggle("hide-top-menu");
}

// Function for pagination
function handlePagination (pageNumber) {
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

const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("c-our-people__section_page-1");
const listItems = paginatedList.querySelectorAll("article");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const paginationLimit = 4;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();
  
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.classList.add("u-hide");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("u-hide");
    }
  });
};

window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});
