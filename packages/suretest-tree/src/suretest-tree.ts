import FileNode from './Nodes/FileNode'

export default class SuretestTree {
    public children: Array<FileNode>

    constructor(filepaths: Array<string>) {
        this.children = this._setupFileNodeChildren(filepaths)
    }

    private _setupFileNodeChildren = (filepaths: Array<string>) => {
        return filepaths.map((filepath) => new FileNode(filepath))
    }
}
