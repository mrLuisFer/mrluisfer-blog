type RandomNumberProps = {
  length?: number
  needSndVal?: boolean
}

export const randomNumber = ({ length = 6, needSndVal = false }: RandomNumberProps) => {
  const val = Math.floor(Math.random() * length) + 1
  if (needSndVal) {
    let val2: number = Math.round(Math.random() + length) + 2

    if (val === val2) {
      val2 += 1
      return { val, val2 }
    }

    return { val, val2 }
  }

  return { val }
}
