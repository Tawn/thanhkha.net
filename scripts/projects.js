function displayProjects(project) {
    // Main Div
    var mainDiv = document.createElement('div');
    mainDiv.classList.add('experiences_main_div');

    // Center Div
    var centerDiv = document.createElement('div');
    centerDiv.classList.add('experiences_center_div');

    if (project == 'projects' || project == 'github') {
        // Title Header
        var header = document.createElement('h1');
        header.classList.add('experiences_header_div');
        header.textContent = "Github";

        centerDiv.appendChild(header);

        // Github
        var githubDiv = document.createElement('div');
        githubDiv.classList.add('projects_github_div');
        var githubH4 = document.createElement('h4');
        githubH4.textContent = "Github:"
        var githubA = document.createElement('a');
        githubA.href = "https://github.com/Tawn";
        githubA.textContent = "https://Github.com/Tawn";

        // Append Github
        githubDiv.appendChild(githubH4);
        githubDiv.appendChild(githubA);
        centerDiv.appendChild(githubDiv);
        
    } else if (project == 'director') {

        // (Project-1 - Director's Tool) Header Div
        var headerDiv = document.createElement('div');
        headerDiv.classList.add('experiences_header_div');

        // (Project-1 - Director's Tool) Header
        var h1 = document.createElement('h1');
        h1.textContent = "Directors Tool";

        // Append Headers to Header Div  
        headerDiv.appendChild(h1);

        // Append Header Div to Center Div
        centerDiv.appendChild(headerDiv);

        // (Project-1 - Director's Tool) Image
        var image = document.createElement('img');
        image.src = "/images/input.png";
        image.classList.add('experiences_image');

        // Append image 
        centerDiv.appendChild(image);

        // (Project-1 - Director's Tool) Description
        var descDiv = document.createElement('div');
        descDiv.classList.add('experiences_desc_div');
        var desc1 = document.createElement('p');
        desc1.textContent = "Being a Test Director requires a lot of work to be done. "
        + "This includes managing the test team, planning and coordination, answering customer's question, and lots and lots of documentations. "
        + "With this amount of responsibilities, I created this tool to ease this processes. "
        + "Without my tool, I can easily lose track of things, so it's essential I create tools like this to facilitate the Test Director role. "

        // Append description 
        descDiv.appendChild(desc1);
        centerDiv.appendChild(descDiv);

        // (Project-1 - Director's Tool) Image2
        var image2 = document.createElement('img');
        image2.src = "/images/output.png";
        image2.classList.add('experiences_image');

        // Append Image2
        centerDiv.appendChild(image2);

        var descDiv2 = document.createElement('div');
        descDiv2.classList.add('experiences_desc_div');
        var desc2 = document.createElement('p');
        desc2.textContent = "The main feature of this tool is its automatic formatting capability, "
        + "which facilitates documentation of various activities taking place at the customer's facility. "
        + "It efficiently tracks tasks, team members, issues, and events as they occur. "
        + "All inputs are then automatically summarized for end-of-day wrap-up sessions with the customer, "
        + "meetings with the home (US) team, and management documentation. "
        + "The output can be easily copied and pasted into a word document, "
        + "allowing for convenient selection of the entire summary and the use of bullet points or numbering to enhance readability.";

        // Append Description 2
        descDiv2.appendChild(desc2);
        centerDiv.appendChild(descDiv2);

        // (Project-1 - Director's Tool) Image3
        var image3 = document.createElement('img');
        image3.src = "/images/word-format.png";
        image3.classList.add('experiences_image');

        // Append Image3
        centerDiv.appendChild(image3);

        var descDiv3 = document.createElement('div');
        descDiv3.classList.add('experiences_desc_div');
        var desc3 = document.createElement('p');
        desc3.textContent = "This tool was developed using the Python programming language with object-oriented programming (OOP). "
        + "The Model-View-Controller (MVC) design pattern was utilized to separate the implementation, display, and data components. "
        + "The GUI (Graphical User Interface) was created using the Tkinter library, while the persistent data storage was achieved using the SQLite library."

        // Append Description 3
        descDiv3.appendChild(desc3);
        centerDiv.appendChild(descDiv3);
    }

    // Append Center Div
    mainDiv.appendChild(centerDiv)

    // Append Main Div
    mainframe.appendChild(mainDiv);
    
}