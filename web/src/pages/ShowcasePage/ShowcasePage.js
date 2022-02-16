import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ShowcasePage = () => {
  return (
    <>
      <MetaTags title="Showcase" description="Showcase page" />

      <h1>ShowcasePage</h1>
      <p>
        Find me in <code>./web/src/pages/ShowcasePage/ShowcasePage.js</code>
      </p>
      <p>
        My default route is named <code>showcase</code>, link to me with `
        <Link to={routes.showcase()}>Showcase</Link>`
      </p>
    </>
  )
}

export default ShowcasePage
