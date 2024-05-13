import { getLayout } from '@/components/layouts/layouts'
import Meta from '@/components/ui/meta'
import React from 'react'
import EducationPage from '@/components/educations'
export default function Educations() {
  return (
    <div className="container flex flex-col justify-center lg:h-screen relative">
    <Meta title={'Educations'} />
    <EducationPage />
  </div>
  )
}

Educations.getLayout = getLayout;
