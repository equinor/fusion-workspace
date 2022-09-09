import { Button } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';

interface FilterClearIconProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isDisabled?: boolean;
}

export const FilterClearIcon = ({ onClick, isDisabled }: FilterClearIconProps): JSX.Element => (
    <Button title="Clear filters" variant="ghost_icon" onClick={onClick} disabled={isDisabled}>
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill={isDisabled ? tokens.colors.interactive.disabled__text.hex : '#007079'}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.7601 15.187L21.0847 22.5116L22.4989 21.0974L14.0402 12.6387L14.0514 12.6243L5.4271 4H5.40152L2.79312 1.3916L1.37891 2.80582L3.83359 5.2605C3.86697 5.38124 3.92484 5.49967 4.01009 5.61C6.0301 8.2 9.76009 13 9.76009 13V19C9.76009 19.55 10.2101 20 10.7601 20H12.7601C13.3101 20 13.7601 19.55 13.7601 19V15.187ZM19.5001 5.61C18.3159 7.12834 16.5475 9.4062 15.2868 11.0313L8.25553 4H18.7101C19.5401 4 20.0101 4.95 19.5001 5.61Z"
            />
        </svg>
    </Button>
);
