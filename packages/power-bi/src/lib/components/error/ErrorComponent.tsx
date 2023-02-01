import { FallbackProps } from 'react-error-boundary';
import { StyledLoadingWrapper } from '../loading/loading.styles';
import { ReportErrorMessage } from './ReportErrorMessage';

const unauthCodes = [401, 403];

type ErrorComponentProps = {
	getErrorMessage: (reportUri: string, signal?: AbortSignal) => Promise<string>;
	reportUri: string;
} & FallbackProps;

export function ErrorComponent({ getErrorMessage, reportUri, error }: ErrorComponentProps) {
	return (
		<StyledLoadingWrapper>
			{error.cause instanceof Response && unauthCodes.includes(error.cause.status) ? (
				<ReportErrorMessage getErrorMessage={getErrorMessage} reportUri={reportUri} />
			) : (
				<div>Failed to load report</div>
			)}
		</StyledLoadingWrapper>
	);
}
