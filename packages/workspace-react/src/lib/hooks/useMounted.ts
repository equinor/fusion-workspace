import { WorkspaceViewController } from '../classes';
import { useEffectOnce } from './useEffectOnce';

export function useMounted<TTabNames extends string, TError>(controller: WorkspaceViewController<TTabNames, TError>) {
	useEffectOnce(() => {
		controller.isMounted.setValue(true);
		return () => {
			controller.isMounted.setValue(false);
		};
	});
}
