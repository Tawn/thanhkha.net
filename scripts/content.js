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
    var h1 = document.createElement('h1');
    h1.textContent = "Hi, I'm Thanh Kha.";
    leftDiv.appendChild(h1);
    var h3 = document.createElement('h3');
    h3.textContent = "Sr Software Engineer";
    leftDiv.appendChild(h3);

    var p1 = document.createElement('p');
    p1.textContent = "I'm currently working for Lockheed Martin, Space. "
        + "I've always enjoyed working on technology and I'm very grateful to be working on new breakthrough technology! "
        + "I'm currently in Japan since early of 2022 delivering the first LTE-Over-Space Satellite system. ";
    leftDiv.appendChild(p1);

    var p2 = document.createElement('p');
    p2.textContent = "Please don't hesitate to reach out with any questions.";
    leftDiv.appendChild(p2);

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

        // Main Div
        var mainDiv = document.createElement('div');
        mainDiv.classList.add('experiences_main_div');

        // Center Div
        var centerDiv = document.createElement('div');
        centerDiv.classList.add('experiences_center_div');

        // Header Div
        var headerDiv = document.createElement('div');
        headerDiv.classList.add('experiences_header_div');

        // (EXP-1 - Lockheed Martin) Header
        var h1 = document.createElement('h1');
        h1.textContent = "Lockheed Martin, Space";
        var h3 = document.createElement('h3');
        h3.textContent = "Sr Software Engineer (2019 - Current)";

        // Append Headers to Header Div
        headerDiv.appendChild(h1);
        headerDiv.appendChild(h3);

        // Append Header Div to Center Div
        centerDiv.appendChild(headerDiv);

        // (EXP-1 - Lockheed Martin) Image
        var image = document.createElement('img');
        image.src = "/images/utsunomiya.jpg";
        image.classList.add('experiences_image');

        // (EXP-1 - Lockheed Martin) Description
        var descDiv = document.createElement('div');
        descDiv.classList.add('experiences_desc_div');
        var description = document.createElement('p');
        description.textContent = "I'm currently in Japan, leading the test plans and executions for the delivery of our product. "
            + "Everyday is always a challenge to satisfy the customer and execute the plan as quickly and efficiently as possible. "
            + "The team I lead are mostly newjoins that I train to operate the system and instruct for executions. "
            + "The best part of all this is being able to travel all around Japan and having this awesome experience with others. "
        
        // Append image 
        centerDiv.appendChild(image);
        // Append description 
        descDiv.appendChild(description);
        centerDiv.appendChild(descDiv);

        // Append Center Div
        mainDiv.appendChild(centerDiv)
        // Append Main Div
        mainframe.appendChild(mainDiv);
        
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