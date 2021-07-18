import ReactMarkdown from 'react-markdown'
// Plugins
import rehypeHighlight from 'rehype-highlight'
import rehypePicture from 'rehype-picture'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'

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
