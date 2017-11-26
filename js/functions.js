app.factory('functions', ['$http', function($http) {

	var functions = {};

	var link = 'http://172.20.10.2:8000/';
	var mailLink = 'http://172.20.10.11:8080/';

	/*
	 * Contoller calls for API functions for user manipulation
	 */
	functions.login = function(input) {
		return $http.post(link + 'login/', input);
	}

	functions.registerCompany = function(input) {
		return $http.post(link + 'registercompany/', input);
	}

	functions.registerPerson = function(input) {
		return $http.post(link + 'registerperson/', input);
	}

	functions.getAllPersons = function() {
		return $http({
			url: link + 'persons/',
			method: 'GET'
		});
	}

	functions.getAllCompanies = function() {
		return $http({
			url: link + 'companies/',
			method: 'GET'
		});
	}

	functions.createJob = function(input) {
		return $http.post(link + 'jobposts/', input);
	}

	functions.getPersonsSkills = function(id) {
		return $http({
			url: link + 'getprogrammerskills/' + id + '/',
			method: 'GET'
		});
	}

	functions.getCompanySkills = function(id) {
		return $http({
			url: link + 'getcompanyskills/' + id + '/',
			method: 'GET'
		});
	}

	functions.getSkillById = function(id) {
		return $http({
			url: link + 'skills/' + id + '/',
			method: 'GET'
		});
	}

	functions.connect = function(input) {
		return $http.post(link + 'connections/', input);
	}

	functions.getCompanyJobs = function(id) {
		return $http({
			url: link + 'getcompanyjobposts/' + id + '/',
			method: 'GET'
		});
	}

	functions.getAllJobs = function() {
		return $http({
			url: link + 'jobposts/',
			method: 'GET'
		});
	}

	functions.getProgramersSkills = function(id) {
		return $http({
			url: link + 'getprogrammerskills/' + id + '/',
			method: 'GET'
		});
	}

	functions.getJobsSkills = function(id) {
		return $http({
			url: link + 'getjobpostskills/' + id + '/',
			method: 'GET'
		});
	}

	functions.apply = function(input) {
		return $http.post(link + 'applications/', input);
	}

	// Primeri

	functions.readAllUsers = function() {
		return $http({
			url: link + 'persons/',
			method: 'GET'
		});
	}

	functions.registerSkill = function(input) {
        return $http.post(link + 'companyskills/', input);
   	}

   	functions.registerPersonSkill = function(input) {
        return $http.post(link + 'personskills/', input);
   	}

	functions.getAllSkills = function() {
        return $http({
            url: link + 'skills/',
            method: 'GET'
       });
    }


	/*
	 * Controller calls for API functions for mail
	 */
	functions.sendMail = function(input) {
		return $http.post(link + '/sendMail', input);
	}

	/*
	 * Controller calls for API functions for usefull links
	 */
	functions.getAllUsefulLinks = function() {
		var list = [];
		var link = {
			title : "Google",
			url : "http://www.google.com"
		}
		var link1 = {
			title : "Youtube",
			url : "http://www.youtube.com"
		}
		var link2 = {
			title : "Google",
			url : "http://www.tutorialspoint"
		}
		var link3 = {
			title : "Youtube",
			url : "http://www.codecademy.com"
		}
		list.push(link);
		list.push(link1);
		list.push(link2);
		list.push(link3);

		return list;
	}

	functions.getRelationshipsByCompany = function(companyId) {
		return $http({
			url: link + 'getrelationshipsbycompany/' + companyId + '/',
			method: 'GET'
		});
	}

	functions.getPersonById = function(personId) {
		return $http({
			url: link + 'persons/' + personId + '/',
			method: 'GET'
		});
	}

	functions.getUserById = function(userId) {
		return $http({
			url: link + 'users/' + userId + '/',
			method: 'GET'
		});
	}

	functions.sendRecommendationMail = function(input) {
		return $http.post(mailLink + 'sendRecommendationMail', input);
	}

	functions.getRelationshipsByPerson = function(personId) {
		return $http({
			url: link + 'getrelationshipsbyperson/' + personId + '/',
			method: 'GET'
		});
	}

	functions.getCompanyById = function(companyId) {
		return $http({
			url: link + 'companies/' + companyId + '/',
			method: 'GET'
		});
	}

	functions.getFriendsByPerson = function(personId) {
		return $http({
			url: link + 'getfriendsbyperson/' + personId + '/',
			method: 'GET'
		});
	}

	functions.createRecommendedApplication = function(input) {
		return $http.post(link + 'applications/', input);
	}

	functions.getFilteredAppicationsByJobPost = function(jobId, param) {
		return $http({
			url: link + 'getfilteredapplicationsbyjobpost/' + jobId + '/' + param + '/',
			method: 'GET'
		});
	}

	functions.verifySkill = function(input) {
		return $http.put(link + 'personskills/' + input.id + '/', input);
	}

	functions.getPersonSkillsById = function(personSkillId) {
		return $http({
			url: link + 'personskills/' + personSkillId + '/',
			method: 'GET'
		});
	}

	functions.getAllApplications = function() {
		return $http({
			url: link + 'applications/',
			method: 'GET'
		});
	}

	functions.sendInfoAboutRecommendation = function(input) {
		return $http.post(mailLink + 'sendInfoAboutRecommendation', input);
	}

	functions.sendInfoAboutRecommendationToCompany = function(input) {
		return $http.post(mailLink + 'sendInfoAboutRecommendationToCompany', input);
	}

	return functions;
}]);