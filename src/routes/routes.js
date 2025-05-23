import Home from "~/pages/Home/Home"
import Following from "~/pages/Following/Follow"
import Profile from "~/pages/Profile/Profile"
import Upload from "~/pages/Upload/Upload";
import Search from "~/pages/Search/Search";
import Live from '~/pages/Live'

import config from '~/config';

import { HeaderOnly } from "~/layouts";

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [
];

export { publicRoutes, privateRoutes }