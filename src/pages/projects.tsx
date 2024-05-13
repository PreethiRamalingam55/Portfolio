import { getLayout } from '@/components/layouts/layouts'
import Meta from '@/components/ui/meta'
import React from 'react'
import ProjectsPage from '@/components/projects'
export default function Projects() {
  return (
    <div className="container flex flex-col justify-center lg:h-screen relative">
    <Meta title={'Projects'} />
    <ProjectsPage />
  </div>
  )
}

Projects.getLayout = getLayout;
