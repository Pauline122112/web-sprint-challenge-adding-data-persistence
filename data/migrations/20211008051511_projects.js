
exports.up = async function (knex) {
  await knex.schema
  .createTable('projects', (table) => {
      table.increments('project_id')
      table.string('project_name', 128).notNullable()
      table.string("project_description").unsigned().notNullable()
      table.integer("project_completed").unsigned().notNullable()
  })
};

exports.down = async function (knex) {
  await knex.schema
		.dropTableIfExists("projects")
}


//- [ ] A **project** is what needs to be done and is stored in a `projects` table with the following columns:

//   - [ ] `project_id` - primary key
//   - [ ] `project_name` - required
//   - [ ] `project_description` - optional
//   - [ ] `project_completed` - the database defaults it to `false` (integer 0) if not 