---
title: 'Filter options'
description: 'Lorem ipsum dolor sit amet - 2'
---

## Configuration

Filter options will give you a a visual filter with two modes `quick` and `advanced`. The quick filter is always visible and can be turned into advanced mode by toggling a button.

### Filter groups

A list of filter groups to be used in filtering.

`Since filter is generic, we will use the type below for the examples`

```ts
/**
 * @example - type
 */
type Person = {
	id: string;
	name: string;
	age: number;
	gender: 'male' | 'female';
	isAdult: boolean;
};
```

### Name

Name of the filter

```ts
/**
 * @example - name
 *
 */

const filterGroup: FilterConfiguration<Person> = {
	name: 'id',
};
```

### Value formatter

A function that takes in your type as the first argument and returns a string | number | boolean | null.

```ts
/**
 * @example - Value formatter basic
 */
const filterGroup: FilterConfiguration<Person> = {
	name: 'id',
	valueFormatter: (person: Person) => person.id,
};

/**
 * @example - Value formatter advanced
 * Returns a range for the age
 */
const filterGroup: FilterConfiguration<Person> = {
	name: 'Age range',
	valueFormatter: (person: Person) => {
		const age = person.age;

		switch (true) {
			case age <= 10:
				return '0-10';
			case age <= 20:
				return '11-20';
			case age <= 30:
				return '21-30';
			case age <= 50:
				return '31-50';
			default:
				return '51-100';
		}
	},
};
```

### Custom value render (optional)

```ts
/**
 * @example -
 */
```

### Default hidden (optional)

```ts
/**
 * @example - hidden
 *  Will hide it from the quick & advanced filter.
 * User will have to toggle its visibility through the menu.
 */
const filterGroup: FilterConfiguration<Person> = {
	name: 'id',
	valueFormatter: (person: Person) => person.id,
	defaultHidden: true,
};
```

### Default unchecked values (optional)

```ts
/**
 * @example - defaultUncheckedValues
 *  Used to filter values by default on first render
 *  Will render the filter male checkbox as unchecked by default
 */
const filterGroup: FilterConfiguration<Person> = {
	name: 'gender',
	valueFormatter: (person: Person) => person.gender,
	defaultHidden: true,
	defaultUncheckedValues: ['male'],
};
```

### Is quick filter (optional)

```ts
/**
 * @example - QuickFilter
 * Defines a filtergroup to be shown in the slim quickfilter
 */
const filterGroup: FilterConfiguration<Person> = {
	name: 'id',
	valueFormatter: (person: Person) => person.id,
	isQuickFilter: true,
};
```

### Sort (optional)

```ts
/**
 * @example - sort
 * Defines a custom way of sorting values
 */
const filterGroup: FilterConfiguration<Person> = {
	name: 'Is adult',
	valueFormatter: (person: Person) => person.isAdult,
	isQuickFilter: true,
	sort: (values) => values.sort(sortOnYesNo),
};

function sortOnYesNo(a: FilterValueType, b: FilterValueType) {
	return b === 'No' ? -1 : 1;
}
```
