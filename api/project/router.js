// build your `/api/projects` router here
const express = require("express")
const projectsModel = require('../project/model')

const router = express.Router()

router.get('/', (req, res, next) => {
	projectsModel
		.getProjects()
		.then((projects) => {
			res.status().json(projects);
		})
		.catch(next);
})

router.post("/", (req, res, next) => {
	projectsModel
		.newProject(req.body)
		.then((project) => {
			res.status(201).json(project);
		})
		.catch(next);
});

module.exports = router
