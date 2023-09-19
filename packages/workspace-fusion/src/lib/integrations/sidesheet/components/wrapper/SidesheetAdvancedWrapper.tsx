type SidesheetAdvancedWrapperProps = {
  Config: () => JSX.Element;
};

export const SidesheetAdvancedWrapper = ({ Config }: SidesheetAdvancedWrapperProps) => {
  return <Config />;
};
