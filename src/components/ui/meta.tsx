import Head from 'next/head'
import React from 'react'

function Meta({ title: currentPageTitle }:any) {
    return (
        <Head>
            <title>{`${currentPageTitle} ${"Protfolio"}`}</title>
        </Head>
    )
}

export default Meta