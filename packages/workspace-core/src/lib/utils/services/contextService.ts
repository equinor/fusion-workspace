import { ServiceCtor } from '../../types/serviceCtor';
import { BehaviorSubject } from 'rxjs';

/**
 * Context service provides a data store for a custom generic
 */
export function createContextService<TContext extends Record<PropertyKey, unknown>>(destroy: ServiceCtor) {
  const contextSubject = new BehaviorSubject<TContext>({} as TContext);
  destroy(() => contextSubject.complete());
  return {
    context$: contextSubject.asObservable(),
    getContext: (): TContext => contextSubject.getValue(),
    setContext: (val: TContext | ((previous: TContext) => TContext)) =>
      contextSubject.next(typeof val === 'function' ? val(contextSubject.getValue()) : val),
  };
}
