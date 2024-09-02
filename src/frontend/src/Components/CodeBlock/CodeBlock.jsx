import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css'; 
import 'highlight.js/styles/atom-one-dark.css';

const CodeBlock = ({ language, code }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, []);

  return (
    <pre style={{ backgroundColor: '#2d2d2d', padding: '16px', borderRadius: '8px' }}>
      <code ref={codeRef} className={language}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;