import React from 'react';

export const H2: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = (props) => {
  const { children } = props;

  return <h2 className="title" {...props}>{children}</h2>;
};
