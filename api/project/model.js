// build your `Project` model here
const db = require("../data/db-config");

const getProjects = () => {
	return db("projects");
};

const getProjectById = (id) => {
	return db("projects").where({ id }).first();
};

module.exports = {
	getProjects,
	getProjectById,
};