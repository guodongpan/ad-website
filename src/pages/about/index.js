import React from 'react';
import Layout from '@theme/Layout';
import CurriculumVitae from '@site/src/components/CurriculumVitae';

export default function Home() {
    return (
        <Layout
            title={`关于阿东`}
            description="阿东的网站的作者：阿东">
            <main>
                <CurriculumVitae />
            </main>
        </Layout>
    );
}
