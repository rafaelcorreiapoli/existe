import { Projects } from 'meteor/existe:core'
import { ProjectSchema } from 'meteor/existe:schemas'

Projects.attachSchema(ProjectSchema)
Projects.attachBehaviour('timestampable');

export default Projects
