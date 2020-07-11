import chalk = require('chalk')
import { suretestTree } from '@suretest/suretest-tree'

import { fileSearch } from './suretest-filesearch'

export const suretestCore = () => {
    suretestTree()
    console.warn(chalk.blue(fileSearch()))
}
