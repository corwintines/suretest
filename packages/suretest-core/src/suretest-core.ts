import SuretestTree from '@suretest/suretest-tree'

import { fileSearch } from './suretest-filesearch'

export const suretestCore = () => {
    const tree = new SuretestTree(fileSearch())
    console.warn(tree)
}
