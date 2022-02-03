/**
 * 함수의 반환 타입
 * function 함수이름(매개변수1, 매개변수2): 함수의 반환 타입{  }   
 */

/**
 * void 타입
 * 아무것도 반환하지 않는 함수의 반환 값으로만 사용될 수 있는 타입
 * ?는 선택적 매개변수로서 인자에 포함하지 않아도 된다.
 * ?뒤에 나타나는 매개변수는 모두 선택적 매개변수로 인식되기 때문에
 * 선택적 매개변수는 필수 매개변수의 뒤에 위치해야만 한다.
 * 
 * userName 매개변수를 전달하지 않아도 기본값을 넣어 세팅이 가능하다.
 */
function sendGreeting(message: string, userName = '기본값', num?: number): void{
    console.log(`${message}, ${userName}`);
}

sendGreeting('Hello');

// 위 함수 arrow function으로 변경
const sendGreeting2 = (message: string, userName = '기본값', num?: number):void => {
    console.log(`${message}, ${userName}`);
}

sendGreeting2('Hello');
let arr :number[];
const testFunction = ():void => {
    for(let i=0; i< 100000; i++){
        console.log(i);
    }
}
testFunction();

function te(){
    console.log('dddddldldldldldldldldldld')
}
te();

