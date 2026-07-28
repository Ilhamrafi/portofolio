import ReactMarkdown from 'react-markdown';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        components={{
          h1: (props) => <h1 className="text-4xl font-bold text-white mt-8 mb-4" {...props} />,
          h2: (props) => <h2 className="text-3xl font-bold text-white mt-8 mb-4" {...props} />,
          h3: (props) => <h3 className="text-2xl font-bold text-white mt-6 mb-3" {...props} />,
          p: (props) => <p className="text-gray-300 leading-relaxed mb-4" {...props} />,
          ul: (props) => <ul className="list-disc list-inside space-y-2 pl-4 my-4 text-gray-300" {...props} />,
          ol: (props) => <ol className="list-decimal list-inside space-y-2 pl-4 my-4 text-gray-300" {...props} />,
          blockquote: (props) => (
            <blockquote className="border-l-4 border-[#F1FFB2] pl-4 italic my-6 text-gray-400" {...props} />
          ),
          strong: (props) => <strong className="font-bold text-white" {...props} />,
          em: (props) => <em className="italic text-gray-200" {...props} />,
          a: (props) => (
            <a className="text-[#F1FFB2] hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
          ),
          code: (props) => (
            <code className="bg-black/50 px-2 py-1 rounded text-[#F1FFB2] text-sm font-mono" {...props} />
          ),
          pre: (props) => (
            <pre className="bg-black/50 border border-white/10 rounded-lg p-4 overflow-x-auto my-6" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
