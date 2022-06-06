package hansung.designpatterns.factory.pizzafm;

public class KoreaPizzaStore extends PizzaStore {

    Pizza createPizza(String item) {
        if (item.equals("korea")) {
            return new KoreaStylePizza();
        } else return null;
    }
}
