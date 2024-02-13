import { FallbackProps } from 'react-error-boundary';
import { StyledLoadingWrapper } from '../loading/loading.styles';
import { ReportErrorMessage } from './ReportErrorMessage';
import { ReportAccessInfo } from '../../types';

const unauthCodes = [401, 403];

type ErrorComponentProps = {
  getErrorMessage: (reportUri: string, signal?: AbortSignal) => Promise<string>;
  getAccessInfo: (reportUri: string, signal?: AbortSignal) => Promise<ReportAccessInfo>;
  reportUri: string;
} & FallbackProps;

export function ErrorComponent({ getErrorMessage, getAccessInfo, reportUri, error }: ErrorComponentProps) {
  return (
    <StyledLoadingWrapper>
      {error.cause instanceof Response && unauthCodes.includes(error.cause.status) ? (
        <ReportErrorMessage getErrorMessage={getErrorMessage} getAccessInfo={getAccessInfo} reportUri={reportUri} />
      ) : (
        <div>Failed to load report</div>
      )}
    </StyledLoadingWrapper>
  );
}
