import React, { ReactNode } from 'react';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import unified from 'unified';
import { CustomLink } from '../customLink';
import { H2 } from '../H2';
import markdownStyles from './markdown-styles.module.css';

interface Props {
  markdown: string
}

export const PrintMarkdown: React.FC<Props> = ({ markdown }) => {
  const file = unified()
    .use(parse)
    .use(remark2react, {
      remarkReactComponents: {
        a: CustomLink,
        h2: H2,
      },
    })
    .processSync(markdown);

  return (
    <div className={markdownStyles.markdown}>
      {file.result as ReactNode}
    </div>
  );
};
