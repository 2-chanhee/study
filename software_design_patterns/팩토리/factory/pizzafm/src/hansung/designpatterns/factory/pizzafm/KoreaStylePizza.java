package hansung.designpatterns.factory.pizzafm;

public class KoreaStylePizza extends Pizza {
    public KoreaStylePizza() {
        name = "Korea Style Sauce and Garlic Pizza";
        dough = "Thin Dough";
        sauce = "Mayonnaise Sauce";

        toppings.add("Parmesan cheese");
    }
}
