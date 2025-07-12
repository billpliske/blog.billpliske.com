import { defineBackend } from '@aws-amplify/backend'

const backend = defineBackend({
  // No auth, API or storage needed for a static blog
})

export default backend