/** 타입 별칭
 * 미리 생성해놓고 사용하면 편함
 */
type StrOrNum = number | string;
let totalCost: number;
let orderId: StrOrNum;

let itemPrice: number;

/** Typeof Operator : 변수의 데이터 타입을 반환하는 내장연산자 */
const setItemPrice = (price: StrOrNum):void =>{
    if(typeof price === 'string'){
        itemPrice = 0;
    }else itemPrice = price;
    
}

const calculateTotalCost = (price:number|string, qty:number):void =>{

}

// #1번 함수
const findOrderId = (customer: {customerId:number|string, name: string}, productId: number|string): number|string => {
        return orderId;
    }
//# 1번함수 별칭 사용
const findOrderId2 = (customer: {customerId:StrOrNum, name: string}, productId: StrOrNum): StrOrNum => {
    return orderId;
}

/** 유니온 타입
 * 변수의 타입을 2개 이상 지정할 수 있고
 * 파이프라인(|) 으로 분리한다.
 */
let price: number | string = 5;
price = 'free';

let paramCustomerId = {
    customerId: 3,
    name: 'chanhee'
};

let productId = 3333;


findOrderId(paramCustomerId, productId);
findOrderId2(paramCustomerId, productId);

