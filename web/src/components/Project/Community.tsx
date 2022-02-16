import './Project.scss'

const Community = ({ title, imgProps, description }) => (
  <article className="project--community">
    <header>
      <h1>{title}</h1>
      <img alt={'Image for example app'} {...imgProps} />
    </header>
    <div className="content">
      <p>{description}</p>
    </div>
  </article>
)

export default Community
