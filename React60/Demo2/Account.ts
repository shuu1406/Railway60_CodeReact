class Account {
    private id: number;
    private email: string;
    private username: string;
    private password: string;
    constructor(id: number, email: string, username: string, password){
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    /**
     * Getter id
     * @return {number}
     */
	public getId(): number {
		return this.id;
	}

    /**
     * Getter email
     * @return {string}
     */
	public getEmail(): string {
		return this.email;
	}

    /**
     * Getter username
     * @return {string}
     */
	public getUsername(): string {
		return this.username;
	}

    /**
     * Getter password
     * @return {string}
     */
	public getPassword(): string {
		return this.password;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public setId(value: number) {
		this.id = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public setEmail(value: string) {
		this.email = value;
	}

    /**
     * Setter username
     * @param {string} value
     */
	public setUsername(value: string) {
		this.username = value;
	}

    /**
     * Setter password
     * @param {string} value
     */
	public setPassword(value: string) {
		this.password = value;
	}
    
}
export{Account};
