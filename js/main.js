let itemsWrap = document.querySelector('.total-items');
items.forEach(item => {
	itemsWrap.innerHTML += ` <div class="item-wrap">
	<a href="#" class="item">
					<div class="item-main">
						<div class="image">
							<img src="images/${item.imgUrl}" alt="iPhone image">
						</div>
						<div class="description">
							<h3 class="title">${item.name}</h3>
							<div class="in_stock">
								<span class="quantity">${item.orderInfo.inStock}</span>
								<span class="text">left in stock</span>
							</div>
							<div class="price">
								<span class="price-text">Price</span>
								<span class="price-num">${item.price}</span>
								<span class="price-sign">$</span>
							</div>
							<button class="btn-add" type="submit">Add to cart</button>
						</div>
					</div>
					<div class="item-footer">
						<div class="reviews">
							<div class="top-reviews">
								<span class="reviews-numbers">${item.orderInfo.reviews}%</span>
								<span class="reviews-text">Positive reviews</span>
							</div>
							<div class="buttom-reviews">Above average</div>
						</div>
						<div class="orders">
							<div class="orders-numbers">1,327</div>
							<div class="orders-text">orders</div>
						</div>
					</div>
				</a>
	</div>
	`
});