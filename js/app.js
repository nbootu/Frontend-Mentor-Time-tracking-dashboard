'use strict';

// Set data variables
const data = {
  daily: {
    current: [5, 1, 0, 1, 1, 0],
    previous: [7, 2, 1, 1, 3, 1],
  },
  weekly: {
    current: [32, 10, 4, 4, 5, 2],
    previous: [36, 8, 7, 5, 10, 2],
  },
  monthly: {
    current: [103, 23, 13, 11, 21, 7],
    previous: [128, 29, 19, 18, 23, 11],
  },
};

// Set timespan variable
let timespan = 'weekly';

// Get navigation
const nav = document.querySelector('nav');

// OnClick event
nav.addEventListener('click', (e) => {
  // Guard clause
  if (!e.target.dataset.timespan) return;

  // Remove active class from link
  const activeLink = nav.querySelector('.active');
  activeLink.classList.remove('active');

  // Add active class to clicked link
  e.target.classList.add('active');

  // Set timespan variable to data attribute
  timespan = e.target.dataset.timespan;

  // Get all H2 and corresponding spans
  const cardHours = document.querySelectorAll('h2');
  const cardLastHours = document.querySelectorAll('h2 + span');

  // Manipulate data in HTML
  data[timespan].current.forEach((elem, idx) => {
    const content = `${elem}hrs`;
    cardHours[idx].innerText = content;
  });

  data[timespan].previous.forEach((elem, idx) => {
    const content = `Last Week - ${elem}hrs`;
    cardLastHours[idx].innerText = content;
  });
});
