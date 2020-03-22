export class VehicleInfo {
    public model: string;
    public make: string;
    public year: string;
    public color: string;
    public licensePlate: string;
    public validId: string;

    constructor(private _model?: string, private _make?: string, private _year?: string, 
        private _color?: string, private _licensePlate?: string, private _validId?: string) {
            this.setModel(_model);
            this.setMake(_make);
            this.setYear(_year);
            this.setColor(_color);
            this.setLicensePlate(_licensePlate);
            this.setValidId(_validId);
    }

    setModel(_model: string = null) {
        this.model = _model;
    }

    setMake(_make: string = null) {
        this.make = _make;
    }

    setYear(_year: string = null) {
        this.year = _year;
    }

    setColor(_color: string = null) {
        this.color = _color;
    }

    setLicensePlate(_licensePlate: string = null) {
        this.licensePlate = _licensePlate;
    }

    setValidId(_validId: string = null) {
        this.validId = _validId;
    }
}