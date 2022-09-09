import { Button } from '@equinor/eds-core-react';

interface FilterExpandIconProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const FilterExpandIcon = ({ onClick }: FilterExpandIconProps): JSX.Element => (
    <Button title="Advanced filter" onClick={onClick} variant="ghost_icon">
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13 5C13 4.44772 13.4477 4 14 4H19C19.5523 4 20 4.44772 20 5V10C20 10.5523 19.5523 11 19 11C18.4477 11 18 10.5523 18 10V7.41436L14.2073 11.2071C13.8167 11.5976 13.1836 11.5976 12.793 11.2071C12.4025 10.8166 12.4025 10.1834 12.793 9.79289L16.5859 6H14C13.4477 6 13 5.55228 13 5Z"
                fill="#007079"
            />
            <path
                d="M11.207 14.2071C11.5975 13.8166 11.5975 13.1834 11.207 12.7929C10.8164 12.4024 10.1833 12.4024 9.79274 12.7929L6 16.5856L6 14C6 13.4477 5.55229 13 5 13C4.44772 13 4 13.4477 4 14V19C4 19.5523 4.44772 20 5 20L10 20C10.5523 20 11 19.5523 11 19C11 18.4477 10.5523 18 10 18H7.41406L11.207 14.2071Z"
                fill="#007079"
            />
        </svg>
    </Button>
);
