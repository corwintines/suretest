import chalk = require('chalk')
import { fileSearch } from './suretest-filesearch'

export const suretestCore = () => {
    console.warn(chalk.blue(fileSearch()))
}
