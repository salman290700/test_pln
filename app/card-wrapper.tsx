"use client"
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import React, { ReactNode } from 'react'
interface CardWrapperProps {
    children?: ReactNode;
    headerLabel: string;
    title: string,
    backButtonLabel?: string;
    backButtonHref?: string
    showSocial?: boolean,
    classname?:string
}

const CardWrapperClass = ({
    children,
    headerLabel,
    title,
    backButtonLabel,
    backButtonHref,
    showSocial,
    classname
}: CardWrapperProps) => {
    const className = classname + "w-full shadow-md"
  return (
    <Card className={className}>
        <CardHeader className='flex flex-col items-center'>
            <h1 className="md:text-2xl text-shadow-2xs">{title}</h1>
            
            {/* <Header label={headerLabel}/> */}
        </CardHeader>
        <CardContent className=''>
            {children}
        </CardContent>        
        <CardFooter>
            {/* <BackButton
                label={backButtonLabel}
                href={backButtonHref}
            /> */}
        </CardFooter>

    </Card>
  )
}

export default CardWrapperClass