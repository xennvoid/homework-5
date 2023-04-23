type ObjectShape = {
    a: number;
    b: string;
    c: number;
};

export function updateObjectInArray<T>(
    initialArray: Array<T>,
    key: keyof T,
    value: T[keyof T],
    patch: Partial<T>
): Array<T> {
    return initialArray.map((item) => {
        if (item[key] === value) {
            item = { ...item, ...patch };
        }
        return item;
    });
}

const arr = [
    { a: 1, b: "2", c: 3 },
    { a: 1, b: "2", c: 3 },
    { a: 1, b: "4", c: 3 },
];

console.log(updateObjectInArray<ObjectShape>(arr, 'b', 2, { c: 2 }));
