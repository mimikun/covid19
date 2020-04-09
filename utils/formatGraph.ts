type DataType = {
  日付: Date
  小計: number
  合算: string
}

type GraphDataType = {
  label: string
  transition: number
  cumulative: number
  summarized: boolean
}

export default (data: DataType[]) => {
  const graphData: GraphDataType[] = []
  const today = new Date()
  let patSum = 0
  data
    .filter(d => new Date(d['日付']) < today)
    .forEach(d => {
      const date = new Date(d['日付'])
      const subTotal = d['小計']
      if (!isNaN(subTotal)) {
        patSum += subTotal * 1
        graphData.push({
          label: `${date.getMonth() + 1}/${date.getDate()}`,
          transition: subTotal,
          cumulative: patSum,
          summarized: !!d['合算']
        })
      }
    })
  return graphData
}
