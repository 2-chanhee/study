enum A {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

// 인터페이스 property type으로 enum선언
interface IA {
  active: A;
}

// IA를 파라미터로 받는 f fn
const f = ({ active }: IA) => active;

// A타입은 정상작동
f({ active: A.ACTIVE });

// // ENUM타입에 STRING을 넣으니 ERROR
// f({ active: "active" });

// string union type의 active
interface IB {
  active: "active" | "inactive";
}

// IB를 파라미터로 받는 f fn
const f2 = ({ active }: IB) => active;
