// components/contact-us-modal/contact-us-modal.js
Component({
    properties: {
        visible: {
            type: Boolean,
            value: false,
        },
        qrCodeUrl: {
            type: String,
            value: "",
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
