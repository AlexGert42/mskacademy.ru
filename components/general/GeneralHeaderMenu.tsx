import stls from '@/styles/components/general/GeneralHeaderMenuGeneralHeaderMenu.module.sass'
import { TypeGeneralClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeGeneralHeaderMenuProps = TypeGeneralClassNames

const GeneralHeaderMenu = ({ classNames }: TypeGeneralHeaderMenuProps) => {


    return (
        <div className={cn(stls.container, getClassNames({ classNames })) || undefined }>
            header menu
        </div>
      )
}

export default GeneralHeaderMenu