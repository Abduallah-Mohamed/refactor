class Customer {
    constructor(public name: string, public email: string) {
    }
}

class InternetPlan {
    constructor(public planName: string, public speed: number, public price: number) {
    }
}

class InternetService {
    constructor(private customer: Customer, private plan: InternetPlan) {
    }

    getDetails() {
        return `${this.customer.name} is using ${this.plan.planName} plan with speed ${this.plan.speed} and price ${this.plan.price}`;
    }
}


// Create some customers
const customer1 = new Customer("John Doe", "john@example.com");
const customer2 = new Customer("Jane Smith", "jane@example.com");

// Create some internet plans
const plan1 = new InternetPlan("Basic", 10, 29.99);
const plan2 = new InternetPlan("Standard", 50, 49.99);
const plan3 = new InternetPlan("Premium", 100, 79.99);

// Create internet services for customers
const service1 = new InternetService(customer1, plan2);
const service2 = new InternetService(customer2, plan3);

// Display service details
service1.getDetails(); // John Doe is using Standard plan with speed 50 and price 49.99
service2.getDetails(); // Jane Smith is using Premium plan with speed 100 and price 79.99