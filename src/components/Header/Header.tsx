import React from 'react'

export const Header = ({theme, setTheme}) => {
  return (
    <header className="bg-core-cobalt-blue p-4 text-white dark:bg-granite-grey">
        <div className="container mx-auto flex flex-row-reverse">
          <button
            className="border rounded p-2"
            onClick={() => setTheme(theme === 'dark' ? '' : 'dark')}
          >Swap theme</button>
        </div>
      </header>
  )
}

