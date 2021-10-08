// build your `/api/projects` router here
const express = require("express")

const Project = require('../project/model')

const router = express.Router()

router.get("/", (_, res) => {
	Project.getProjects()
		.then((recipes) => {
			res.status(200).json(recipes)
		})
		.catch((error) => {
			res.status(500).json({ message: error.message })
		})
})

router.get("/:id", (req, res) => {
	try {
		Project.getProjectById(req.params.id).then((recipe) => {
			res.status(200).json(recipe)
		})
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

module.exports = router
