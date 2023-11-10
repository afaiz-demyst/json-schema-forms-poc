import { useState } from 'react'
// import './App.css'
import '../dist/output.css'
import YourBusiness from './pages/YourBusiness/YourBusiness'
import AssetDetails from './pages/AssetDetails/AssetDetails'
import { CustomRadioGroup } from './rjsfComponents/RadioGroup';
import { CustomSelectBox } from './rjsfComponents/SelectBox';
import { useMachine } from '@xstate/react';
import { formMachine } from './formMachine';
import { Header } from './components/Header';
import CustomObjectFieldTemplate from './rjsfComponents/CustomObjectFieldTemplate';

function App() {
  const [theme, setTheme] = useState('')
  const [state, send] = useMachine(formMachine);

  const widgetRegistry = {
    'RadioButtonGroup': CustomRadioGroup,
    'SelectBox': CustomSelectBox
  }
  const templateRegistry = {
    'CustomObjectFieldTemplate': CustomObjectFieldTemplate
  }

  const renderSteps = (curState) => {
    switch (curState.toStrings()[0]) {
      case 'YourBusiness':
        return <YourBusiness widgetRegistry={widgetRegistry} templateRegistry={templateRegistry} send={send} />
      case 'AssetDetails':
        return (
          <>
            <YourBusiness widgetRegistry={widgetRegistry} templateRegistry={templateRegistry} send={send}/>
            <AssetDetails widgetRegistry={widgetRegistry} templateRegistry={templateRegistry} send={send}state={state}/>
          </>
        )
      case 'LoanDetails':
        return (
          <>
            <YourBusiness widgetRegistry={widgetRegistry} templateRegistry={templateRegistry} send={send} />
            <AssetDetails widgetRegistry={widgetRegistry} templateRegistry={templateRegistry} send={send} state={state}/>
            <div className='border'>Loan Details Page</div>
          </>
        )
    }
  }

  return (
    <div className={theme}>
      <Header
        theme={theme}
        setTheme={setTheme}
      />
      <div className="flex flex-col justify-start content-center flex-wrap min-w-[320px] min-h-screen p-8 gap-[32px] bg-white dark:bg-slate-800 text-black dark:text-mist-grey ">
        {renderSteps(state)}
      </div>
    </div>
  )
}

export default App
