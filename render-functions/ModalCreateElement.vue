<script>
export default {
    name: 'ModalCreateElement',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        message: {
            type: String,
            required: true
        },
    },
    render(createElement) {
        return createElement('div',{
            class: 'modal',
        },[
            createElement('p',{
                class: 'message',
            }, this.message),
            createElement('button',{
                class: 'btn',
                on: {
                    click: this.clickCancelHandler
                }
            }, 'Cancel'),
            createElement('button',{
                class: 'btn',
                on: {
                    click: this.clickOkHandler
                }
            }, 'Ok')
        ]);
    },
    methods: {
        clickCancelHandler() {
            console.log('Click on cancel')
        },
        clickOkHandler() {
            console.log('Click on ok')
        },
    }
}
</script>