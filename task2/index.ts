interface ObjectShape {
  id: number;
  name: string;
  password: string;
}

function updateObjectInArray<T>(
  array: T[],
  key: keyof T,
  value: T[keyof T],
  patch: Partial<T>
) {
  const newArray = [...array].map((item) => {
    if (item[key] === value) {
      return { ...item, ...patch };
    } else {
      return item;
    }
  });
  return newArray;
}

const array: ObjectShape[] = [
  {
    id: 1,
    name: "Danya",
    password: "7653",
  },
  {
    id: 2,
    name: "Dmytro",
    password: "abcd",
  },
  {
    id: 3,
    name: "Anna",
    password: "7653",
  },
  {
    id: 4,
    name: "Anna",
    password: "3421",
  },
];

const result = updateObjectInArray<ObjectShape>(array, "password", "7653", {
  name: "George",
});

console.log(array);
console.log(result);
