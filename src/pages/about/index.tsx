import React from 'react'
import Abouts from '@/components/about/about'
import { getLayout } from '@/components/layouts/layouts';
export default function About() {
  return (
    <div>
        <Abouts />
    </div>
  )
}

About.getLayout = getLayout;