import { getHTMLfromMDX } from 'src/common/common';
import '../styles/Markdown.css';
import { useEffect, useState } from 'react';

const MarkdownArticle = ({ markdown, styles }: { markdown: string; styles?: Object }) => {
  const [htmlContent, setHtmlContent] = useState<string>('');
  useEffect(() => {
    const convertMarkdown = async () => {
      const result = await getHTMLfromMDX(markdown, styles ?? {}); // Call async function
      setHtmlContent(result.toString());
    };
    convertMarkdown();
  }, [markdown, styles]);

  return (
    <article
      className='m-0 flex flex-col items-center justify-center text-center'
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    ></article>
  );
};

export default MarkdownArticle;
