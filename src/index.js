const app = {
  init: function () {
    app.getHomePage();
    document.body.classList.toggle("activeNav");
    document.getElementById("home").addEventListener("click", app.getHomePage);
    document
      .getElementById("about")
      .addEventListener("click", app.getAboutPage);
    document
      .getElementById("skills")
      .addEventListener("click", app.getSkillsPage);
    document
      .getElementById("projects")
      .addEventListener("click", app.getProjectsPage);
    document
      .getElementById("contact")
      .addEventListener("click", app.getContactPage);
  },

  getHomePage: () => {
    const parent = document.querySelector(".content");
    const template = document.getElementById("home-template");
    const clone = template.content.cloneNode(true);
    document.body.classList.toggle("activeNav");
    const old = document.querySelector('section');
    if (old) old.remove();
    parent.appendChild(clone);
  },

  getAboutPage: (event) => {
    event.preventDefault();
    const parent = document.querySelector(".content");
    const template = document.getElementById("about-template");
    const clone = template.content.cloneNode(true);
    document.body.classList.toggle("activeNav");
    const old = document.querySelector('section');
    old.remove();
    parent.appendChild(clone);
  },

  getSkillsPage: (event) => {
    event.preventDefault();
    const parent = document.querySelector(".content");
    console.log(parent);
    const template = document.getElementById("skills-template");
    const clone = template.content.cloneNode(true);
    document.body.classList.toggle("activeNav");
    const old = document.querySelector('section');
    old.remove();
    parent.appendChild(clone);
  },

  getProjectsPage: (event) => {
    event.preventDefault();
    const parent = document.querySelector(".content");
    const template = document.getElementById("projects-template");
    const clone = template.content.cloneNode(true);
    document.body.classList.toggle("activeNav");
    const old = document.querySelector('section');
    old.remove();
    parent.appendChild(clone);
  },

  getContactPage: (event) => {
    event.preventDefault();
    const parent = document.querySelector(".content");
    const template = document.getElementById("contact-template");
    const clone = template.content.cloneNode(true);
    document.body.classList.toggle("activeNav");
    const old = document.querySelector('section');
    old.remove();
    parent.appendChild(clone);
  },
};

document.addEventListener("DOMContentLoaded", app.init);
