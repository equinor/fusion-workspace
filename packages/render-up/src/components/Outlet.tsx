import { Fragment } from "react";
import { useOutlet } from "../hooks";
import { OutletProps } from "../types";

/**
 * Renders a given component by key
 *
 */
export const Outlet = <TKey extends string = string>({
  renderKey,
  fallback,
}: OutletProps<TKey>) => (
  <Fragment key={renderKey}>{useOutlet(renderKey) ?? fallback}</Fragment>
);
