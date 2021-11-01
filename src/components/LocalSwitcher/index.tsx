import { Fragment, useCallback } from 'react'
import Link from 'next/link'
import { useRouter, NextRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Menu, Transition } from '@headlessui/react'

type LocalItem = {
  [key: string]: string
}

const LocaleItems: LocalItem = {
  en: '🇬🇧 EN',
  fr: '🇫🇷 FR',
}

export default function LocaleSwitcher() {
  const router: NextRouter = useRouter()
  const { pathname, query, asPath } = router

  const { t } = useTranslation()

  const { locales, locale: activeLocale } = router
  const otherLocales =
    locales && locales.filter((locale) => locale !== activeLocale)

  const handleLocalClick = useCallback(
    (pathname, query, asPath, locale) => {
      router.push({ pathname, query }, asPath, { locale })
    },
    [activeLocale]
  )

  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="px-2 py-1.5 rounded-md bg-gray-100 font-semibold cursor-pointer">
        {LocaleItems[`${activeLocale}`]}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="div"
          className="absolute right-0 w-max mt-2 origin-top-right rounded-md bg-gray-100"
        >
          <div className="px-1 py-1">
            {otherLocales &&
              otherLocales.map((locale, i) => {
                return (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <button
                        key={locale}
                        className={`${
                          active ? 'bg-gray-200 rounded-md' : ''
                        } px-1 py-0.5 font-semibold bg-gray-100 cursor-pointer`}
                        onClick={() =>
                          handleLocalClick(pathname, query, asPath, locale)
                        }
                      >
                        {LocaleItems[`${locale}`]}
                      </button>
                    )}
                  </Menu.Item>
                )
              })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
