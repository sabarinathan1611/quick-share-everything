
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = "Start writing your note here...",
  className = ""
}) => {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      ['link'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'blockquote', 'code-block',
    'link'
  ];

  return (
    <div className={`rich-text-editor ${className}`}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        className="border-0"
      />
      <style jsx>{`
        .rich-text-editor :global(.ql-toolbar) {
          border: 1px solid #e5e7eb;
          border-bottom: none;
          border-radius: 0.375rem 0.375rem 0 0;
          background: #f9fafb;
        }
        
        .rich-text-editor :global(.ql-container) {
          border: 1px solid #e5e7eb;
          border-radius: 0 0 0.375rem 0.375rem;
          min-height: 200px;
          font-family: inherit;
        }
        
        .rich-text-editor :global(.ql-editor) {
          min-height: 200px;
          padding: 12px;
          font-size: 14px;
          line-height: 1.5;
        }
        
        .rich-text-editor :global(.ql-editor.ql-blank::before) {
          color: #9ca3af;
          font-style: normal;
        }
        
        .rich-text-editor :global(.ql-toolbar .ql-formats) {
          margin-right: 8px;
        }
        
        .rich-text-editor :global(.ql-toolbar button) {
          padding: 4px;
          margin: 2px;
          border-radius: 4px;
        }
        
        .rich-text-editor :global(.ql-toolbar button:hover) {
          background: #e5e7eb;
        }
        
        .rich-text-editor :global(.ql-toolbar .ql-active) {
          background: #dbeafe;
          color: #2563eb;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;
