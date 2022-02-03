/** 유니온 타입(Union Type)
 * 다양한 타입을 하나로 결합해서 모든 기능을 갖춘 단일 타입을 얻는 방식
 * 유니온타입은 모든 타입의 공통적인 멤버에만 접근할 수 있다.
 */

interface Bird {
  fly(): void;
  layEggs(): string;
}

interface Fish {
  swim(): number;
  layEggs(): string;
}

// 리턴타입이 유니온 타입
const getSmallPet = (): Fish | Bird => {
  return;
};

let pet = getSmallPet();
pet.layEggs();
pet.swim(); // 오류, 둘 다 가지고 있어야 함
