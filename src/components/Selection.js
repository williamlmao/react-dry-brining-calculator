import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { ReactSVG } from 'react-svg'

const Selection = ({radioOptions, callback, title}) => {

  // const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState(null);
  
  function RenderSubList() {

    const renderButtonContent = (radio) => {
      const renderIcon = radio.icon ? (<ReactSVG className="buttonIcon" src={radio.icon} />) : null
      const renderSubtext = radio.subtext ? (<span className="radioButtonSubtext">{radio.subtext}</span>) : null
      return (<div className="radioButton">  {renderIcon} {radio.name} {renderSubtext} </div>)
    }

    if (radioOptions) {
      return (
        <>
        <div style={{animation: "fadeIn 1s"}}>
        {renderTitle()}
          <ButtonGroup toggle>
            {radioOptions.map((radio, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                variant="outline-secondary"
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => {
                  setRadioValue(e.currentTarget.value)
                  callback(e.currentTarget.value)
                }}
              >
              {renderButtonContent(radio)}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
    
        </>
      );
    }
  }

  // Have to render title, otherwise field without title will have an empty H3
  function renderTitle() {
    if (title) {
      return <h3 className="formTitle">{title}</h3>
    }
  }

  return (    
    <div>
      <Form>
        {RenderSubList()}
      </Form>
    </div>
  )
}

export default Selection