import { locales } from '@/i18n/types/locales'
import { getDictionary } from '@/i18n/get-dictionaries'
import SideBarEntry from '@/components/Guide/SideBarEntry'
import { ScrollArea } from 'radix-ui'

export default async function layout(props: {
  params: Promise<{
    lang: locales
  }>
}) {
  const { lang } = await props.params
  const dictionary = await getDictionary(lang)

  const sidebar = dictionary.guide.sidebar

  return (
    <ScrollArea.Root className='flex h-screen flex-col overflow-hidden border-r border-blue-400 p-8 pt-2 dark:border-blue-300'>
      <ScrollArea.Viewport>
        <div className='flex flex-col'>
          <SideBarEntry
            text={sidebar.introduction}
            link='/guide'
          />
        </div>
      </ScrollArea.Viewport>

      <ScrollArea.Scrollbar
        className='flex touch-none bg-stone-200 p-0.5 transition-colors ease-out select-none
                   data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col
                   data-[orientation=vertical]:w-2.5
                   dark:bg-stone-950'
        orientation='vertical'
      >
        <ScrollArea.Thumb
          className='relative flex-1 rounded-full bg-blue-400 before:absolute
                     before:top-1/2 before:left-1/2 before:size-full
                     before:min-h-11 before:min-w-11 before:-translate-x-1/2
                     before:-translate-y-1/2 dark:bg-blue-300'
        />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}
