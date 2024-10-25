const app = getApp();

Component({
    data: {
        isCartOpen: false,
        shoppingCartItems: [],
    },

    lifetimes: {
        attached: function () {
            // 组件初始化时，获取全局购物车数据
            this.setData({
                shoppingCartItems: app.globalData.shoppingCartItems,
            });

            // 监听全局购物车数据的变化
            this.updateShoppingCart = () => {
                this.setData({
                    shoppingCartItems: app.globalData.shoppingCartItems,
                });
            };
            app.globalData.shoppingCartItems = new Proxy(app.globalData.shoppingCartItems, {
                set: (target, key, value) => {
                    target[key] = value;
                    this.updateShoppingCart();
                    return true;
                },
            });
        },

        detached: function () {
            // 组件销毁时，移除监听
            app.globalData.shoppingCartItems = app.globalData.shoppingCartItems.slice();
        },
    },

    methods: {
        toggleCart() {
            this.setData({
                isCartOpen: !this.data.isCartOpen,
            });
        },

        closeCart() {
            this.setData({
                isCartOpen: false,
            });
        },

        checkout() {
            // 处理结算逻辑
            console.log("结算", this.data.cartItems);
        },

        addToCart(item) {
            const cartItems = this.data.cartItems;
            const existingItem = cartItems.find((i) => i.id === item.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cartItems.push({ ...item, quantity: 1 });
            }

            this.setData({
                cartItems: cartItems,
            });
        },
    },
});
