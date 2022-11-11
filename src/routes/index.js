import { HeaderOnly } from '~/components/Layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// publicRoutes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile }, // có ký tự @ và kí tự ko cố định
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    { path: '/search', component: Search, layout: null },
];

// privateRoutes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
