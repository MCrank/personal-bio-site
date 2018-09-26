const projects = [
  {
    title: 'Cool Project',
    screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux'
  },
  {
    title: 'Cool Project',
    screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux'
  }
];

const printToDom = (stringToPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};

const createProjectCards = () => {
  let newString = '';
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].available == true) {
      newString += `<h2>${projects[i].title}</h2>`;
      newString += `<img src="${projects[i].screenshot}"></>`;
      newString += `<p>${projects[i].description}</p>`;
      newString += `<p>${projects[i].technologiesUsed}</p>`;
      newString += `<a href="${projects[i].url}" style="display:block">Project Site</a>`;
      newString += `<a href="${projects[i].githubUrl}" style="display:block">GitHub Link</a>`;
    }
  }

  printToDom(newString, 'projectsPage');
};

// Load the proper page
const pageControl = () => {
  // Get Id of element clicked
  const srcElementId = event.srcElement.id;
  const contentPages = document.getElementsByClassName('fullPage');
  for (let i = 0; i < contentPages.length; i++) {
    const element = contentPages[i];
    // If the element has a class that matches the Nav Button link show it elese hide the rest
    if (element.classList.contains(srcElementId)) {
      element.style.display = 'unset';
    } else {
      element.style.display = 'none';
    }
  }
};

const registerEvents = () => {
  const navButtons = document.getElementsByClassName('navBarButtons');
  for (let i = 0; i < navButtons.length; i++) {
    const element = navButtons[i];
    document.getElementById(element.id).addEventListener('click', pageControl);
  }
};

document.onload = registerEvents();
createProjectCards();
