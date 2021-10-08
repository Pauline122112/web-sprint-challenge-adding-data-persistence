
exports.up = async function (knex) {
	await knex.schema
		//A **project** is what needs to be done and is stored in a `projects` table
		.createTable("projects", (table) => {
			table.increments("project_id");
			table.string("project_name", 128).notNullable();
			table.string("project_description", 128).unsigned().notNullable();
			table.boolean("project_completed").defaultTo(false);
		})
		//A **resource** is anything needed to complete a project and is stored in a `resources` table
		.createTable("resources", (table) => {
			table.increments("resource_id");
			table.string("resource_name").unsigned().notNullable();
			table.string("resource_description").unsigned().notNullable();
		})
		//A **task** is one of the steps needed to complete a project and is stored in a `tasks` table
		.createTable("tasks", (table) => {
			table.increments("task_id");
			table.string("task_description").unsigned().notNullable();
			table.string("task_notes").unsigned().notNullable();
			table.integer("task_completed");
			table
				.integer("project_id")
				.unsigned()
				.notNullable()
				.references("project_id")
				.inTable("projects")
				.onDelete("RESTRICT")
				.onUpdate("RESTRICT");
		})
		//A **resource assignment** connects a resource and a project, and is stored in a `project_resources` table.
		.createTable("project_resources", (table) => {
			table.increments("project_resources_id");
			table
				.integer("project_id")
				.unsigned()
				.notNullable()
				.references("project_id")
				.inTable("projects")
				.onDelete("RESTRICT")
				.onUpdate("RESTRICT");
			table
				.integer("resource_id")
				.unsigned()
				.notNullable()
				.references("resource_id")
				.inTable("resources")
				.onDelete("RESTRICT")
				.onUpdate("RESTRICT");
		})
}
	exports.down = async function (knex) {
		await knex.schema
			.dropTableIfExists("projects")
			.dropTableIfExists("resources")
			.dropTableIfExists("tasks")
			.dropTableIfExists("project_resources")
	}


	