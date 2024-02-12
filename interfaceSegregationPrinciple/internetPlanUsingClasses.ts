// implement ISP by creating separate classes for each entity
interface InternetPlanService {
    getSpeed(): number;
    getPrice(): number;
}

class BasicPlan implements InternetPlanService{
    getSpeed() {
        return 10;
    }
    getPrice() {
        return 100;
    }
}
class StandardPlan implements InternetPlanService{
    getSpeed() {
        return 50;
    }
    getPrice() {
        return 150;
    }
}
class PremiumPlan implements InternetPlanService {
    getSpeed() {
        return 100;
    }
    getPrice() {
        return 200;
    }
}