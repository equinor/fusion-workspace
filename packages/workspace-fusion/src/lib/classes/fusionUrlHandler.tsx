import { FusionMediator } from '../types';
import { BrowserHistory } from 'history';
import { BaseEvent } from '@equinor/workspace-core';

//TODO: Move this out of classes

export const fusionQueryParams = ['item', 'tab'] as const;
/** A union type of the workspace query parameters */
type QueryParamTopic = (typeof fusionQueryParams)[number];

type QueryParam = [QueryParamTopic, string | undefined];

export function tryGetTabFromUrl() {
  const [_, tab] = fusionQueryParams;
  return new URL(window.location.toString()).searchParams.get(tab);
}

/**
 * Function for patching query parameters without manipulating the other query parameters
 */
export function updateQueryParams<
  TData extends Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never
>(val: QueryParam[], mediator: FusionMediator<TData, TContext, TCustomSidesheetEvents>, history: BrowserHistory) {
  val.forEach((val) => {
    const [topic, value] = val;
    if (!value) {
      mediator.urlService.url.searchParams.delete(topic);
    } else {
      mediator.urlService.url.searchParams.set(topic, value);
    }
  });
  history.replace(mediator.urlService.url.toString());
}
