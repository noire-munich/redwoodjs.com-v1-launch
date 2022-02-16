import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Community from 'src/components/Project/Community'

const ShowcasePage = () => {
  return (
    <main>
      <MetaTags title="Showcase" description="Showcase page" />

      <section>
        <article className="project">
          <header>
            <h1>Music Collection</h1>
            <img src={''} alt={'Music Collection example app'} />
          </header>
          <div className="content">
            <p></p>
          </div>
        </article>
      </section>
      <section className={'community'}>
        <h2>Community</h2>
        <Community
          title={'Community example'}
          description={`This example showcases some community dedication.`}
        />
        <Community
          title={'Community example'}
          description={`This example showcases some community dedication.`}
        />
        <Community
          title={'Community example'}
          description={`This example showcases some community dedication.`}
        />
      </section>
    </main>
  )
}

export default ShowcasePage
