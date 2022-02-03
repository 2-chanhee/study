/**
 * Class 선언
 */

class Employee {
    private _fullName: string; //class 외부에서 접근 불가한 private
    age: number;
    jobTitle: string;

    /** 생성자 */
    constructor(fullName: string, age:number, jobTitle:string){
        this._fullName = fullName; // 우측은 전달된 매개변수( 파라미터 )
        this.age = age;
        this.jobTitle = jobTitle;
    }
    /**private 변수를 외부에서 가져올 수 있는 getter 함수 */
    get getFullName () {
        return this._fullName;
    }
    /**private 변수를 외부에서 세팅할 수 있는 setting 함수 */
    set setFullName(value: string){
        this._fullName = value;
    }
    /**
     * 함수 앞에 아무것도 명시 안되어있으면 public
     */
    testFunction = ():void => {
        console.log(`이름은 ${this._fullName}이고 나이는 ${this.age}, 직업은 ${this.jobTitle} `);
    }
}

let employee1 = new Employee('chanhee', 12, '개발자');
employee1.testFunction();

/**
 * Acess Modifiers를 사용해서 생성자를 간단히 만들기
 * Acess Modifiers : private, public
 * this.name = name 등의 코드가 필요 없이
 * 알아서 초기화를 해 준다.
 */
class Employee2 {
    constructor(
        private _fullName: string, //class 외부에서 접근 불가한 private
        private age: number,
        public jobTitle: string
        ){
    }
}