// build your `Project` model here
const db = require("../../data/dbConfig")

const getProjects = async () => {
	const allProjects = await db('projects')
	const projects = allProjects.map((project) => {
		const projectTest = {
			project_id: project.project_id,
			project_name: project.project_name,
			project_description: project.project_description,
			project_completed: project.project_completed === 0 ? false : true,
		}
		return projectTest
	})
	return projects
}

const getProjectById = async (project_id) => {
	const singleProject = await db("projects")
	.where('project_id', project_id)
	.first()

	const formProject = {
		project_id: singleProject.project_id,
		project_name: singleProject.project_name,
		project_description: singleProject.project_description,
		project_completed: singleProject.project_completed,
	}
	return formProject
}

const newProject = async (project) => {
	const [project_id] = await db('projects').insert(project)
	return getProjectById(project_id)
}

module.exports = {
	getProjects,
	getProjectById,
	newProject
}