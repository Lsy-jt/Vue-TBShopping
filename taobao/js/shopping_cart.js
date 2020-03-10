var app = new Vue({
	el: '#shop_car',
	data() {
		return {
			i:0,
			goods: [{
					shop_name: '金大班清新实用主义',
					url: 'img/店铺.png',
					href: 'https://cocoessence.tmall.com',
					discount: ['2件9.8折'],
					all_checked: false,
					list: [{
							product_name: '牛仔裤女2019秋冬新款高腰加绒加厚百搭显瘦显宽松薄绒直筒裤子',
							product_description: '空喷买2送',
							url: 'img/kuzi.png',
							href: 'https://detail.tmall.com/item.htm?spm=a1z0d.6639537.1997196601.4.ff9a7484vD2sXY&id=527905990976',
							edit_type: false,
							product_type: [{
									id: 1,
									key: '尺寸',
									value: '26'
								},
								{
									id: 2,
									key: '颜色分类',
									value: '复古蓝九分裤'
								}
							],
							
							current_price: 119.80,
							origin_price: 159.00,
							number: 0,
							product_checked: false,
						},
						{
							product_name: '金大班绮梦2019秋冬新款韩版立领连帽面包棉服棉衣外套女加厚中长款',
							product_description: '普通商品',
							url: 'img/yifu.png',
							href: 'https://detail.tmall.com/item.htm?spm=a1z0d.6639537.1997196601.13.6e517484kyYSnq&id=39252128018',
							edit_type: false,
							product_type: [{
									id: 1,
									key: '颜色分类',
									value: '复古红',
								},
								{
									id: 2,
									key: '尺码',
									value: 'S',
								}
							],
							current_price: 336.80,
							origin_price: 398.00,
							number: 0,
							product_checked: false,
						}
					]
				},
				{
					shop_name: '花西子旗舰店',
					url: 'img/店铺2.png',
					href: 'https://hermanmiller.tmall.com/',
					discount: [],
					all_checked: false,
					list: [{
						product_name: '花西子雕花口红/微雕唇膏女半哑光正红烂番茄色李佳琦推荐中国风',
						product_description: '空喷买2送',
						url: 'img/kouhong.png',
						href: 'https://detail.tmall.com/item.htm?spm=a1z0d.6639537.1997196601.4.ff9a7484vD2sXY&id=527905990976',
						edit_type: false,
						product_type: [{
							id: 1,
							key: '颜色分类',
							value: 'M123伯牙绣（宝石缨红）'
						}],
						current_price: 229.00,
						origin_price: 0,
						number: 0,
						product_checked: false,
					}]
				},
				{
					shop_name: 'KOHNAN海外旗舰店',
					url: 'img/店铺.png',
					href: 'https://jiashiyoudq.tmall.com/',
					discount: [],
					all_checked: false,
					list: [{
						product_name: '日本花王kao直供liese莉洁泡沫染发剂影视灰粽22色可选保税区发货',
						product_description: '空喷买2送',
						url: 'img/ranfa.png',
						href: 'https://jiashiyoudq.tmall.com/',
						edit_type: false,
						product_type: [{
								id: 1,
								key: '颜色分类',
								value: '雅典巧克力'
							},
							{
								id: 2,
								key: '套餐类型',
								value: '官方标配'
							}
						],
						current_price: 69.00,
						origin_price: 350.00,
						number: 0,
						product_checked: false,
					}]
				},
				{
					shop_name: '嘉怡影音专营店',
					url: 'img/店铺.png',
					href: 'https://chaoshi.tmall.com',
					discount: ['全场大促销'],
					all_checked: false,
					list: [{
						product_name: '华为无线蓝牙耳机P20 P30 Pro容易双耳V10 8x入耳式专用原装正品',
						product_description: '超值换购活动',
						url: 'img/erji.png',
						href: 'https://chaoshi.tmall.com',
						edit_type: false,
						product_type: [{
							id: 1,
							key: '颜色分类',
							value: '皓月白【按键板】'
						}],
						current_price: 225.90,
						origin_price: 0,
						number: 0,
						product_checked: false,
					}]
				}
			],
			//其他属性数据
			checked_all: false
		}
	},
	methods: {
		l(type){
				this.i=type;
				console.log(this.i)
		},
		// 结算
		shop_settle() {
			alert('支付成功')
		},

		// 鼠标移入分类信息显示编辑按钮
		enter(shop_index, product_index) {
			this.goods[shop_index].list[product_index].edit_type = true;
		},

		// 鼠标移出分类信息隐藏编辑按钮
		leave(shop_index, product_index) {
			this.goods[shop_index].list[product_index].edit_type = false;
		},

		// 商品总价
		product_total_price(shop_index, product_index) {
			var product = this.goods[shop_index].list[product_index]
			return product.number * product.current_price
		},

		// 减购商品，每次减少1
		product_reduce(shop_index, product_index) {
			var product = this.goods[shop_index].list[product_index]
			if ((product.number - 1)) {
				product.number--
			}
		},

		// 加购，每次加1
		product_add(shop_index, product_index) {
			var product = this.goods[shop_index].list[product_index]
			if ((product.number + 1) < 100) {
				product.number++
			}
		},

		// 删除购买商品
		product_del(shop_index, product_index) {
			alert('确认将这1个宝贝删除？')
			this.goods[shop_index].list[product_index].number=0
			// this.goods[shop_index].list.splice(product_index, 1)
		},

		// 店铺下属商品全部选择时
		shop_all_check(shop_index) {
			var shop = this.goods[shop_index]
			shop.all_checked = !shop.all_checked
			for (var i = 0; i < shop.list.length; i++) {
				shop.list[i].product_checked = shop.all_checked;
			}
		},

		// 商品选择时
		product_checked_click(shop_index, product_index) {
			var product = this.goods[shop_index].list[product_index]
			product.product_checked = !product.product_checked

			// 检测是否该店铺内的商品全选
			for (var i = 0; i < this.goods[shop_index].list.length; i++) {
				if (!this.goods[shop_index].list[i].product_checked) {
					this.goods[shop_index].all_checked = false
					this.checked_all = false
					return;
				}
			}
			this.goods[shop_index].all_checked = true

			// 检测购物车内的商品是否全部选中
			for (var i = 0; i < this.goods.length; i++) {
				if (!this.goods[i].all_checked) {
					this.checked_all = false
					return
				}
			}
			this.checked_all = true
		},

		// 检测购物车内的商品全部
		all_products_checked() {
			this.checked_all = !this.checked_all
			for (var i = 0; i < this.goods.length; i++) {
				this.goods[i].all_checked = this.checked_all
				for (var j = 0; j < this.goods[i].list.length; j++) {
					this.goods[i].list[j].product_checked = this.checked_all
				}
			}
		},
	},
	filters: {
		// 金额显示过滤 两位小数点，不足补0
		priceFilter(value) {
			var value = Math.round(parseFloat(value) * 100) / 100;
			var xsd = value.toString().split(".");
			if (xsd.length == 1) {
				value = value.toString() + ".00";
				return value;
			}
			if (xsd.length > 1) {
				if (xsd[1].length < 2) {
					value = value.toString() + "0";
				}
				return value;
			}
		}
	},

	computed: {
		// 已加入购物车商品数目
		add_products() {
			var add_products = 0
			for (var i = 0; i < this.goods.length; i++) {
				var product = this.goods[i].list
				for (var j = 0; j < product.length; j++) {
					add_products += product[j].number;
				}
			}
			return add_products
		},
		// 已选择商品数目
		selected_products() {
			var selected_products = 0
			for (var i = 0; i < this.goods.length; i++) {
				var product = this.goods[i].list
				for (var j = 0; j < product.length; j++) {
					if (product[j].product_checked) {
						selected_products++
					}
				}
			}
			return selected_products
		},

		// 购买商品总金额
		total_amount() {
			var total_price = 0.00
			for (var i = 0; i < this.goods.length; i++) {
				var product = this.goods[i].list
				for (var j = 0; j < product.length; j++)
					if (product[j].product_checked) {
						total_price += product[j].number * product[j].current_price
					}
			}
			return total_price
		},

		// 购物车全选
		all_checked() {
			for (var i = 0; i < this.goods.length; i++) {
				if (!this.goods[i].all_checked) {
					return false
				}
			}
			return true
		}
	}
})
