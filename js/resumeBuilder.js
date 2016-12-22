/*
This is empty on purpose! Your code to build the resume will go here.
 */
//bio section---
var data = '%data%';
//bio section---
var bio = {
    "name": "Abha Kabra",
    "role": "Web-developer",
    "contacts": {
        "mobile": "91-99239-49491 ",
        "email": "kabraabha@gmail.com ",
        "github": "https://github.com/abha08 ",
        "linkedIn": "www.linkedin.com/in/abha-kabra ",
        "location": "Jaipur(Rajasthan)   "
    },
    "welcomeMessage": "I am an enthusiastic and hard-working person.",
    "skills": ["Front-end developer", "Programmer", "Writer", "Sketcher"],
    "biopic": "images/biopic.jpg"
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $("#header").append(formattedName, formattedRole);

    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    $("#header, #footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    $("#header, #footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    $("#header, #footerContacts").append(formattedGithub);

    var formattedLinkedIn = HTMLlinkedIn.replace(data, bio.contacts.linkedIn);
    $("#header, #footerContacts").append(formattedLinkedIn);

    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#header, #footerContacts").append(formattedLocation);

    var formattedPic = HTMLbioPic.replace(data, bio.biopic);
    $("#header").append(formattedPic);

    var formattedMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").append(formattedMessage);

    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(i) {
        var formattedSkills = HTMLskills.replace(data, i);
        $("#header").append(formattedSkills);
    });
};
bio.display();
//Work Experiences----
var work = {
    "jobs": [{
            "employer": "Udacity",
            "title": "Course Developer",
            "location": "Mountain View, CA",
            "dates": "Feb 2014 - Current",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        }, {
            "employer": "LearnBIG",
            "title": "Software Engineer",
            "location": "Seattle, WA",
            "dates": "May 2013 - Jan 2014",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        }

    ]
};
work.display = function() {
    work.jobs.forEach(function(job) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
        var formattedTitle = HTMLworkTitle.replace(data, job.title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace(data, job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLoc = HTMLworkLocation.replace(data, job.location);
        $(".work-entry:last").append(formattedLoc);

        var formattedDescription = HTMLworkDescription.replace(data, job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};
work.display();

//project div---
var projects = {

    projects: {
        "title": "Online Portfolio",
        "dates": "2016",
        "description": "Builded a portfolio using css and html concepts through Udacity Nanodegree.",
        "images": ["images/project1.png", "images/project1.png"]
    }
};
projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    var formattedprojecttitle = HTMLprojectTitle.replace(data, projects.projects.title);
    $(".project-entry:last").append(formattedprojecttitle);

    var formattedDate = HTMLprojectDates.replace(data, projects.projects.dates);
    $(".project-entry:last").append(formattedDate);

    var formattedDescriptn = HTMLprojectDescription.replace(data, projects.projects.description);
    $(".project-entry:last").append(formattedDescriptn);

    projects.projects.images.forEach(function(exp) {
        var formattedImg = HTMLprojectImage.replace(data, exp);
        $(".project-entry:last").append(formattedImg);
    });
};
projects.display();

//education div--
var education = {
    "schools": [{
            "name": "Central Academy",
            "location": "Bhilwara",
            "degree": "X",
            "majors": ["Science", "Maths", "C"],
            "dates": "2010-11",
            "url": "www.CentralAcademy.com"
        }, {
            "name": "Central Academy",
            "location": "Bhilwara",
            "degree": "XI-XII",
            "majors": ["Science", "Maths", "C++"],
            "dates": "2012-14",
            "url": "www.CentralAcademy.com"
        }, {
            "name": "Jecrc College",
            "location": "Jaipur",
            "degree": "B.Tech",
            "majors": ["Computer Science"],
            "dates": "2014-18",
            "url": "www.jecrcFoundation.com"
        }

    ],
    "onlineCourses": [{
            "title": "Frontend NanoDegree",
            "school": "Udacity online portal",
            "dates": "2016",
            "url": "www.udacity.com"
        }

    ]
};
education.display = function() {
    education.schools.forEach(function(school) {

        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace(data, school.name);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedSchoolDegree = HTMLschoolDegree.replace(data, school.degree);
        $(".education-entry:last").append(formattedSchoolDegree);

        var formattedSchoolDates = HTMLschoolDates.replace(data, school.dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace(data, school.location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolMajors = HTMLschoolMajor.replace(data, school.majors);
        $(".education-entry:last").append(formattedSchoolMajors);
    });

    education.onlineCourses.forEach(function(course) {
        $(".education-entry:last").append(HTMLonlineClasses);
        var formattedCourseName = HTMLonlineTitle.replace(data, course.title);
        $(".education-entry:last").append(formattedCourseName);

        var formattedCourseSchool = HTMLonlineSchool.replace(data, course.school);
        $(".education-entry:last").append(formattedCourseSchool);

        var formattedCourseDates = HTMLonlineDates.replace(data, course.dates);
        $(".education-entry:last").append(formattedCourseDates);

        var formattedCourseLocation = HTMLonlineURL.replace(data, course.url);
        $(".education-entry:last").append(formattedCourseLocation);
    });
};
education.display();

//map div----
$("#mapDiv").append(googleMap);
