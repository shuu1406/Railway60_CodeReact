import { Person } from "./Person";
 class Student extends Person {
    private classVTI: string;
    private testScore: number;

    constructor(id: number, name: string, address: string, classVTI: string, testScore: number){
        super(id, name, address);
        this.classVTI = classVTI;
        this.testScore = testScore;
    }
    /**
     * Getter classVTI
     * @return {string}
     */
	public getClassVTI(): string {
		return this.classVTI;
	}

    /**
     * Getter testScore
     * @return {number}
     */
	public getTestScore(): number {
		return this.testScore;
	}

    /**
     * Setter classVTI
     * @param {string} value
     */
	public setClassVTI(value: string) {
		this.classVTI = value;
	}

    /**
     * Setter testScore
     * @param {number} value
     */
	public setTestScore(value: number) {
		this.testScore = value;
	}
    public showInfoStudent(): void {
        super.showInformation();
        console.log("Class:" + this.classVTI);
        console.log("Score:" + this.testScore);
        console.log("=====================");
        
        
        
    }
    public toString(): String {
        var result = `ID: ${super.getId()}, Name: ${super.getName()}, Class: ${this.classVTI},Score: ${this.getTestScore()}`;
        return result;
    }
    }
 function printStudent(student: Student): void {
    console.log("ID:" + student.getId());
    console.log("Name:" + student.getName());
    console.log("Class:" + student.getClassVTI());
    console.log("Score:" + student.getTestScore());
 }
 let printStudent_New = (student: Student) => {
    console.log("ID:" + student.getId());
    console.log("Name:" + student.getName());
    console.log("Class:" + student.getClassVTI());
    console.log("Score:" + student.getTestScore());
 }

 let sum = (a : number, b : number) => {
    return console.log("Sum: " + (a + b));
    
 }

export{Student, printStudent, printStudent_New,sum};