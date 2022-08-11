import React from 'react';

export interface Tab<TabName extends string> {
    name: TabName;
    Component: React.FC;
    HeaderComponent: React.FC;
}
