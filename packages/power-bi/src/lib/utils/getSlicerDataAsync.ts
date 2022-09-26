import { VisualDescriptor } from 'powerbi-client';

export const getSlicerDataAsync = async (slicer: VisualDescriptor) => {
	const { data } = await slicer.exportData();
	const filter = (await slicer.getFilters()).at(0);

	return { data, filter, slicer };
};
