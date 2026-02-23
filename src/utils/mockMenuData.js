// utils/mockMenuData.js
const mockMenuData = {
  data: {
    name: "Pizza Hut",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    cuisines: ["Pizzas", "Fast Food"],
    cards: [
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      title: "Recommended",
                      itemCards: [
                        { card: { info: { id: "1", name: "Margherita Pizza", price: 29900, description: "Classic tomato and cheese" }}},
                        { card: { info: { id: "2", name: "Pepperoni Pizza", price: 39900, description: "Loaded with pepperoni" }}},
                        { card: { info: { id: "3", name: "BBQ Chicken", price: 45900, description: "Smoky BBQ sauce with chicken" }}},
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      }
    ]
  }
}

export default mockMenuData