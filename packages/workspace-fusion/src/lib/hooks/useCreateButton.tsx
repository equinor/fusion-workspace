import { useEffect } from 'react';
import { HeaderIcon, useWorkspaceHeaderComponents } from '../context';
import { SidesheetConfig } from '../integrations/sidesheet';
import { Icon } from '@equinor/eds-core-react';
import { add } from '@equinor/eds-icons';
import { tokens } from '@equinor/eds-tokens';
import { useWorkspace } from './useWorkspaceController';

Icon.add({ add });

export function useCreateButton<TData extends Record<PropertyKey, unknown>>(config?: SidesheetConfig<TData>) {
  const { setIcons } = useWorkspaceHeaderComponents();
  const { openCreateSidesheet } = useWorkspace();

  useEffect(() => {
    const icon: HeaderIcon = {
      name: 'Create',
      placement: 'left',
      type: 'button',
      Icon: (props) => (
        <Icon name="add" color={tokens.colors.interactive.primary__resting.hex} onClick={() => openCreateSidesheet()} />
      ),
    };

    if (config?.CreateSidesheet) {
      setIcons((s) => [...s, icon]);
    }
    return () => {
      setIcons((s) => [...s.filter((s) => s !== icon)]);
    };
  }, []);
}
