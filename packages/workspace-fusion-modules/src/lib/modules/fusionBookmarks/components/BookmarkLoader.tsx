import { FusionMediator } from '@equinor/workspace-fusion';
import { ReactNode } from 'react';
import { BookmarksModuleConfig } from '../BookmarkModule';
import { LoadingWrapper } from './LoadingWrapper';
import { useApplyBookmark } from '../hooks';
import { Fragment } from 'react';

type BookmarkLoaderProps = {
  children: ReactNode;
  mediator: FusionMediator<any, any, any>;
} & Required<BookmarksModuleConfig>;

export const BookmarkLoader = ({ children, mediator, searchParam, getBookmark }: BookmarkLoaderProps) => {
  const isLoading = useApplyBookmark({ getBookmark, searchParam }, mediator);

  if (isLoading) {
    <LoadingWrapper />;
  }

  return <Fragment>{children}</Fragment>;
};
