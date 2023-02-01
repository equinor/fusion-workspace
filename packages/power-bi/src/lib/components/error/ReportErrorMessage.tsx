import { Accordion, Icon } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import Markdown from 'markdown-to-jsx';
import { warning_outlined } from '@equinor/eds-icons';
import {
	StyledAccordionWrapper,
	StyledErrorCard,
	StyledErrorWrapper,
	StyledHeading,
	StyledHeadingWrapper,
	StyledRequirementsWrapper,
} from './reportErrorMessageStyles';
import { useQuery } from '@tanstack/react-query';
import { Loading } from '../loading';

Icon.add({ warning_outlined });

interface ReportErrorMessageProps {
	getErrorMessage: (reportUri: string, signal?: AbortSignal) => Promise<string>;
	reportUri: string;
}

const { Item, Header, Panel } = Accordion;

export const ReportErrorMessage = ({ getErrorMessage, reportUri }: ReportErrorMessageProps) => {
	const {
		data: message,
		isLoading,
		error,
	} = useQuery([reportUri], ({ signal }) => getErrorMessage(reportUri, signal), {
		useErrorBoundary: false,
		suspense: false,
	});

	if (isLoading) {
		return <Loading />;
	}

	if (error) {
		return <div>Failed to load error message</div>;
	}

	return (
		<StyledErrorWrapper>
			<StyledHeadingWrapper>
				<Icon name={'warning_outlined'} color={tokens.colors.interactive.warning__resting.rgba} size={48} />
				<StyledHeading>No access</StyledHeading>
			</StyledHeadingWrapper>
			<StyledErrorCard></StyledErrorCard>

			<StyledAccordionWrapper>
				<Item>
					<Panel>
						<StyledRequirementsWrapper>
							<Markdown>{message ?? ''}</Markdown>
						</StyledRequirementsWrapper>
					</Panel>
				</Item>
			</StyledAccordionWrapper>
		</StyledErrorWrapper>
	);
};
