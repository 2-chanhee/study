package hansung.designpatterns.decorator.starbuzz;

public class TallSize extends CondimentDecorator {

    public TallSize(Beverage beverage) { super(beverage); }

    public String getDescription() {
        return beverage.getDescription() + ", Tall";
    }

    public double cost() {
        return  beverage.cost();
    }
}