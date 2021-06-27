import ReactMarkdown from 'react-markdown'
// Plugins
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import rehypeHighlight from 'rehype-highlight'
import rehypePicture from 'rehype-picture'

/**
 * @typedef MarkdownProps
 * @param {reactChildren} children
 */
export default function Markdown({ children }) {
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight, rehypePicture]}>
      {children}
    </ReactMarkdown>
  )
}
