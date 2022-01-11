import clsx from 'clsx';

export const PrimaryParagraph = ({ children, className }) => {
  return <p className={clsx('jost-400 primary-text', className)}>{children}</p>;
};

export const SecondaryParagraph = ({ children, className }) => {
  return <p className={clsx('jost-400 secondary-text', className)}>{children}</p>;
};
