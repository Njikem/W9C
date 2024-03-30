
let item_names = ['clothe', 'bag', 'shoe']
let item_prices = [80, 60, 40]
let in_stock = [true, false, true]

let first_item_name = (`${item_names[0]}`);
console.log(first_item_name);

let first_item_price = (`${item_prices[0]}`);

item_names.push('Wraps');
item_prices.push(105);
in_stock.push(false);

let last_item_name = item_names.pop(3);
let last_item_price = item_prices.pop(3);
let last_item_stock = in_stock.pop(3);