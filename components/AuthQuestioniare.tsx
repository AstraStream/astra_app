import React from 'react'
import Link from 'next/link'

type AuthQuestioniareProps = {
    title: string;
    link: {
        title: string;
        route: string;
    }
}

const AuthQuestioniare = ({
    title,
    link
}: AuthQuestioniareProps) => {
    console.log(link, title)
  return (
    <p className="text-lg text-center flex justify-center gap-x-1 font-medium">
        {title}
        <Link
            href={link.route}
            className="text-primary"
        >
            {link.title}
        </Link>
    </p>
  )
}

export default AuthQuestioniare