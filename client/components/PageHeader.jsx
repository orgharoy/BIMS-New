import React from 'react'

const PageHeader = ({pageTitle}) => {
  return (
    <div className="py-2">
        <h1 className="text-2xl font-bold">{pageTitle}</h1>
    </div>
  )
}

export default PageHeader