import { MetaTags } from '@redwoodjs/web'
import Project, { ProjectVariant } from 'src/components/Project/Project'
import './ShowcasePage.scss'

const ShowcasePage = () => {
  return (
    <main>
      <MetaTags title="Showcase" description="Showcase page" />

      <section>
        <div className={'content'}>
          <Project
            variant={ProjectVariant.highlight}
            imgProps={{
              src: 'https://d33wubrfki0l68.cloudfront.net/492ed629970792d32ac857da0166a7d2308bad99/428b6/images/diecut.svg',
            }}
            tags={[
              {
                pointer: 'CMS',
                link: 'https://github.com/redwoodjs/redwood/releases/tag/v0.45.0',
              },
            ]}
            title={'Curated example'}
            subtitle={'Working your CMS skills'}
            source={'localhost:8910'}
            description={`The sequence of retrieving data from an API, showing a loading placeholder, and then displaying the result is so common that Redwood codifies it into a declarative code pattern, resulting in simple and readable code!`}
          />
        </div>
      </section>
      <section className={'community'}>
        <header>
          <h2>Community</h2>
          <p>
            Those community driven examples will let you see how creative you
            can be with Redwood
          </p>
        </header>
        <div className={'content'}>
          <Project
            variant={ProjectVariant.showcase}
            tags={[
              {
                pointer: 'v0.45',
                link: 'https://github.com/redwoodjs/redwood/releases/tag/v0.45.0',
              },
            ]}
            imgProps={{
              src: 'https://d33wubrfki0l68.cloudfront.net/fe55b84dd8ef022e3729071c88f19825f564eaec/d049e/images/structure.png',
            }}
            title={'Community example'}
            source={'localhost:8910'}
            description={`The sequence of retrieving data from an API, showing a loading placeholder, and then displaying the result is so common that Redwood codifies it into a declarative code pattern, resulting in simple and readable code!`}
          />
          <Project
            variant={ProjectVariant.showcase}
            title={'Community example'}
            imgProps={{
              src: 'https://d33wubrfki0l68.cloudfront.net/02931d36f812dbcc6a3e41f05d133a7cdcace063/949ca/images/stickers.png',
            }}
            description={`This example showcases some community dedication.`}
          />
          <Project
            variant={ProjectVariant.showcase}
            title={'Community example'}
            description={`This example showcases some community dedication.`}
          />
        </div>
      </section>
    </main>
  )
}

export default ShowcasePage
