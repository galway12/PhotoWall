// 需要使用的组件
import { Popup, Image, Lazyload, ImagePreview } from "vant";

// 通过install方法添加到实例中
const vant = {
    install(app) {
        app.use(Popup);
        app.use(Image);
        app.use(Lazyload);
        app.use(ImagePreview);
    },
};

export default vant;