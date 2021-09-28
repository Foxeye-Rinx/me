import SearchButton from '@/components/Search/SearchButton/SearchButton'
import { useSearchShow } from '@/components/Search/hooks'

import { FC } from 'react'

const Index: FC = () => {
  const [_, changeShow] = useSearchShow()

  return (
    <span className="tooltip" data-tooltip="Search">
      <SearchButton
        className="btn-circle transition-colors duration-300"
        onClick={() => changeShow(true)}
      />
    </span>
  )
}

export default Index
