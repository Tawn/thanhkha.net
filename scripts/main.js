var mainframe;

// Japan Real-Time
setInterval(getJST, 1000); // Call getJST func every second
async function getJST() { // Display Japan Time
    fetch("https://worldtimeapi.org/api/timezone/Japan")
    .then(response => response.json())
    .then(data => {
        const today = new Date(Date.parse(data.datetime));
        const time = today.toLocaleTimeString('en-US', { hour12: true });
        const displayTime = document.getElementById('navbar-center');
        displayTime.textContent = "Japan Time (JST): " + time;
    })
    .catch(error => {
        console.log('Error:', error);
    });
}

// Webpage Start
document.addEventListener("DOMContentLoaded", function() {
    // Main Content Frame
    mainframe = document.getElementById('content-frame'); 

    // Restore Session
    const data = sessionStorage.getItem('selection');
    if (data != null) 
        navbarSelect(data);
    else // Display About if no stored data
        displayAbout();
    
});

function navbarSelect(selection) {

    // If a project was selected
    if (selection == 'github' || selection == 'director' || selection == 'webpage' || selection == 'projects') {
        sessionStorage.setItem('project', selection);
        selection = 'projects'
    }

    // Get all navbar items
    const navItems = document.querySelectorAll('nav ul li a');
    // Set Navbar Selection
    navItems.forEach(function(item) {
        if(item.textContent.toLocaleLowerCase() == selection) 
            item.classList.replace('navbar-item', 'navbar-item-selected');
        else // Unselect Session
            item.classList.replace('navbar-item-selected', 'navbar-item');
    });
    display(selection);
}

function display(selection) {
    // Clear Main Frame
    mainframe.innerHTML = '';

    // Set Restore Session
    if (selection == 'projects') {
        var project = sessionStorage.getItem('project');
        sessionStorage.setItem('selection', project);
    } else {
        sessionStorage.setItem('selection', selection);
    }

    // Display Selected Content
    switch (selection) {
        case 'about':
            displayAbout();
            break;
        case 'experiences':
            displayExperiences();
            break;
        case 'projects':
            displayProjects(project);
            break;
        case 'contact':
            displayContact();
            break;
        default:
            break;
    }
}

