// An event listener for toggling the home menu at index page
function handleToggleIndexClick() {
  document
    .getElementById("hamburger-icon-index")
    .classList.toggle("is-show-icon-index");
  document
    .getElementById("close-icon-index")
    .classList.toggle("is-show-icon-index");
  document.getElementById("nav-link-wrapper-index") &&
    document
      .getElementById("nav-link-wrapper-index")
      .classList.toggle("hide-top-menu");
}

function handleStepVisibility(step) {
  document
    .getElementById(`gift-step-${step}-plus`)
    .classList.toggle(`hide-step-${step}`);
  document
    .getElementById(`gift-step-${step}-minus`)
    .classList.toggle(`hide-step-${step}`);
  document
    .getElementById(`step-des-${step}`)
    .classList.toggle(`hide-step-${step}`);
}

const paginationNumbers = document.getElementById(
  "our-story-pagination-numbers"
);
const paginatedList = document.getElementById("c-our-people__section_page-1");
const listItems = paginatedList.querySelectorAll("article");
const nextButton = document.getElementById("story-next-button");
const prevButton = document.getElementById("story-prev-button");

const paginationTestinonialNumbers = document.getElementById(
  "testimonial-pagination-number"
);
const paginatedTestinonialList = document.getElementById(
  "c-testimonial__section_page"
);
const listtestinonialItems =
  paginatedTestinonialList.querySelectorAll("article");
const nexttestinonialButton = document.getElementById(
  "testinonial-next-button"
);
const prevtestinonialButton = document.getElementById(
  "testinonial-prev-button"
);

const paginationLimit = 3;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const pageTestimonailCount = Math.ceil(
  listtestinonialItems.length / paginationLimit
);
let currentTestimonailPage = 1;

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

const handlePageTestimonialButtonsStatus = () => {
  if (currentTestimonailPage === 1) {
    disableButton(prevtestinonialButton);
  } else {
    enableButton(prevtestinonialButton);
  }

  if (pageTestimonailCount === currentTestimonailPage) {
    disableButton(nexttestinonialButton);
  } else {
    enableButton(nexttestinonialButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".story-pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const handleTestimonialActivePageNumber = () => {
  document
    .querySelectorAll(".testimonial-pagination-number")
    .forEach((button) => {
      button.classList.remove("active");
      const pageIndex = Number(button.getAttribute("page-index"));
      if (pageIndex == currentTestimonailPage) {
        button.classList.add("active");
      }
    });
};

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "story-pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const appendtestimonialPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "testimonial-pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationTestinonialNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const getTestimonialPaginationNumbers = () => {
  for (let i = 1; i <= pageTestimonailCount; i++) {
    appendtestimonialPageNumber(i);
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

const setTestimonialCurrentPage = (pageNum) => {
  currentTestimonailPage = pageNum;

  handleTestimonialActivePageNumber();
  handlePageTestimonialButtonsStatus();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;
  
  listtestinonialItems.forEach((item, index) => {
    item.classList.add("u-hide");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("u-hide");
    }
  });
};

window.addEventListener("load", () => {
  getPaginationNumbers();
  getTestimonialPaginationNumbers();
  setCurrentPage(1);
  setTestimonialCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  prevtestinonialButton.addEventListener("click", () => {
    setTestimonialCurrentPage(currentTestimonailPage - 1);
  });

  nexttestinonialButton.addEventListener("click", () => {
    setTestimonialCurrentPage(currentTestimonailPage + 1);
  });

  document.querySelectorAll(".story-pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });

  document
    .querySelectorAll(".testimonial-pagination-number")
    .forEach((button) => {
      const pageIndex = Number(button.getAttribute("page-index"));

      if (pageIndex) {
        button.addEventListener("click", () => {
          setTestimonialCurrentPage(pageIndex);
        });
      }
    });
});
