import { Icon } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';

export const ChevronUp = (): JSX.Element => (
    <Icon name={'chevron_up'} color={tokens.colors.interactive.primary__resting.rgba} />
);

export const ChevronDown = (): JSX.Element => (
    <Icon name={'chevron_down'} color={tokens.colors.interactive.primary__resting.rgba} />
);

export const ChevronRight = (): JSX.Element => (
    <Icon name={'chevron_right'} color={tokens.colors.interactive.primary__resting.rgba} />
);
