import { tokens } from '@equinor/eds-tokens';
import { StyledNormalText } from '../components/filterGroup/filterGroup.styles';

export function getFilterHeaderText(isAllChecked: boolean, name: string, checkedValues: string[]): JSX.Element {
  const selectedCount = checkedValues.length;
  const displayText = selectedCount > 0 ? `${name} (+${selectedCount})` : name;

  const textComponent = <StyledNormalText>{displayText}</StyledNormalText>;

  return isAllChecked || selectedCount === 0 ? (
    textComponent
  ) : (
    <div style={{ color: tokens.colors.interactive.primary__resting.hex }}>{displayText}</div>
  );
}
