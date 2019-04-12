import { category, content, Category, Content } from "./data"

/**
 * 养育一棵树
 * @param parent 父节点的引用
 * @param category 数组
 */
function growUp(parent: Category, category: Category[]) {
    let children: Category[] = [];
    while (true) {

        let index = category.findIndex((ele): boolean => {

            return ele.parent_id == parent._id
        })
        if (index != -1) {
            children.push(category[index])
            category.splice(index, 1)

        } else {
            break;
        }
    }

    children.forEach((ele) => {
        growUp(ele, category)
    })

    parent.children = children
}

/**
 * 转换成一个树
 * @param category 数组
 */
function convertToTree(category: Category[]) {
    // 制作副本
    let tempCategory: Category[] = JSON.parse(JSON.stringify(category));

    // 找到根节点
    let rootIndex = tempCategory.findIndex((ele): boolean => {
        return ele._id == ele.root_id
    })

    // 抽出根节点
    let root = tempCategory[rootIndex];
    tempCategory.splice(rootIndex, 1);

    // 长大
    growUp(root, tempCategory)

    return root
}

console.log(convertToTree(category))