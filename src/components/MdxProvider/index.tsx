import { FC } from 'react'
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react'
import { MdxLink } from 'gatsby-theme-i18n'

import CodeGroup from '@/components/CodeGroup'
import CodeBlock from '@/components/CodeBlock'
import CodeGroups from '@/components/CodeGroups'
import Alert from '@/components/Alert'
import MdxH2 from '@/components/MdxH2'

const components: MDXProviderComponentsProp = {
  pre: (props) => <div {...props} />,
  a: MdxLink,
  code: CodeBlock,
  h2: (props) => {
    const { id, children } = props
    const title = children[1]
    return <MdxH2 id={id} title={title} />
  },
  table: (props) => (
    <div className="w-full scrollbar-thin scrollbar-thumb-accent rounded overflow-x-scroll">
      <table {...props} />
    </div>
  ),
  Alert,
  CodeGroups,
  CodeGroup,

  wrapper: ({ children }) => {
    const updatedChildren = children.map((child) => {
      if (child.props.className === 'footnotes') {
        const { mdxType, originalType, ...rest } = child.props
        return <div key={1} {...rest} />
      }
      return child
    })
    return <>{updatedChildren}</>
  }
}

const CustomMdxProvider: FC = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)

export default CustomMdxProvider
