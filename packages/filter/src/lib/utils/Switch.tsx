import React from 'react';

interface SwitchProps {
    children: React.ReactNode;
    condition?: string | number | boolean | undefined | null | symbol;
    defaultCase?: React.ReactChild;
}

export function Switch({ children, condition, defaultCase = <></> }: SwitchProps): JSX.Element {
    const child = React.Children.toArray(children).find(
        (child) =>
            React.isValidElement(child) &&
            (condition ? condition === child.props.when : child.props.when)
    );

    return <>{child || defaultCase}</>;
}
export interface CaseProps {
    when: boolean | string | number | symbol | undefined | null;
}
export const Case = ({ children }: React.PropsWithChildren<CaseProps>): JSX.Element => {
    return <>{children}</>;
};
