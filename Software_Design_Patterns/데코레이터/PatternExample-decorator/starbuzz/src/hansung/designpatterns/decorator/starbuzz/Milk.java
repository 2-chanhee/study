package hansung.designpatterns.decorator.starbuzz;

public class Milk extends CondimentDecorator {

	public Milk(Beverage beverage) {
		super(beverage);
	}

	public String getDescription() {
		return beverage.getDescription() + ", 밀크";
	}
			//자신이 감싸고 있는 것을 먼저 위임시킴
	public double cost() {
		return .10 + beverage.cost();
	}
}
