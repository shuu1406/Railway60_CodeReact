import { Person } from "./Person";
 class Mentor extends Person {
    private company: string;
    private experienceYear: number;

    constructor(id: number, name: string, address: string,  company: string, experienceYear: number){
        super(id, name, address);
        this.company = company;
        this.experienceYear = experienceYear;
    }
    /**
     * Getter experienceYear
     * @return {number}
     */
	public getExperienceYear(): number {
		return this.experienceYear;
	}

    /**
     * Setter experienceYear
     * @param {number} value
     */
	public setExperienceYear(value: number) {
		this.experienceYear = value;
	}

    /**
     * Getter company
     * @return {string}
     */
	public getCompany(): string {
		return this.company;
	}

    /**
     * Setter company
     * @param {string} value
     */
	public setCompany(value: string) {
		this.company = value;
	}

    }
    
       


export{Mentor};