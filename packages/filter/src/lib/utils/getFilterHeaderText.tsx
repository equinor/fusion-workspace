import { tokens } from '@equinor/eds-tokens';
import { StyledNormalText } from '../components/filterGroup/filterGroup.styles';

export function getFilterHeaderText(
  isAllChecked: boolean,
  name: string,
  checkedValues: string[]
): string | JSX.Element {
  const selectedCount = checkedValues.length;

  const hasBlank = checkedValues.includes('(Blank)');
  const nonBlankCount = hasBlank ? selectedCount - 1 : selectedCount;

  if (hasBlank && nonBlankCount > 0) {
    return <StyledNormalText>{`${name} (Blank) (+${nonBlankCount})`}</StyledNormalText>;
  }

  if (selectedCount === 1 && hasBlank) {
    return <StyledNormalText>{`${name} (Blank)`}</StyledNormalText>;
  }

  const displayText = selectedCount > 0 ? `${name} (+${selectedCount})` : name;

  if (isAllChecked || selectedCount === 0) {
    return <StyledNormalText>{displayText}</StyledNormalText>;
  }

  return <div style={{ color: tokens.colors.interactive.primary__resting.hex }}>{displayText}</div>;
}
