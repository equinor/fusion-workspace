export interface GroupDescriptionFunc<T> {
    (data: T, groupingKey: string): string;
}
