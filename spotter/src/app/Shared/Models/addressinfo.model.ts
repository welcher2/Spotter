export class AddressInfo {
    public street: string;
    public city: string;
    public zip: string;
    public state: string;

    constructor(private _street?: string, private _city?: string, private _zip?: string, private _state?: string) {
        this.setStreet(_street);
        this.setCity(_city);
        this.setZip(_zip);
        this.setState(_state);
    }

    setStreet(_street: string = null) {
        this.street = _street;
    }

    setCity(_city: string = null) {
        this.city = _city;
    }

    setZip(_zip: string = null) {
        this.zip = _zip;
    }

    setState(_state: string = null) {
        this.state = this._state;
    }
}