Component({
    properties: {
        visible: {
            type: Boolean,
            value: false,
        },
        inputValue: {
            type: String,
            value: "",
        },
    },
    methods: {
        handleInput(e) {
            this.setData({
                inputValue: e.detail.value,
            });
            this.triggerEvent("input", e.detail.value);
        },
        closePopup() {
            this.triggerEvent("close");
        },
    },
});
