import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import config from '~/config';

// publicRoutes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile }, // có ký tự @ và kí tự ko cố định
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.upload,
        component: Search,
        layout: null,
    },
    { path: config.routes.live, component: Live },
];

// privateRoutes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
