import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'

const greetings = [
  'hi',
  'привет',
  'hola',
  'bonjour',
  'привіт',
  'olá',
  'こんにちは',
  'cześć',
  '你好',
  'hallo',
  'ciao',
  'salut',
]

export function CyclingGreeting() {
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const interval = window.setInterval(() => setIndex((current) => (current + 1) % greetings.length), 2600)
    return () => window.clearInterval(interval)
  }, [reduceMotion])

  return <><span className="sr-only">hi</span><span className="cycling-greeting" key={index} aria-hidden="true">{greetings[index]}</span></>
}
