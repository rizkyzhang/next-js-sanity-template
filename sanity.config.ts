import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"

const config = defineConfig({
  projectId: "4k7wg47f",
  dataset: "production",
  title: "Blog",
  basePath: "/admin",
  plugins: [deskTool()],
})

export default config
