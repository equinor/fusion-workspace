import { Handover } from '../../../types';
import { ItemOptions, WarningIcon } from '../HandoverGardenItem';

import {
	PopoverContainer,
	ProjectTitle,
	ProjectDescription,
	CommStatus,
	IconsContainer,
	WarningContainer,
	WarningText,
	FlagUnsignedAction,
	Statuses,
	Status,
} from './popoverContent.styles';
import { FlagIcon } from './FlagIcon';
import { SizeIcons } from './SizeIcons';

type PopoverContentProps = {
	data: Handover;
	itemOptions: ItemOptions;
};
export const PopoverContent = ({
	data,
	itemOptions: { barColor, commStatusColor, mcPackageColor, showWarningIcon, size, status, textColor },
}: PopoverContentProps) => {
	return (
		<PopoverContainer>
			<ProjectTitle>Project (ProCoSys)</ProjectTitle>
			<p>
				{data.projectIdentifier}, {data.projectDescription}
			</p>
			<ProjectDescription>{data.description}</ProjectDescription>
			<hr />
			<CommStatus barColor={barColor} textColor={textColor}>
				<strong>{`Milestone: ${status}`}</strong>
				<span>
					<SizeIcons status={status} size={size} />

					<strong> {`Volume: ${data.volume} (${size})`}</strong>
				</span>
			</CommStatus>
			<IconsContainer>
				{showWarningIcon && (
					<WarningContainer>
						<WarningIcon />
						<WarningText>
							<strong>NB:</strong>
							<p>RFCC with MC status OS</p>
						</WarningText>
					</WarningContainer>
				)}
				{data.hasUnsignedActions && (
					<FlagUnsignedAction>
						<FlagIcon color={textColor} /> <p>Unsigned actions</p>
					</FlagUnsignedAction>
				)}
			</IconsContainer>
			<Statuses>
				<h5>MC status</h5>
				<Status color={mcPackageColor}>
					{['OS', 'OK', 'PA'].includes(data.mcStatus) ? data.mcStatus : 'PB'}
				</Status>

				<h5>CommPkg status</h5>
				<Status color={commStatusColor}>
					{['OS', 'OK', 'PA'].includes(data.commpkgStatus) ? data.commpkgStatus : 'PB'}
				</Status>
			</Statuses>
		</PopoverContainer>
	);
};

export type Status =
	| 'PA'
	| 'PB'
	| 'RFOC Accepted'
	| 'RFOC Sent'
	| 'RFOC Rejected'
	| 'TAC Accepted'
	| 'TAC Sent'
	| 'TAC Rejected'
	| 'RFCC Rejected'
	| 'RFCC Accepted'
	| 'RFCC Sent'
	| 'DCC Accepted'
	| 'DCC Sent'
	| 'RFRC Accepted'
	| 'RFRC Sent'
	| 'OS'
	| 'No status'
	| 'OK';
