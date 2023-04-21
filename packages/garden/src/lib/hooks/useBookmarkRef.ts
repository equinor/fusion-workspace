import { MutableRefObject, useEffect } from 'react';
import { GardenController } from '../classes';
import { BookmarkRef } from '../components';

export function useBookmarkRef(
  controller: GardenController<any>,
  bookmarkRef: MutableRefObject<BookmarkRef<any> | null | undefined> | undefined
) {
  useEffect(() => {
    if (!bookmarkRef) return;
    const unsub = controller.grouping.onChange((newKeys) => {
      bookmarkRef.current = { groupingKeys: newKeys };
    });
    return () => {
      unsub();
    };
  }, [bookmarkRef, controller]);
}
