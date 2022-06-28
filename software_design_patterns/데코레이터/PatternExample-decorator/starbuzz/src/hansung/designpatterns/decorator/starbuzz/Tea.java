package hansung.designpatterns.decorator.starbuzz;

public class Tea extends Beverage {
    public Tea() {
        description = "디카페인 커피";
    }

    public double cost() {
        return 0.5;
    }
}
