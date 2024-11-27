import React, { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const TextRc = ({ children, className = '', as: Tag = 'h1' }: TextProps) => {
  return <Tag className={`${className} text-indigo`}>{children}</Tag>;
};

export default TextRc;
