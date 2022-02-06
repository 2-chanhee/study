/**
 * 교차 타입(Intersection Type)
 * 여러 타입을 모두 만족하는 하나의 타입
 */

interface IA {
  name: string;
}

interface IB {
  age: number;
}

// 두 인터페이스의 교차타입으로 리턴
const zz = (name: IA, age: IB): IA & IB => {
  return { ...name, ...age };
};
