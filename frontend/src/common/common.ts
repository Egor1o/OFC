import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeAddClasses from 'rehype-add-classes';
import rehypeStringify from 'rehype-stringify';

//styles can be added in the manner {div : "flex flex-col w-full h-full"}
const getHTMLfromMDX = async (mdx: string, styles: Object) => {
  return await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeAddClasses, styles)
    .use(rehypeStringify)
    .process(mdx)
}

export {
  getHTMLfromMDX
}