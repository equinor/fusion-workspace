import { Button } from '@equinor/eds-core-react';

interface FilterCollapseIconProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const FilterCollapseIcon = ({ onClick }: FilterCollapseIconProps): JSX.Element => (
  <Button title="Compact filter" variant="ghost_icon" onClick={onClick}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.207 4.29289C20.5975 4.68342 20.5975 5.31658 20.207 5.70711L16.4142 9.49985L19 9.5C19.5523 9.5 20 9.94772 20 10.5C20 11.0523 19.5523 11.5 19 11.5L14 11.5C13.4477 11.5 13 11.0523 13 10.5V5.5C13 4.94771 13.4477 4.5 14 4.5C14.5523 4.5 15 4.94771 15 5.5V8.08563L18.7927 4.29289C19.1833 3.90237 19.8164 3.90237 20.207 4.29289Z"
        fill="#007079"
      />
      <path
        d="M4.49985 14C4.49985 13.4477 4.94756 13 5.49985 13H10.4998C11.0521 13 11.4998 13.4477 11.4998 14L11.4998 19C11.4998 19.5523 11.0521 20 10.4998 20C9.94756 20 9.49985 19.5523 9.49985 19L9.49985 16.4144L5.70711 20.2071C5.31658 20.5976 4.68342 20.5976 4.29289 20.2071C3.90237 19.8166 3.90237 19.1834 4.29289 18.7929L8.08579 15L5.49985 15C4.94756 15 4.49985 14.5523 4.49985 14Z"
        fill="#007079"
      />
    </svg>
  </Button>
);
