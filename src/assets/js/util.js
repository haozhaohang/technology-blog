// 创建action
export const actionCreator = type => payload => ({ type, payload });

// 比较两个对象下的属性是否相同
export const equalByProps = (obj1, obj2, props) =>
    props.some(prop => obj1[prop] !== obj2[prop]);

// 设置通用mixin
export const common = {
    handlePageChange(pageNum) {
        const { pageIndex, updateQuery } = this.props;

        updateQuery({ pageIndex: pageNum })
    }
};
