import React from 'react';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const renderContent = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Handle headings
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={`h1-${i}`} className="text-4xl font-bold text-white mt-8 mb-4">
            {line.replace(/^#\s+/, '')}
          </h1>
        );
        i++;
        continue;
      }

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={`h2-${i}`} className="text-3xl font-bold text-white mt-8 mb-4">
            {line.replace(/^##\s+/, '')}
          </h2>
        );
        i++;
        continue;
      }

      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={`h3-${i}`} className="text-2xl font-bold text-white mt-6 mb-3">
            {line.replace(/^###\s+/, '')}
          </h3>
        );
        i++;
        continue;
      }

      // Handle code blocks
      if (line.startsWith('```')) {
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        i++; // Skip closing ```

        const language = line.replace(/^```/, '') || 'text';
        elements.push(
          <pre key={`code-${i}`} className="bg-black/50 border border-white/10 rounded-lg p-4 overflow-x-auto my-6">
            <code className="text-sm text-[#F1FFB2] font-mono whitespace-pre-wrap break-words">
              {codeLines.join('\n')}
            </code>
          </pre>
        );
        continue;
      }

      // Handle lists
      if (line.startsWith('- ') || line.startsWith('* ')) {
        const listItems: string[] = [];
        let listType: 'unordered' | 'ordered' = 'unordered';

        while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* ') || lines[i].match(/^\d+\.\s/))) {
          if (lines[i].match(/^\d+\.\s/)) {
            listType = 'ordered';
            listItems.push(lines[i].replace(/^\d+\.\s+/, ''));
          } else {
            listItems.push(lines[i].replace(/^[-*]\s+/, ''));
          }
          i++;
        }

        if (listType === 'ordered') {
          elements.push(
            <ol key={`list-${i}`} className="list-decimal list-inside space-y-2 pl-4 my-4 text-gray-300">
              {listItems.map((item, idx) => (
                <li key={idx}>{renderInlineMarkdown(item)}</li>
              ))}
            </ol>
          );
        } else {
          elements.push(
            <ul key={`list-${i}`} className="list-disc list-inside space-y-2 pl-4 my-4 text-gray-300">
              {listItems.map((item, idx) => (
                <li key={idx}>{renderInlineMarkdown(item)}</li>
              ))}
            </ul>
          );
        }
        continue;
      }

      // Handle blockquotes
      if (line.startsWith('> ')) {
        const quoteLines: string[] = [];
        while (i < lines.length && lines[i].startsWith('> ')) {
          quoteLines.push(lines[i].replace(/^>\s+/, ''));
          i++;
        }

        elements.push(
          <blockquote key={`quote-${i}`} className="border-l-4 border-[#F1FFB2] pl-4 italic my-6 text-gray-400">
            {quoteLines.join(' ')}
          </blockquote>
        );
        continue;
      }

      // Handle empty lines
      if (line.trim() === '') {
        i++;
        continue;
      }

      // Handle regular paragraphs
      let paragraph = line;
      i++;
      while (i < lines.length && !lines[i].startsWith('#') && !lines[i].startsWith('```') && 
             !lines[i].startsWith('-') && !lines[i].startsWith('*') && !lines[i].startsWith('>') &&
             !lines[i].match(/^\d+\./) && lines[i].trim() !== '') {
        paragraph += ' ' + lines[i];
        i++;
      }

      if (paragraph.trim()) {
        elements.push(
          <p key={`p-${i}`} className="text-gray-300 leading-relaxed mb-4">
            {renderInlineMarkdown(paragraph)}
          </p>
        );
      }
    }

    return elements;
  };

  const renderInlineMarkdown = (text: string) => {
    const parts: React.ReactNode[] = [];
    let regex = /(\*\*.*?\*\*|__.*?__|_.*?_|\*.*?\*|`.*?`|\[.*?\]\(.*?\))/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      // Add text before match
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      const matched = match[0];

      // Bold
      if (matched.startsWith('**') || matched.startsWith('__')) {
        parts.push(
          <strong key={`bold-${match.index}`} className="font-bold text-white">
            {matched.replace(/(\*\*|__)/g, '')}
          </strong>
        );
      }
      // Italic
      else if (matched.startsWith('_') || matched.startsWith('*')) {
        parts.push(
          <em key={`italic-${match.index}`} className="italic text-gray-200">
            {matched.replace(/(\*|_)/g, '')}
          </em>
        );
      }
      // Code
      else if (matched.startsWith('`')) {
        parts.push(
          <code key={`inline-code-${match.index}`} className="bg-black/50 px-2 py-1 rounded text-[#F1FFB2] text-sm font-mono">
            {matched.replace(/`/g, '')}
          </code>
        );
      }
      // Link
      else if (matched.startsWith('[')) {
        const linkMatch = matched.match(/\[(.*?)\]\((.*?)\)/);
        if (linkMatch) {
          parts.push(
            <a
              key={`link-${match.index}`}
              href={linkMatch[2]}
              className="text-[#F1FFB2] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkMatch[1]}
            </a>
          );
        }
      }

      lastIndex = regex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div className="prose prose-invert max-w-none">
      {renderContent(content)}
    </div>
  );
}
