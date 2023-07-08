var mainframe;

document.addEventListener("DOMContentLoaded", function() {
    // Initialize Frames
    mainframe = document.getElementById('content-frame'); 

    // Start Content
    var element = document.getElementById('about');
    element.classList.replace('navbar-item', 'navbar-item-selected')
    displayAbout();
});

function navbarSelect(event, selection) {
    // Get all navbar items
    var navItems = document.querySelectorAll('nav ul li a');
    // Clear Selection
    navItems.forEach(function(item) {
        if(item.textContent.toLocaleLowerCase() == selection) 
            item.classList.replace('navbar-item', 'navbar-item-selected');
        else 
            item.classList.replace('navbar-item-selected', 'navbar-item');
    });
    display(selection);
}

function display(selection) {
    // Clear Main Frame
    mainframe.innerHTML = '';
    switch (selection) {
        case 'about':
            displayAbout();
            break;
        case 'experiences':
            displayExperiences();
            break;
        case 'projects':
            displayProjects();
            break;
        case 'contact':
            displayContact();
            break;
        default:
            break;
    }
}

function displayAbout() {
    // Left Div
    var leftDiv = document.createElement('div');
    leftDiv.classList.add('about_div_left');
    var header = document.createElement('h1');
    header.textContent = "Hi, I'm Thanh (Tawn) Kha. I'm a Sr Software Engineer.";
    leftDiv.appendChild(header);

    var paragraph = document.createElement('p');
    paragraph.textContent = "I'm currently working for Lockheed Martin, Space. "
        + "I've been in Japan since early of 2022 delivering the first LTE-Over-Space Satellite system. "
        + "I enjoy working in a team environment, developing (code), and taking on new challenges.";
    leftDiv.appendChild(paragraph);

    var paragraph2 = document.createElement('p');
    paragraph2.textContent = "My plans for the future are open. Please don't hesitate to reach out to me!";
    leftDiv.appendChild(paragraph2);

    // Append Left Div
    mainframe.appendChild(leftDiv);
    
    // Right Div
    var rightDiv = document.createElement('div');
    rightDiv.classList.add('about_div_right');
    var image = document.createElement('img');
    image.src = "/images/profile.jpg"
    image.classList.add('about_image')
    rightDiv.appendChild(image);
    mainframe.appendChild(rightDiv);

}
function displayExperiences() {
    var header = document.createElement('h1');
    header.textContent = "Experiences";
    mainframe.appendChild(header)
}
function displayProjects() {
    var header = document.createElement('h1');
    header.textContent = "Projects";
    mainframe.appendChild(header)
}
function displayContact() {
    var header = document.createElement('h1');
    header.textContent = "Contact";
    mainframe.appendChild(header)
}