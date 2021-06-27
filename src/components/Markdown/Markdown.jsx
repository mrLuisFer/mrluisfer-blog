import ReactMarkdown from 'react-markdown'
// Plugins
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import rehypeHighlight from 'rehype-highlight'

/**
 * @typedef MarkdownProps
 * @param {string} children
 */
export default function Markdown({ children }) {
  return (
    <div>
      <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}>
        {children}
      </ReactMarkdown>
    </div>
  )
}
