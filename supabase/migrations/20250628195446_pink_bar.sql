/*
  # Populate menu data for Tasty Grill

  1. Menu Categories
    - Pizza
    - Kebabs
    - Burgers
    - Chicken
    - Starters
    - Dips
    - Drinks & Desserts
    - Kids Meals
    - Meal Deals
    - Doners
    - Chicken Strips

  2. Menu Items
    - All items from the provided menu with proper categorization
    - Prices set according to the menu
    - Multiple size options where applicable
*/

-- Insert menu categories
INSERT INTO menu_categories (name, description, display_order) VALUES
('Pizza', 'Freshly made pizzas with quality toppings', 1),
('Kebabs', 'Authentic kebabs cooked on charcoal grill', 2),
('Burgers', 'Juicy burgers made to order', 3),
('Chicken', 'Crispy chicken wings and nuggets', 4),
('Starters', 'Perfect appetizers to start your meal', 5),
('Dips', 'Delicious sauces and dips', 6),
('Drinks & Desserts', 'Refreshing drinks and sweet treats', 7),
('Kids Meals', 'Perfect portions for little ones', 8),
('Meal Deals', 'Great value combination meals', 9),
('Doners', 'Traditional doner meat and chips', 10),
('Chicken Strips', 'Tender chicken strips with chips', 11);

-- Get category IDs for reference
DO $$
DECLARE
    pizza_id uuid;
    kebab_id uuid;
    burger_id uuid;
    chicken_id uuid;
    starter_id uuid;
    dip_id uuid;
    drink_id uuid;
    kids_id uuid;
    meal_id uuid;
    doner_id uuid;
    strip_id uuid;
BEGIN
    SELECT id INTO pizza_id FROM menu_categories WHERE name = 'Pizza';
    SELECT id INTO kebab_id FROM menu_categories WHERE name = 'Kebabs';
    SELECT id INTO burger_id FROM menu_categories WHERE name = 'Burgers';
    SELECT id INTO chicken_id FROM menu_categories WHERE name = 'Chicken';
    SELECT id INTO starter_id FROM menu_categories WHERE name = 'Starters';
    SELECT id INTO dip_id FROM menu_categories WHERE name = 'Dips';
    SELECT id INTO drink_id FROM menu_categories WHERE name = 'Drinks & Desserts';
    SELECT id INTO kids_id FROM menu_categories WHERE name = 'Kids Meals';
    SELECT id INTO meal_id FROM menu_categories WHERE name = 'Meal Deals';
    SELECT id INTO doner_id FROM menu_categories WHERE name = 'Doners';
    SELECT id INTO strip_id FROM menu_categories WHERE name = 'Chicken Strips';

    -- Insert Pizza items
    INSERT INTO menu_items (category_id, name, description, price_small, price_medium) VALUES
    (pizza_id, 'Margherita', 'Cheese & tomato', 7.00, 9.50),
    (pizza_id, 'Ham & Mushroom', NULL, 8.00, 10.00),
    (pizza_id, 'Hawaiian', 'Ham & pineapple', 8.00, 10.00),
    (pizza_id, 'Farm House', 'Ham, mushrooms & sweetcorn', 8.50, 10.50),
    (pizza_id, 'Texas Pizza', 'BBQ base, chicken, mushrooms & onions', 8.50, 10.50),
    (pizza_id, 'Just Pepperoni', 'Double pepperoni', 8.00, 10.00),
    (pizza_id, 'Veggie Delight', 'Mushrooms, onions, tomato, sweetcorn & peppers', 8.50, 10.50),
    (pizza_id, 'Pepperoni Plus', 'Double pepperoni, mushrooms & peppers', 8.50, 10.50),
    (pizza_id, 'Fifth Avenue', 'Double beef, onions, mushrooms & peppers', 8.50, 10.50),
    (pizza_id, 'Brooklyn', 'Double chicken, mushrooms & sweetcorn', 8.50, 10.50),
    (pizza_id, 'Seafood Delight', 'Tuna, onions & mushrooms', 8.50, 10.50),
    (pizza_id, 'Hot Pizza', 'Chicken, beef, mushrooms, onions & jalapeno', 8.50, 10.50),
    (pizza_id, 'Mexican', 'Beef, pepperoni, jalapeño, peppers & onions', 9.00, 11.00),
    (pizza_id, 'Meat Feast', 'Ham, pepperoni, beef & chicken', 9.00, 11.00),
    (pizza_id, 'Kebabish', 'Doner meat, onions, mushrooms & peppers', 9.00, 11.00),
    (pizza_id, 'Chicken Supreme', 'Chicken Breast, Mushrooms, Sweetcorn', 8.50, 10.50),
    (pizza_id, 'Supreme', 'Chicken Breast, Black Olives, Beef, Pepperoni, Red Onion, Peppers', 9.50, 11.50),
    (pizza_id, 'Create Your Own Pizza', '4 any Toppings', 9.00, 11.00),
    (pizza_id, 'Seafood', NULL, 8.50, 10.50),
    (pizza_id, 'Vegetarian Hot', NULL, 8.50, 10.50),
    (pizza_id, 'BBQ Chicken', NULL, 8.50, 10.50);

    -- Insert Garlic Bread items (under Pizza category)
    INSERT INTO menu_items (category_id, name, description, price_small) VALUES
    (pizza_id, 'Garlic Bread', '4 Pcs Garlic Bread', 3.00),
    (pizza_id, 'Garlic Bread with Cheese', '4 Pcs Garlic Bread with Cheese', 4.00),
    (pizza_id, 'Garlic Pizza Bread With Cheese', '9"', 7.00);

    -- Insert Kebab items
    INSERT INTO menu_items (category_id, name, description, price_medium, price_large) VALUES
    (kebab_id, 'Lamb Doner', 'Specially prepared lamb, roasted on an oven spit', 7.90, 9.90),
    (kebab_id, 'Lamb Shish', 'Cubes of filleted lamb marinated in olive oil, lemon juice, herbs & seasoning cooked on a charcoal grill', 8.90, 12.00),
    (kebab_id, 'Shish Kofte', 'Minced lamb prepared with variety of spices & herbs skewered & cooked on a charcoal grill', 8.50, 11.00),
    (kebab_id, 'Chicken Shish', 'Cubes of specially prepared chicken skewered & cooked on charcoal grill', 8.50, 11.00),
    (kebab_id, 'Chicken Doner', NULL, 8.00, 10.00);

    -- Insert special kebab items
    INSERT INTO menu_items (category_id, name, description, price_small) VALUES
    (kebab_id, 'Chicken Special', NULL, 11.90),
    (kebab_id, 'Mixed Grill', NULL, 16.00),
    (kebab_id, 'House Special (For 2 People)', 'A skewered lamb shish, 1 chicken shish, 1 kofte kebab, lamb doner served with cooked onions, mushrooms, peppers 2 pitta bread & 2 pot dips', 26.00);

    -- Insert Combination Kebabs
    INSERT INTO menu_items (category_id, name, description, price_small) VALUES
    (kebab_id, 'Lamb Doner & Chicken Doner', NULL, 11.00),
    (kebab_id, 'Lamb Shish & Lamb Doner', NULL, 11.00),
    (kebab_id, 'Kofte & Chicken Doner', NULL, 11.00),
    (kebab_id, 'Make Your Own', NULL, 11.00);

    -- Insert Kebab Wraps
    INSERT INTO menu_items (category_id, name, description, price_small) VALUES
    (kebab_id, 'Lamb Doner Wrap', NULL, 8.00),
    (kebab_id, 'Lamb Shish Wrap', NULL, 8.50),
    (kebab_id, 'Chicken Shish Wrap', NULL, 8.50),
    (kebab_id, 'Kofte Wrap', NULL, 8.50),
    (kebab_id, 'Chicken Doner Wrap', NULL, 8.00);

    -- Insert Burger items
    INSERT INTO menu_items (category_id, name, description, price_small, price_medium) VALUES
    (burger_id, 'Burger', 'Quarter Pounder Burger', 5.20, 6.20),
    (burger_id, 'Cheese Burger', 'Quarter Pounder Burger', 5.40, 6.40),
    (burger_id, 'Mushroom Burger', 'Quarter Pounder Burger', 5.60, 6.60),
    (burger_id, 'Egg Burger', 'Quarter Pounder Burger', 5.60, 6.60),
    (burger_id, 'Veggie Burger', 'Quarter Pounder Burger', 5.20, 6.20),
    (burger_id, 'Chicken Burger', 'Quarter Pounder Burger', 5.20, 6.20),
    (burger_id, 'Special Burger', 'Quarter Pounder Burger', 6.70, 8.20),
    (burger_id, 'Bacon Burger', 'Quarter Pounder', 6.20, 7.20);

    -- Insert Chicken items
    INSERT INTO menu_items (category_id, name, description, price_small) VALUES
    (chicken_id, '6 Pcs Wings & Chips', NULL, 6.90),
    (chicken_id, '10 Pcs Wings & Chips', NULL, 8.90),
    (chicken_id, '6 Pcs Chicken Nuggets & Chips', NULL, 5.90),
    (chicken_id, '10 Pcs Chicken Nuggets & Chips', NULL, 7.90);

    -- Insert Starter items
    INSERT INTO menu_items (category_id, name, description, price_small) VALUES
    (starter_id, 'Mixed Salad', NULL, 3.00),
    (starter_id, 'Pot Humus', NULL, 3.50),
    (starter_id, 'Pot Taztziki (Cacik)', NULL, 2.80),
    (starter_id, 'Coleslaw', NULL, 2.80),
    (starter_id, 'Garlic Mushrooms (10)', NULL, 3.90),
    (starter_id, 'Onion Rings (10)', NULL, 4.00),
    (starter_id, 'Potato Wadges & Dip', NULL, 4.80),
    (starter_id, 'Medium Chips', NULL, 3.60),
    (starter_id, 'Large Chips', NULL, 3.90),
    (starter_id, 'Cheesy Chips', NULL, 4.80),
    (starter_id, '8 pcs Mozzarella sticks', NULL, 5.40),
    (starter_id, '8 pcs Jalapeno Cream Cheese', NULL, 5.40),
    (starter_id, 'Chips in Pitta Bread', NULL, 4.00);

    -- Insert Dip items
    INSERT INTO menu_items (category_id, name, description, price_small) VALUES
    (dip_id, 'Ketchup', NULL, 1.00),
    (dip_id, 'Mayo', NULL, 1.00),
    (dip_id, 'Garlic Mayo', NULL, 1.00),
    (dip_id, 'Chilli Sauce', NULL, 1.00),
    (dip_id, 'Brown Sauce', NULL, 1.00),
    (dip_id, 'BBQ Sauce', NULL, 1.00);

    -- Insert Drinks & Desserts
    INSERT INTO menu_items (category_id, name, description, price_small) VALUES
    (drink_id, 'Coca-Cola', 'Can', 1.50),
    (drink_id, 'Diet Coca-Cola', 'Can', 1.50),
    (drink_id, 'Fanta', 'Can', 1.50),
    (drink_id, 'Pepsi', 'Can', 1.50),
    (drink_id, '7up', 'Can', 1.50),
    (drink_id, 'Coke', 'Bottle', 3.50),
    (drink_id, 'Diet Coke', 'Bottle', 3.50),
    (drink_id, 'Fanta', 'Bottle', 3.50),
    (drink_id, 'Sprite', 'Bottle', 3.50),
    (drink_id, 'Carrot Cake', NULL, 3.50),
    (drink_id, 'Chocolate Fudge Cake', NULL, 3.50),
    (drink_id, 'Bottle Of Water', NULL, 1.20),
    (drink_id, 'Strawberry Cheese Cake', NULL, 3.50),
    (drink_id, 'Ben & Jerry''s (500ml)', 'Ice Cream', 7.00),
    (drink_id, 'Haagen Dazs (500ml)', 'Ice Cream', 7.00);

    -- Insert Kids Meals
    INSERT INTO menu_items (category_id, name, description, price_small) VALUES
    (kids_id, 'Kids 4 Chicken Nuggets', NULL, 6.00),
    (kids_id, 'Kids Burger', NULL, 6.50),
    (kids_id, 'Kids Doner Meat', NULL, 6.50),
    (kids_id, 'Kids Chicken Burger', NULL, 6.50),
    (kids_id, '9" Kids Margherita pizza', NULL, 7.50);

    -- Insert Chicken Strips
    INSERT INTO menu_items (category_id, name, description, price_small) VALUES
    (strip_id, '2pcs Chicken Strips & Chips', NULL, 4.50),
    (strip_id, '3pcs Chicken Strips & Chips', NULL, 5.50),
    (strip_id, '4pcs Chicken Strips & Chips', NULL, 7.00),
    (strip_id, '5pcs Chicken Strips & Chips', NULL, 8.00);

    -- Insert Meal Deals
    INSERT INTO menu_items (category_id, name, description, price_small) VALUES
    (meal_id, 'Meal 1 - Coleslaw', 'Any 2x 9" Pizza, Chips, Coleslaw And Can Drink', 16.00),
    (meal_id, 'Meal 1 - Tzatziki', 'Any 2x 9" Pizza, Chips, Tzatziki And Can Drink', 16.00),
    (meal_id, 'Meal 2 - Coleslaw', 'Any 2x 12" Pizza, 2x Chips, Coleslaw And Bottle Drink', 26.00),
    (meal_id, 'Meal 2 - Tzatziki', 'Any 2x 12" Pizza, 2x Chips, Tzatziki And Bottle Drink', 26.00),
    (meal_id, 'Meal 3', 'Chicken Wrap Chips And Can', 11.00),
    (meal_id, 'Meal 4', '1/2 Beef Burger Chips And Can', 9.50),
    (meal_id, 'Meal 5', 'Chicken Wings 6 Pcs Chips And Can', 8.80);

    -- Insert Doner items
    INSERT INTO menu_items (category_id, name, description, price_small) VALUES
    (doner_id, 'Lamb Doner Meat & Chips', NULL, 8.50),
    (doner_id, 'Chicken Doner Meat & Chips', NULL, 8.50),
    (doner_id, 'Tray Of Doner Meat', NULL, 7.50),
    (doner_id, 'Tray Of Chicken Doner', NULL, 8.00);

END $$;