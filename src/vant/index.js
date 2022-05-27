// 需要使用的组件
import { Popup, Image, Lazyload, ImagePreview, Tabbar, TabbarItem, Swipe, SwipeItem, Toast, Button } from "vant";

// 通过install方法添加到实例中
const vant = {
    install(app) {
        app.use(Popup);
        app.use(Image);
        app.use(Lazyload);
        app.use(ImagePreview);
        app.use(Tabbar);
        app.use(TabbarItem);
        app.use(Swipe);
        app.use(SwipeItem);
        app.use(Toast);
        app.use(Button);
    },
};

export default vant;