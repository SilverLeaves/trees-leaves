/**
 * _id用来标注节点
 * root_id用来标注整个树群
 * parent_id用来索引父节点
 * content_id用来索引叶子内容
 * children用来做树
 */
export interface Category {
    _id: string,
    parent_id: string,
    root_id: string,
    content_id: string | null,
    children?: Category[],
    [propName: string]: any
}
/**
 * _id用来标注节点
 */
export interface Content {
    _id: string,
    [propName: string]: any;
}

export let category: Category[] = [

    {
        _id: "2",
        parent_id: "1",
        root_id: "1",
        content_id: null,
    }, {
        _id: "3",
        parent_id: "1",
        root_id: "1",
        content_id: null,
    },
    {
        _id: "1",
        parent_id: "1",
        root_id: "1",
        content_id: null,
    },
    {
        _id: "4",
        parent_id: "2",
        root_id: "2",
        content_id: null,
    },
    {
        _id: "5",
        parent_id: "1",
        root_id: "1",
        content_id: "c1",
    },
    {
        _id: "6",
        parent_id: "4",
        root_id: "4",
        content_id: "c2",
    }
]

export let content: Content[] = [{
    _id: "c1"
}, {
    _id: "c2"
}]