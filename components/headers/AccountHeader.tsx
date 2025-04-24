import React, { FC } from 'react'

type Props = {
    title: string;
    headline: string;
}

const AccountHeader: FC<Props> = ({
  title,
  headline
}) => {
  return (
    <header className="text-center space-y-0.5 flex flex-col items-center">
      <p className="text-2xl opacity-90">{headline}</p>
      <h1 className="text-3xl font-semibold w-11/12">{title}</h1>
    </header>
  )
}

export default AccountHeader