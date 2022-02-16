import { ProjectProps } from 'web/src/components/Project/Project'

export interface ExternalProps extends ProjectProps {}

const External = ({ link, label }) => (
  <a
    className="project external"
    href={link}
    target={'_blank'}
    rel="noreferrer"
  >
    {label}
  </a>
)

export default External
