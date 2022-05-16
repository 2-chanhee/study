// T: Type, function arg type, return type을 자유롭게 설정할 수 있다.
const testG = <T>(arg: T): T => {
  return arg;
};

console.log(testG<number>(11));
console.log(testG<string>("제네릭.."));

interface testInterface {
  length: number;
}

// 특정 타입에서만 존재하는 generic function
const testI = <T extends testInterface>(arg: T): T => {
  return arg;
};
// type에 맞게 파라미터를 전달해준다.
console.log(testI<testInterface>({ length: 123 }));

type a_ = {
  a: 1234;
};

type b_ = {
  b: 111;
};

// type을 2개 받는 generic function
const testT2 = <T, U>(typeA: T, typeB: U) => {
  return { typeA, typeB };
};

console.log(testT2<string, string>("123", "dd"));
