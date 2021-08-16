import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { nanoid } from 'nanoid'

type Props = {
  lang?: Language
  code: string
}

export const PrismHighlight = ({ lang = 'jsx', code }: Props) => {
  return (
    <Highlight {...defaultProps} code={code} language={`${lang}`}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={nanoid()} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={nanoid()} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
