import { toppingType } from '/@/types/topping'

const OPTIONS: toppingType[] = [
  { key: 1, label: 'データ使い放題 (24時間）', remainingDays: 1 },
  { key: 2, label: 'データ追加1GB（7日間）', remainingDays: 7 },
  { key: 3, label: 'データ追加3GB（30日間）', remainingDays: 30 },
  { key: 4, label: 'データ追加20GB（30日間）', remainingDays: 30 },
  { key: 5, label: 'データ追加60GB（90日間）', remainingDays: 90 },
  { key: 6, label: 'データ追加150GB（180日間）', remainingDays: 180 }
]

export default OPTIONS
