var bio = {};

bio.name = "Abdelaziz Elrashed";
bio.role = "Web Developer";
bio.contacts = {};
bio.contacts.mobile = "+966542348460";
bio.contacts.email = "aeemh.sdn@gmail.com";
bio.contacts.github = "vzool";
bio.contacts.twitter = "@vzool";
bio.contacts.location = "Riyadh, exit 7";
bio.contacts.welcomeMessage = "Welcome to my Resume";
bio.contacts.skills = ["PHP", "CSS", "C++", "VB.NET", "Micro-Computing"];
bio.contacts.biopic = "images/fry.jpg";

bio.display = function(){	
	
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	
	if(bio.contacts.skills.length > 0){

		$("#topContacts").after(HTMLskillsStart);

		for(skill in bio.contacts.skills){

			$("#skills").after(HTMLskills.replace("%data%", bio.contacts.skills[skill]));
		}
	}

	$("#topContacts").after(HTMLbioPic.replace("%data%", bio.contacts.biopic));
	$("#topContacts").after(HTMLWelcomeMsg.replace("%data%", bio.contacts.welcomeMessage));
}


var work = {};

work.jobs = [
	{
		"name" : "Al-FALAK",
		"location" : "Saudi Arabia, Arar",
		"title" : "Programming and Analyst",
		"dates" : "2013-2014",
		"url" : "http://falak.com",
		"description" : "Working there is not bad, even it is better than nothing"
	},
	{
		"name" : "RAE",
		"location" : "Saudi Arabia, Riyadh",
		"title" : "IT Expert",
		"dates" : "2014-now",
		"url" : "http://rae.com.sa",
		"description" : "This company is good and best than prevoius one, nice step but next step will be the best than anything last."
	}
];

work.display = function(){

	if(work.jobs.length > 0){

		for(w in work.jobs){

			$("#workExperience").append(HTMLworkStart);
			$(".work-entry").last().append(HTMLworkEmployer.replace("%data%", work.jobs[w].name));
			$(".work-entry").last().append(HTMLworkTitle.replace("%data%", work.jobs[w].title));

			$(".work-entry").last().append(HTMLworkDates.replace("%data%", work.jobs[w].dates));
			$(".work-entry").last().append(HTMLworkLocation.replace("%data%", work.jobs[w].location));
			$(".work-entry").last().append(HTMLworkDescription.replace("%data%", work.jobs[w].description));
		}
	}
}

var projects = {};

projects.projects = [
	{
		"title" : "Adyma Anti-base",
		"dates" : "2009-2010",
		"description" : "A big step in Malware development program, helps users from bad and Malciouls program, unique protection with RealTime scanner.",
		"images" : ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
	},
	{
		"title" : "Free Endless Self Development",
		"dates" : "2010-now",
		"description" : "Leave for a moment to impress you my friends ^_^",
		"images" : ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
	}
];

projects.display = function(){

	if(projects.projects.length > 0){

		for(project in projects.projects){

			$("#projects").append(HTMLprojectStart);
			$(".project-entry").last().append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
			$(".project-entry").last().append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
			$(".project-entry").last().append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));

			if(projects.projects[project].images){

				for(image in projects.projects[project].images){

					$(".project-entry").last().append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
				}
			}
		}
	}
}

var education = {};

education.schools = [
	{
		"name" : "Al-Zaiem Al-Azhary University - AAU",
		"location" : "Sudan, Khartoum",
		"degree" : "C",
		"majors" : ["Logic", "design", "Analysis", "Database", "Programming"],
		"dates" : "2006-2010",
		"url" : "http://alzaeimalazhary.com/"
	}
];

education.onlineCourses = [
	{
		"title" : "Systematic Prgram Design",
		"school" : "British Colombia",
		"date" : "2013",
		"url" : "http://couresra.org",
	},
	{
		"title" : "Nano-Degree Web Development",
		"school" : "Udacity",
		"date" : "2015",
		"url" : "http://Udacity.com",
	}
];

education.display = function(){

	if(education.schools.length > 0){

		for(school in education.schools){

			$("#education").append(HTMLschoolStart);
			$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[school].name));
			$(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
			$(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
			$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
			
			if(education.schools[school].majors.length > 0){

				for(major in education.schools[school].majors){

					$(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));
				}
			}
		}
	}

	if(education.onlineCourses.length > 0){

		var temp = $(HTMLonlineClasses);

		$(".education-entry").append(temp);

		temp.css("margin-top", "10px");
		temp.css("padding", "0");

		for(course in education.onlineCourses){

			$(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title));
			$(".education-entry").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
			$(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].date));
			$(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
		}
	}
}

function buildMyResume(){

	bio.display();
	work.display();
	projects.display();
	education.display();

	$("#mapDiv").append(googleMap);
}

buildMyResume();
