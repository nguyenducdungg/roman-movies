import React from 'react';

import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import PageMovieManager from '../PageMovieManager';

export default () => (
    <div
        style={{
            height: '100vh',
        }}
    >
        <ProLayout
            title='Admin Film'
            location={{
                pathname: '/',
            }}
            route={{
                routes: [
                    {
                        path: '/config',
                        name: 'Movies',
                        routes: [
                            {
                                path: '/sproduct',
                                name: '产品配置',
                                indexRoute: {
                                    component: 'pro',
                                },
                                routes: [
                                    {
                                        path: 'new',
                                        component: 'ConfigProduct/NewConfig',
                                    },
                                    {
                                        path: 'edit/:productKey',
                                        component: 'ConfigProduct/NewConfig',
                                    },
                                    {
                                        path: 'detail/:productKey',
                                        component: 'ConfigProduct/Detail',
                                    },
                                ],
                            }]
                    },


                    {
                        path: 'tools',
                        name: 'User',
                        routes: [
                            {
                                path: 'ttsql',
                                name: 'MySQL转BlinkTT流表',
                                component: 'ToolTT',
                            },
                        ],
                    },
                ],
            }}
        >
            <PageContainer content="欢迎使用">
                <PageMovieManager />
            </PageContainer>
        </ProLayout>
    </div >
);