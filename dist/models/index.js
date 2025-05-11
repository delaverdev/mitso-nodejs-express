export class User {
    constructor({ id, name, login, password }) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
    }
}
export class Tour {
    constructor({ id, name, description }) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}
export class Schedule {
    constructor({ id, tourId, date, time }) {
        this.id = id;
        this.tourId = tourId;
        this.date = date;
        this.time = time;
    }
}
export class Price {
    constructor({ id, scheduleId, price, currency }) {
        this.id = id;
        this.scheduleId = scheduleId;
        this.price = price;
        this.currency = currency;
    }
}
//# sourceMappingURL=index.js.map