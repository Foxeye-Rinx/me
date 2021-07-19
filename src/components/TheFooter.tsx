import React, { FC } from 'react'
import { Icon } from '@iconify/react/'
import Logo from './Logo'

const TheFooter: FC = () => {
  return (
    <footer className="px-4 py-4 md:py-12 mb-16 space-y-4 container m-auto md:mb-auto">
      <div className="py-4">
        <span className="space-x-2">
          <span className="font-bold text-xl align-middle">DEPLOYS BY</span>
          <Icon icon="logos:firebase" className="w-7 h-7" />
        </span>
      </div>

      <div className="flex-col items-center md:flex-row flex md:justify-between">
        <span className="flex flex-col md:flex-row items-center space-x-4">
          <Logo />

          <span className="p-4 flex text-center md:text-left flex-col space-y-1 md:border-l-2 border-accent  text-gray-500">
            <span>
              <span className="font-semibold">Made by</span>
              <Icon icon="logos:gatsby" className="w-5 h-5 mx-2" />
              TomokiMiyauci
            </span>
            <span className="text-sm">
              ©{new Date().getFullYear()} miyauci.me
            </span>
          </span>
        </span>

        <div className="flex flex-col md:flex-row items-center md:space-x-7">
          <div className="my-4 text-gray-500 space-x-6">
            <a
              href="https://www.npmjs.com/~miyauci"
              target="_blank"
              className="transition duration-200 hover:text-accent"
            >
              <Icon icon="eva:npm-outline" className="w-8 h-8" />
            </a>

            <a
              href="https://twitter.com/tomoki_miyauci"
              target="_blank"
              className="transition duration-200 hover:text-accent"
            >
              <Icon icon="uil:twitter-alt" className="w-8 h-8" />
            </a>

            <a
              href="https://github.com/TomokiMiyauci"
              target="_blank"
              className="transition duration-200 hover:text-accent"
            >
              <Icon icon="uil:github-alt" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default TheFooter
