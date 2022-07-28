import React, { useMemo } from 'react'
// import { useRouter } from 'next/router'
// import Link from 'next/link'
// import getConfig from 'next/config'
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const pathTranslations = require('../../config/router.js')
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const whiteList = require('../../config/whiteList.js')

export const { isValidElement } = React

/**
 * www.eyebuydirect.com         en-us
 * au.eyebuydirect.com          au
 * ca.eyebuydirect.com          en-ca
 * ca.eyebuydirect.com/fr       ca-fr / fr
 * www.eyebuydirect.fr          fr-fr
 */
export interface TranslatedLinkProps {
    href: string
    children: React.ReactNode
}
const TranslatedLink: React.FC<TranslatedLinkProps> = ({ href = '', children }) => {
    // const { locale, locales } = useRouter()
    const locales = ['en-us','en-ca','en-au','fr','fr-fr']
    const locale = 'en-us'
    // const { publicRuntimeConfig } = getConfig()
    // const { EBD_DOMAINS } = publicRuntimeConfig
    //mapping domain of old www website
    const ebdDomainConfig = useMemo(() => {
        const obj: { [key: string]: string | undefined } = {}
        locales?.forEach((key: string) => {
            // obj[key] = `https://${EBD_DOMAINS[key]}`
        })
        return obj
    }, [locales])

    const finalhref = href.replace('/fr/', '/')
    // if href is not in data of whiteList, it will need add prefix
    const prefix = finalhref.search(/^(https|http)/) > -1

    // const lang = locale === 'fr-fr' ? 'fr' : 'en'
    const lang = 'en'

    // Get translated route for non-default locales
    // const translatedPath: string = pathTranslations[lang][href]
    // Set `as` prop to change displayed URL in browser

    if (prefix) {
        if (isValidElement(children)) {
            // return React.cloneElement(children, { href: `${prefix}${translatedPath || finalhref}` })
        }
    }

    if (finalhref.search(/^(https|http)/) > -1) {
        if (isValidElement(children)) {
            return React.cloneElement(children, { href: finalhref, target: '_blank', rel: 'noopener noreferrer' })
        }
    }

    return (
        // <Link href={finalhref} as={translatedPath}>
        //     {children}
        // </Link>
        <a href={finalhref}>
             {children}
        </a>
    )
}

export default TranslatedLink
