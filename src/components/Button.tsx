import { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button(props: ButtonProps) {
  const { isOutlined = false, ...rest } = props;

  return (
    <button className={`button ${isOutlined ? 'outlined' : ''}`} {...rest} />
  );
}
