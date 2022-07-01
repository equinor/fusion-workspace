Parkview consists of both Tree view and Garden view

A garden is just a horizontal row of multiple trees. Garden groups its first row on garden key which is a horizontal grouping, rest is vertical grouping.

Group Description Function:
Pass in a function that returns a description for the group. Useful in cases where the name of the group is not descriptive enough. 
API calls are not recommended
Example:

function groupDescriptionFunc(data: Loop, groupingKey: string): string {
    switch (groupingKey) {
        case 'description':
            return data['commPk'];
        default:
            return '+';
    }
}

Custom Item View:
Declare a custom item view that overrides the default

Custom Group View:
Declare a custom group view that overrides the default

Item Description Function:
Not implemented yet

Group Status Function:
A function that takes in group data and lets you define a custom status for the group. Same as Item status function just for group. Providing this function will override ShouldAggregate flag

Item Status Function:
A function that takes in data and returns a JSX.Element to be shown next to the name. The lowest rating is the worst status. If shouldAggregate flag is set to true. The worst rating is applied to the parent group

example:
function statusItemFunc<T>(data: T): Status {
    switch (data['status']) {
        case 'OK':
            return { rating: 4, status: 'Good', statusElement: <StatusDot color={'green'} /> };

        case 'OS':
            return { rating: 3, status: 'Medium', statusElement: <StatusDot color={'blue'} /> };

        case 'PB':
            return { rating: 2, status: 'Bad', statusElement: <StatusDot color={'yellow'} /> };

        case 'PA':
            return { rating: 1, status: 'Bad', statusElement: <StatusDot color={'red'} /> };

        default:
            return {
                status: 'Default',
                rating: 0,
                statusElement: <StatusDot color={'black'} />,
            };
    }
}