// build your `/api/projects` router here
const express = require("express")

const Project = require('../project/model')

const router = express.Router()

router.get('/', (req, res, next) => {
	Project.getProjects()
	.then((projects) => {
		res.status().json(projects)
	})
	.catch(next)
})

router.post('/', async (req, res, next) => {
	try {
	const possibleProject = await Project.newProject(req.body)
	res.status(201).json(possibleProject)
	} catch (error) {
		next(error)
	}
})

module.exports = router
