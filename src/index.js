import { Router } from "./router.js";
import Controls from "./control.js";
import Events from "./events.js";
import {
    toHome,
    toUniverse,
    toExplore
} from './elements.js'

const controls = Controls({
    toHome,
    toUniverse,
    toExplore
})

Events({ controls })

const router = new Router();

router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/explorer', '/pages/explorer.html')
router.add(404, '/pages/404.html')

router.handle()
window.onpopstate = () => router.handle();
window.route = () => router.route();