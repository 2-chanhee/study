/**
 * TypeScript는 JavaScript의 SuperSet
 * JS에서 사용하는 모든 것을 TS에서 사용할 수 있다.
 * 타입을 지정해 변수를 선언할 수 있으며 
 * 이는 에러를 줄여주고 리팩토링을 수월하게 한다.
 */

/** type을 명시해서 변수 선언 */
let studentId: number = 12345;
let studnetName: String ='k';
let age: number = 21;

/** 파라미터에서도 type 명시가 가능하다
 * :void -> 아무것도 반환하지 않는다는 뜻
*/
function returnVoid():void{
    console.log('returnVoid');
}
returnVoid();

/** enum 정의 (String enum)
 * 연관된 아이템들을 함께 묶어서 표현할수 있는 수단
 */
enum GenderType{
    Male = 'male',
    FeMale = 'femail',
    genderNa = 'genderNa'
}

/** 리터럴 타입 */



/** 인터페이스 정의 */
interface Student {
    studentId: number;
    studentName: string;
    courseComplted: boolean;
    age?: number; // ?을 사용하면 꼭 구현하지 않아도 된다.
    gender?: 'male' | 'female'

}
/**
 * 인터페이스를 타입으로 가질 수 있다.
 */
function getStudentDetails(studentId: number): Student{
    /** 리턴되는 부분도 인터페이스 타입으로 해준다. */
    return{  
        studentId: 1,
        studentName: '22',
        courseComplted: true,
        gender: GenderType.Male
    }
    
};

/** Student 인터페이스를 타입으로 가지는 student 파라미터 */
function saveStudentDetails (student: Student): void{

}

/** Student 타입에 맞춰 파라미터를 넣어준다. */
saveStudentDetails({
    studentId: 123123123,
    studentName: 'chanhee',
    courseComplted: false,
    age: 30 
})


/** 인터페이스 내에서 function 정의하기 */
interface Student2 {
    readonly studentId: number; // readonly : 변경불가속성
    studentName: string;
    courseComplted: boolean;
    age?: number; // ?을 사용하면 꼭 구현하지 않아도 된다.
    //addComment (comment: string): string; //일반fun 맨뒤 string이 반환 타입이다.
    addComment?: (comment: string) => string; //arr fun
}






