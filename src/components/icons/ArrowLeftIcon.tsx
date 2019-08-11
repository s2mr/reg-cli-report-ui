import React from 'react';

export type Props = React.ComponentProps<'svg'>;

export const ArrowLeftIcon: React.FC<Props> = ({ fill, ...rest }) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
    <path
      d="M14.9974 6.99191C14.6095 6.6041 13.9807 6.6041 13.5928 6.99191L9.00278 11.582C8.80743 11.7773 8.71045 12.0339 8.71188 12.2899C8.71045 12.5459 8.80743 12.802 9.00278 12.9973L13.5928 17.5874C13.9807 17.9752 14.6095 17.9752 14.9974 17.5874C15.3853 17.1994 15.3853 16.5706 14.9974 16.1827L11.1043 12.2896L14.9974 8.39658C15.3853 8.00864 15.3853 7.37985 14.9974 6.99191Z"
      fill={fill}
    />
  </svg>
);