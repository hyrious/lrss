'use strict'

export const importJs = url =>
  new Promise((res, rej) => {
    const script = document.createElement('script')
    script.onload = () => res(script)
    script.onerror = () => rej(script)
    script.src = url
    document.body.appendChild(script)
  })

export const getJson = async url => await (await fetch(url)).json()

export const greeting = () =>
  console.log(
    '%cwelcome to %cLRSS',
    'font-weight: bold',
    `
      color: purple;
      background: pink;
      padding: 2px 8px;
      border: 2px solid;
      border-radius: 3px;
    `
  )
