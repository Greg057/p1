import React from 'react';

interface DescriptionRendererProps {
  description: string | null;
  className?: string;
}

/**
 * Safely renders user descriptions with line breaks and bullet points
 * Replaces the need for dangerouslySetInnerHTML in description rendering
 */
export function DescriptionRenderer({ description, className }: DescriptionRendererProps) {
  if (!description) return null;

  const lines = description.split('\n');
  const processedLines = lines
    .map((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('• ')) return trimmed;
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        return '• ' + trimmed.substring(2);
      }
      if (trimmed.length > 0) return trimmed;
      return '';
    })
    .filter((line) => line.length > 0);

  return (
    <div className={className}>
      {processedLines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < processedLines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
}