import './App.css';
import React from 'react';
// import icon from '../public/img/'
import  icon from './img/icon-arrow-down.svg';


const App = () => {
  return (
    <MainDiv />
  );
}


const MainDiv = () => {
  return (
    <div className='main'>
      <LeftDiv />
      <img className='svgThird' src='../img/illustration-box-desktop.svg' alt='box'></img>
      <RightDiv />
    </div>
  );
}


const LeftDiv = () => {
  return (
    <div className='main__pic'>
      <svg
        className='svgFirst'
        width="100%"
        height='100%'
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fillRule="nonzero" fill="none" opacity=".099">
          <path d="M468.755 937.353L19.744 671.73c-14.295-8.047-26.548-21.23-12.62-29.878L457.734 381.89c6.754-4.194 17.018-6.946 23.903-2.936l471.265 273.827c14.296 8.308 16.861 31.45 2.619 39.837L527.925 936.933a59.64 59.64 0 01-59.17.42z" fill="#6862E6" />
          <path d="M468.755 561.353L19.744 295.73c-14.295-8.047-26.548-21.23-12.62-29.878L457.734 5.89c6.754-4.194 17.018-6.946 23.903-2.936l471.265 273.827c14.296 8.308 16.861 31.45 2.619 39.837L527.925 560.933a59.64 59.64 0 01-59.17.42z" stroke="#1E1F36" />
          <path d="M468.755 636.353L19.744 370.73c-14.295-8.047-26.548-21.23-12.62-29.878L457.734 80.89c6.754-4.194 17.018-6.946 23.903-2.936l471.265 273.827c14.296 8.308 16.861 31.45 2.619 39.837L527.925 635.933a59.64 59.64 0 01-59.17.42z" stroke="#1E1F36" />
        </g>
      </svg>
      <img className='svgSecond' src='../img/illustration-woman-online-desktop.svg' alt='women'></img>
      <img className='svgForth' src='../img/bg-pattern-mobile.svg' alt='box'></img>
    </div>
  );
}


const RightDiv = () => {
  return (
    <div>
      <Zagolovok />
      <Accardion />
    </div>

  );
}


const Zagolovok = () => {
  return (
    <div className='FAQ'>
      <h1>FAQ</h1>
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
  return (
    <div>
      <div>
        <Question questionId={props.id} text={props.obj.question} imgId={props.id} />
        <Answer answerId={props.id} text={props.obj.answer} />
      </div>
      <hr></hr>
    </div >
  )
}

const clickEventhandler = (e, answer) => {
  e.preventDefault();
  const a = document.getElementById(answer);
  const strelka = e.target.childNodes[1];
  console.log('==== Arrow');
  console.log(strelka)
  if (a.style.display === 'none') {
    a.style.display = 'block';
    strelka.className = 'svgStrelka another';
  } else {
    a.style.display = 'none';
    strelka.className = 'svgStrelka';

  }
}


const Question = (props) => {
  return (
    <div className='quest' onClick={(e) => clickEventhandler(e, props.questionId)}>
      <p>{props.text}</p>
      <img id={props.imgId} src={icon} alt='strelka' />
    </div>
  )

}


const Answer = (props) => {
  return (
    <div className='answer' id={props.answerId}>
      <p>{props.text}</p>
    </div>
  )
}


export default App;
