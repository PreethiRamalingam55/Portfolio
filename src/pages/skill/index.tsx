import React from 'react'
import Skills from '@/components/skill'
import { getLayout } from '@/components/layouts/layouts';
export default function Skill() {
  return (
    <div>
        <Skills />
    </div>
  )
}
Skill.getLayout = getLayout;