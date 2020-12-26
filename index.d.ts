export type Input = {
  id: string
  user: string
  Date: string
  Votes: string
}

export type Hint = {
  id: string
  user: string
  Date: string
  Votes: string
}

export type ArrayOfString = Array<string>
export type ArrayOfInput = Array<Input>
export type ArrayOfHint = Array<Hint>

export type InputInfoRetrieve = ArrayOfInput

export type Output = ArrayOfString

export type HintInfoRetrieve = ArrayOfHint
