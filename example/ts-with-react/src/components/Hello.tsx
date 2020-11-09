import React from 'react'

interface IHelloProps {
  message: string
}

const Hello = (props: IHelloProps) => {
  return <h2>{props.message}</h2>
}

export default Hello