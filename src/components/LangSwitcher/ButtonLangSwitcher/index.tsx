import ButtonLangSwitcher from '@/components/LangSwitcher/ButtonLangSwitcher/ButtonLangSwitcher'
import { useContext, useEffect } from 'react'
import { useShortcut } from 'react-hookable'
import { useSafeLogEvent } from '@/hooks/firebase/analytics'

import Context from '@/components/LangSwitcher/context'
import type { FC } from 'react'

const Index: FC = () => {
  const [_, { on: showDialog }] = useContext(Context)
  const { safeLogEvent } = useSafeLogEvent()
  const { bind } = useShortcut()

  useEffect(() => {
    bind(
      {
        cmd: true,
        key: 'i'
      },
      ({ code, metaKey, shiftKey, ctrlKey, key, altKey }) => {
        showDialog()
        safeLogEvent((analytics, logEvent) =>
          logEvent(analytics, 'shortcut', {
            code,
            metaKey,
            shiftKey,
            ctrlKey,
            key,
            altKey
          })
        )
      }
    )
  }, [])

  return (
    <span className="tooltip" data-tooltip="Translate ⌘i">
      <ButtonLangSwitcher onClick={showDialog} />
    </span>
  )
}

export default Index
