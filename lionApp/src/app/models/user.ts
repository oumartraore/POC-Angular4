export class User {
	public id: number;
	public name: string;
	public phone: string;
	public birthday: Date;

	constructor(id: number, name: string, phone: string, birthdaty: Date) {
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.birthday = birthdaty;
	}
}
