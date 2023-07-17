function displayAbout() {
    // Start About Content 
    var element = document.getElementById('about');
    element.classList.replace('navbar-item', 'navbar-item-selected')
    
    // Left Div
    var leftDiv = document.createElement('div');
    leftDiv.classList.add('about_div_left');

    // (Intro - Name) H1
    var h1 = document.createElement('h1');
    h1.textContent = "Hi, I'm Thanh Kha.";

    // (Intro - Title) H3
    var h3 = document.createElement('h3');
    h3.textContent = "Sr Software Engineer";

    // Append Intro - Name, Title
    leftDiv.appendChild(h1);
    leftDiv.appendChild(h3);

    // (Intro - Greeting Message) P
    var p1 = document.createElement('p');
    p1.textContent = "I was born and raised in Massachusetts and now living in Japan for my work. "
    + "I'm also a U.S. Marine Veteran, having served four years and stationed at Camp Lejeune, North Carolina. "
    + "Following my military service, I pursued a B.S. degree in Computer Science at the University of Rochester. "
	+ "Currently, I am employed as a Senior Software Engineer at Lockheed Martin, Space. "
    + "In my current role, I am leading a team in Japan to deliver our LTE-over-space satellite system. "
	+ "I have a passion for coding, working with various technologies, and working with others to accomplish the same goals and to learn from one another. "
    + "I wish to continue to grow in the technology industry and become an awesome Engineer. ";

    // (Intro - Greeting Contact) P
    var p2 = document.createElement('p');
    p2.textContent = "Please feel free to reach out to me with any questions.";

    // Append Intro - Greeting Message
    leftDiv.appendChild(p1);
    leftDiv.appendChild(p2);

    // Append Left Div
    mainframe.appendChild(leftDiv);
    
    // Right Div
    var rightDiv = document.createElement('div');
    rightDiv.classList.add('about_div_right');

    // (Profile Picture) IMG
    var image = document.createElement('img');
    image.src = "/images/profile.jpg"
    image.classList.add('about_image')

    // Append Image
    rightDiv.appendChild(image);

    // Append Right Div
    mainframe.appendChild(rightDiv);

}