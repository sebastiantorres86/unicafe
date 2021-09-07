import React, { useState } from 'react'

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}

const StatisticLine = ({ value, text }) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}

const Statistics = ({ good, neutral, bad, allClicks }) => {
  if (good + neutral + bad === 0) {
    return <div>No feedback given</div>
  }
  return (
    <div>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={good + neutral + bad} />
      <StatisticLine
        text='average'
        value={allClicks / (good + neutral + bad)}
      />
      <StatisticLine
        text='positive'
        value={`${(good / (good + neutral + bad)) * 100} %`}
      />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const handleGoodClick = () => {
    setAll(allClicks + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks + 0)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks - 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        allClicks={allClicks}
      />
    </div>
  )
}

export default App
