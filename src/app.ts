class Coupon {
  static allowed = ['pepperoni', 'blazing inferno'];
  static create(percentage: number) {
    return `PIZZA_RESTAURANT_${percentage}`;
  }
}

console.log(Coupon.create(25));
