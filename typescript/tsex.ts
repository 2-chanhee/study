/**변수 선언 */

let num: number|string = 3;
num = 'eeeeee';
console.log(num);

/** 함수 선언 number Type */
const add = (a: number,b: number): number => {
    return a+b;
}
/** 함수 선언 void Type */
const voidFn = ():void => {
    console.log('void function');
}
let resultNum: number = add(1,3);
console.log(resultNum);
voidFn();

/** class 선언 */
class School {
    private _schoolName: string;
    private _year: number;
    private _size: number;

    constructor(schoolName: string, year: number, size: number){
        this._schoolName = schoolName;
        this._year = year;
        this._size = size;
    }
    get getSchoolName(){
        return this._schoolName;
    }
    
    set setSchoolName(schoolName: string){
        this._schoolName = schoolName;
    }

    schoolFn = ():void => {
        console.log(`학교이름은 ${this._schoolName}, 연도는 ${this._year}, 크기는 ${this._size} 입니다.`)
    } 

    returnOkFn = (year: number):number|string =>{
        return year+1000;
    }
}

let schoolOne = new School('한성대학교', 1995, 10002);
console.log(schoolOne);
console.log(schoolOne.getSchoolName);
let result = schoolOne.returnOkFn(1000);
console.log(result);

/** enum 선언 */
enum animalType {
    Male = 'male',
    Female = 'female'
};

/** interface 정의 */
interface Animal {
    type: string,
    age: number,
    size: string|number
}

/** Animal interface를 파라미터로 받는 함수  */
const saveAnimalDetails = ( animalDetail: Animal): void => {
    
}

/** 함수에서 디테일 파라미터를 전달하기 */
saveAnimalDetails(
    {
        type: 'cat',
        age: 12,
        size: 100
    }
)

/** Animal interface를 구현하는 TestClass */
class TestClass implements Animal{
    type: string;
    age: number;
    size: string | number;
    constructor(type: string, age: number, size: string|number){
        this.type=type;
        this.age=age;
        this.size=size;
    }
    set setTestClassAge(param: number){
        this.age = param;
    }
}

let testClass2 = new TestClass('cat2222', 23, 10000);
console.log(testClass2.age);

/** 이거 왜안되징 */
// testClass2.setTestClassAge(12345);






