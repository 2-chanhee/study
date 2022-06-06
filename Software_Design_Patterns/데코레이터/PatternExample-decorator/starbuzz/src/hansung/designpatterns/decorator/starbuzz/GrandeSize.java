package hansung.designpatterns.decorator.starbuzz;

public class GrandeSize extends CondimentDecorator {

    public GrandeSize(Beverage beverage) { super(beverage); }

    public String getDescription() {
        return beverage.getDescription() + ", Grande";
    }

    public double cost() {
        return beverage.cost()*2;
    }
}
