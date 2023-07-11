var mainframe;

document.addEventListener("DOMContentLoaded", function() {
    // Initialize Frames
    mainframe = document.getElementById('content-frame'); 

    // Start Content
    var element = document.getElementById('about');
    element.classList.replace('navbar-item', 'navbar-item-selected')
    
    const data = sessionStorage.getItem('selection');
    if (data != null) 
        navbarSelect(data)
    else
        displayAbout();
});

function navbarSelect(selection) {
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
            sessionStorage.setItem('selection', 'about');
            break;
        case 'experiences':
            displayExperiences();
            sessionStorage.setItem('selection', 'experiences');
            break;
        case 'projects':
            displayProjects();
            sessionStorage.setItem('selection', 'projects');
            break;
        case 'contact':
            displayContact();
            sessionStorage.setItem('selection', 'contact');
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
    p1.textContent = "I am currently employed at Lockheed Martin, Space, where I have the opportunity to work on cutting-edge technology. "
        + "I have always had a passion for working with technology, and I feel incredibly grateful to be part of the team involved in developing new breakthroughs. "
        + "I've been in Japan since early 2022, working on delivering the first LTE-Over-Space Satellite system. "
        + "It's an amazing feeling to see many years of dedicated work prior to now seeing the system in action that will "
        + "serve a whole country and save lives. ";
    leftDiv.appendChild(p1);

    var p2 = document.createElement('p');
    p2.textContent = "Please feel free to reach out to me with any questions.";
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

        // Append Headers to Header Divx    
        headerDiv.appendChild(h1);
        headerDiv.appendChild(h3);

        // Append Header Div to Center Div
        centerDiv.appendChild(headerDiv);

        // (EXP-1 - Lockheed Martin) Image
        var image = document.createElement('img');
        image.src = "/images/utsunomiya.jpg";
        image.classList.add('experiences_image');

        // Append image 
        centerDiv.appendChild(image);

        // (EXP-1 - Lockheed Martin) Description
        var descDiv = document.createElement('div');
        descDiv.classList.add('experiences_desc_div');
        var desc1 = document.createElement('p');
        desc1.textContent = "I'm currently in Japan, leading the test plans and executions for the delivery of our product. "
            + "Every day is always a challenge to satisfy the customer and execute the plan as quickly and efficiently as possible. "
            + "The team I lead consists mostly of new members whom I train to operate the system and guide in executing tasks. "
            + "I am considered the SME (Subject-Matter Expert) on the UE (User Equipment) and the overall system, "
            + "so I directly handle the customers' daily technical questions. "
            + " The best part of all this is being able to travel all around Japan sharing this experience with others. "
        var desc2 = document.createElement('p');
        desc2.textContent = "I automate many of the repetitive tasks I encounter on a daily basis by creating software tools. "
            + "Since our system is Linux-based, automating system operations is typically accomplished through bash or Python scripts. "
            + "Another tool I developed, called 'directors_tool,' is specifically designed for automating daily tasks and generating summaries. "
            + "I have shared this tool on my Projects page. "
            + "'directors_tool' saves me a significant amount of time when documenting tasks and allows me to easily track their statuses. "
            + "Building various tools has become essential to manage the numerous moving parts involved in my everyday responsibilities." 
        
        // Append description 
        descDiv.appendChild(desc1);
        descDiv.appendChild(desc2);
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