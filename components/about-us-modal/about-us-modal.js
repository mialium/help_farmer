// components/about-us-modal/about-us-modal.js
Component({
    properties: {
        visible: {
            type: Boolean,
            value: false,
        },
    },

    methods: {
        closeModal() {
            this.setData({
                visible: false,
            });
        },
    },
});
