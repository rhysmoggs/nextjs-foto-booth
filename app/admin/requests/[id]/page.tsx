import React, { FC } from 'react'

type ReqPageProps = {
  params: { id: string }
}

const RequestPage: FC<ReqPageProps> = ({ params: { id } }) => {
  return <div>Request Page {id}</div>
}

export default RequestPage
