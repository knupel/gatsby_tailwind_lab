import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Menu from "../components/menu/menu"





const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Laboratoire Tailwind and Co</h1>
      <Menu />
      
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
