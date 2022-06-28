package hansung.designpatterns.factory.pizzaaf;

public class KoreaPizzaStore extends PizzaStore {

    protected Pizza createPizza(String item) {
        Pizza pizza = null;
        PizzaIngredientFactory ingredientFactory =
                new KoreaPizzaIngredientFactory();

        if (item.equals("Kimchi")) {

            pizza = new KimchiPizza(ingredientFactory);
            pizza.setName("Kimchi Pizza");

        }
        return pizza;
    }
}
