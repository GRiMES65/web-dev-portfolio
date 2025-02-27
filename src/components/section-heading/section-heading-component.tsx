import React from 'react'

type SectionHeadingProp = {
    children: React.ReactNode;
}

export default function SectionHeading({children} : SectionHeadingProp) {
  return (
    <h2 className='text-2xl font-semibold'>{children}</h2>
  )
}
