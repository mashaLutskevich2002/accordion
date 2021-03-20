import './App.css';
// import React from 'react';
import React, { useState }  from 'react';
// import  icon from './img/icon-arrow-down.svg';
import  women from './img/illustration-woman-online-desktop.svg';
import  bg from './img/bg-pattern-mobile.svg';
import  bg1 from './img/bg-pattern-desktop.svg';
import box from './img/illustration-box-desktop.svg';
import arrowIcon from './img/icon-arrow-down.svg';

const App = () => {
  return (
    <MainDiv />
  );
}


const MainDiv = () => {
  return (
    <div className='main'>
      <LeftDiv />
      <img className='svgThird' src={box} alt='box'></img>
      <RightDiv />
    </div>
  );
}


const LeftDiv = () => {
  return (
    <div className='main__pic'>
     <img className='svgFirst' src={bg1} alt='bg'></img>
      <img className='svgSecond' src={women} alt='women'></img>
      <img className='svgForth' src={bg} alt='box'></img>
    </div>
  );
}


const RightDiv = () => {
  return (
    <div>
      <div className='FAQ'>
      <h1>FAQ</h1>
    </div>
      <Accardion />
    </div>

  );
}





const Accardion = () => {
  const questions = {
    first: {
      question: 'How many team members can I invite?',
      answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
    },
    second: {
      question: 'What is the maximum file upload size?',
      answer: 'No more than 2GB. All files in your account must fit your allotted storage space.'
    },
    third: {
      question: 'How do I reset my password?',
      answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
    },
    forth: {
      question: 'Can I cancel my subscription?',
      answer: 'Yes! Send us a message and we’ll process your request no questions asked.'
    },

    fifth: {
      question: ' Do you provide additional support? ',
      answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
    }
  }

  const listItems = Object.keys(questions).map(
    (key) => {
      return (
        <AccordionItem id={key} obj={questions[key]} />
      )
    }

  );

  return (
    <div>
      { listItems}
    </div>

  );
}

const AccordionItem = (props) => {
  const [isOpen, setState] = useState(false);
 
  return (
    <div>
      <div onClick={() => setState(!isOpen)} >
        <Question text={props.obj.question} open={isOpen}/>
        <Answer text={props.obj.answer} open={isOpen}/>
      </div>
      <hr></hr>
    </div >
  )
}


const Question = (props) => {
  let className;
  let bold
  if (props.open) {
    className = 'another';
    bold ='bold';
  }

  return (
    <div className='quest'>
      <p className={bold}>{props.text}</p>
      <img className={className} src={arrowIcon} alt='strelka' />
    </div>
  )
}


const Answer = (props) => {
  let style;
  if (props.open) {
    style = { display: 'block' };
  } else {
    style = { display: 'none' };
  }

  return (
    <div className='answer' style={style}>
      <p>{props.text}</p>
    </div>
  )
}


export default App;
